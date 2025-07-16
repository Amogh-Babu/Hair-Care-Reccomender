import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'


const Hompage = ({}) => {
  const navigate = useNavigate();

    const handleStart = () => {
        navigate('/form/hairtype');
    }


  return (
    <div>
        <video autoPlay muted loop className="fixed top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src="http://localhost:8000/static/assets/background_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        <div className="flex items-center justify-center h-screen w-screen">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white text-center max-w-sm w-full">
            <h1 className="text-3xl font-semibold mb-4">Welcome</h1>
            <p className="mb-6">Find your perfect product match</p>
            <button onClick={handleStart} className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-opacity-80 transition duration-300">
                Enter
            </button>
            </div>
        </div>
    </div>
  );
};

export default Hompage;
