import { useNavigate } from 'react-router-dom';
import '../index.css'


const Hompage = ({}) => {
  const navigate = useNavigate();

    const handleStart = () => {
        navigate('/form/hairtype');
    }


  return (
    <div class="fixed top-0 left-0 w-screen h-screen bg-cyan-800">
      <div class="fixed top-[45%] left-[17%] transform -translate-y-1/2 w-96 h-64 bg-neutral-900/40 rounded-xl border-8 border-white shadow-3xl ">
        <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
            <blockquote class="text-center text-3xl font-semibold text-gray-900 italic dark:text-white font-mono">
            Your 
            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-bl from-blue-600 via-slate-200 to-red-600 z-0">
              <span class="relative text-white dark:text-gray-950">personal</span>
            </span>
            hair routine.
          </blockquote>
          <div class="mx-auto w-fit mt-8">
            <button class="h-12 w-32 text-lg rounded-full font-semibold bg-neutral-900/40 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 " onClick={handleStart}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hompage;
