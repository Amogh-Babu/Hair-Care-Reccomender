import { useEffect, useRef } from "react";

export default function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const createHair = () => {
      const hair = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const startX = Math.random() * window.innerWidth;
      const curliness = Math.random() * 20 + 10;
      const waveHeight = Math.random() * 30 + 20;
      const waveCount = 3 + Math.floor(Math.random() * 3);

      let d = `M ${startX} -20 `;

      for (let i = 1; i <= waveCount; i++) {
        const x = startX + (i % 2 === 0 ? -curliness : curliness);
        const y = i * waveHeight;
        d += `Q ${x} ${y - waveHeight / 2}, ${startX} ${y} `;
      }

      hair.setAttribute("d", d);
      hair.setAttribute("stroke", "white");
      hair.setAttribute("stroke-width", "0.5");
      hair.setAttribute("fill", "none");
      hair.style.opacity = "0.05";

      const anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
      anim.setAttribute("attributeName", "transform");
      anim.setAttribute("attributeType", "XML");
      anim.setAttribute("type", "translate");
      anim.setAttribute("from", "0 0");
      anim.setAttribute("to", `0 1100`);
      anim.setAttribute("dur", `${10 + Math.random() * 10}s`);
      anim.setAttribute("repeatCount", "1");
      anim.setAttribute("fill", "freeze");

      hair.appendChild(anim);
      container.appendChild(hair);

      anim.beginElement();

      const cleanup = () => {
        if (container.contains(hair)) container.removeChild(hair);
      };
      anim.addEventListener("endEvent", cleanup);
      hair.addEventListener("animationend", cleanup);
    };

    const interval = setInterval(() => {
      createHair();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <svg
        ref={containerRef}
        className="absolute inset-0 z-0 pointer-events-none"
        width="100%"
        height="100%"
      ></svg>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="mb-6 text-lg">Start your journey here</p>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
          Start
        </button>
      </div>
    </div>
  );
}
