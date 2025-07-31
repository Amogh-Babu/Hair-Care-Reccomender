import { useNavigate } from 'react-router-dom';
import '../index.css'


const Hompage = ({}) => {
  const navigate = useNavigate();

    const handleStart = () => {
        navigate('/form/hairtype');
    }


  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(-45deg, #ece99a, #f6f1df, #cbe0ed, #72b7ea, #f6ca97, #ffffff);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          z-index: -1;
          opacity: 0.7;
        }
      `}</style>

    <div className="animated-bg" />

     <div class="fixed top-[45%] left-[17%] transform -translate-y-1/2 w-96 h-64 bg-neutral-900/40 rounded-xl border-8 border-white shadow-3xl ">
         <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
             <blockquote class="text-center text-4xl font-light font-sans  text-gray-900 dark:text-white ">
             <span class="pr-2">Your</span>
             <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-tr from-[#72b7ea] to-[#146db0] z-0">
               <span class="relative text-white dark:text-white">personal</span>
             </span>
             <span class="pl-2">hair routine.</span>
           </blockquote>
           <div class="mx-auto w-fit mt-8">
             <button class="h-12 w-32 text-lg rounded-full font-light font-sans bg-neutral-900/40 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#f0b775] " onClick={handleStart}>Start</button>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Hompage;
