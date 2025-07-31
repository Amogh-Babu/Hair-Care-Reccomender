import '../../index.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const HairType = ({formData, handleChange, setFormData}) => {
    const navigate = useNavigate();
    const [inputs, setInput] = useState({
        "hairtype_num": 1,
        "hairtype": "1A",
        "path": "M100 0 L100 450" 
    })
    const goalOpts = ["Growth", "Volume/Thickness", "Damage Repair", "Frizz Control", "Curl Definition", "Softness", "filler", "Texture"]

    const handleNext = () => {
        navigate('/form/lifestyle');
    }

    const handleCancel = () => {
        navigate('/');
    }

    const toggleGoal = (goal) => {
        const goals = new Set(formData.goals)
        if (goals.has(goal)) {
            goals.delete(goal)
        } else {
            goals.add(goal)
        }
        setFormData({ ...formData, goals: Array.from(goals)})
    }

    const handleHairTypeChange = (e) => {
        const { name, value } = e.target;
        let hairtype = ""
        let path = ""
        
        switch (value) {
            case "1":
                hairtype = "1A"
                path = "M100 0 L100 450"
                break
            case "2":
                hairtype = "1B"
                path = "M100 0 C 70 100, 130 125, 100 450"
                break
            case "3":
                hairtype = "1C"
                path = "M100 0 C 55 150, 145 300, 100 450"
                break
            case "4":
                hairtype = "2A"
                path = "M100 0 C 60 70, 140 140, 100 210 C 65 280, 135 350, 100 450"
                break
            case "5":
                hairtype = "2B"
                path = "M100 0 C 40 35, 160 100, 100 150 C 45 185, 155 250, 100 300 C 40 335, 160 400, 100 450"
                break
            case "6":
                hairtype = "2C"
                path = "M100 0 C 40 35, 160 70, 100 105 C 45 140, 155 175, 100 210 C 40 245, 160 280, 100 315 C 40 350, 160 385, 100 450 "
                break 
            case "7":
                hairtype = "3A"
                path = "M100 0 C 100 0, 160 50, 100 130 S 40 100, 100 75 S 160 200, 100 250 S 40 225, 100 200 S 160 325, 100 375 S 40 350, 100 325 S 150 400, 100 450"
                break
            case "8":
                hairtype = "3B"
                path = "M100 0 C 100 0, 150 50, 100 80 S 50 50, 100 40 S 150 130, 100 160 S 50 130, 100 120 S 150 210, 100 240 S 50 210, 100 200 S 150 290, 100 320 S 50 290, 100 280 S 150 370, 100 400 S 50 370, 100 360 S 150 420, 100 450"
                break
            case "9":
                hairtype = "3C"
                path = "M100 0 C 100 0, 150 35, 100 60 S 50 40, 100 30 S 150 80, 100 110 S 50 100, 100 90 S 150 140, 100 170 S 50 160, 100 150 S 150 200, 100 230S 50 220, 100 210 S 150 260, 100 290 S 50 280, 100 270 S 150 320, 100 350 S 50 340, 100 330 S 150 380, 100 410 S 50 400, 100 390 S 150 440, 100 470"
                break
            case "10":
                hairtype = "4A"
                path = "M100 0 C 100 0, 130 28, 100 40 S 70 33, 100 20 S 130 60, 100 80 S 70 66, 100 53 S 130 93, 100 115 S 70 99, 100 86 S 130 126, 100 148 S 70 132, 100 119 S 130 159, 100 181 S 70 165, 100 152 S 130 192, 100 214 S 70 198, 100 185 S 130 225, 100 247 S 70 231, 100 218 S 130 258, 100 280 S 70 264, 100 251 S 130 291, 100 313 S 70 297, 100 284 S 130 324, 100 346 S 70 330, 100 317 S 130 357, 100 379 S 70 363, 100 350 S 130 390, 100 412 S 70 396, 100 383 S 130 423, 100 445 "
                break
            case "11":
                hairtype = "4B"
                path = "M100 0 C 100 0, 125 15, 100 30 S 75 25, 100 20 S 125 40, 100 60 S 75 50, 100 45 S 125 65, 100 85 S 75 75, 100 70 S 125 90, 100 110 S 75 100, 100 95 S 125 115, 100 135 S 75 125, 100 120 S 125 140, 100 160 S 75 150, 100 145 S 125 165, 100 185 S 75 175, 100 170 S 125 190, 100 210 S 75 200, 100 195 S 125 215, 100 235 S 75 225, 100 220 S 125 240, 100 260 S 75 250, 100 245 S 125 265, 100 285 S 75 275, 100 270 S 125 290, 100 310 S 75 300, 100 295 S 125 315, 100 335 S 75 325, 100 320 S 125 340, 100 360 S 75 350, 100 345 S 125 365, 100 385 S 75 375, 100 370 S 125 390, 100 410 S 75 400, 100 395 S 125 415, 100 435 S 75 425, 100 420 S 125 440, 100 460 "
                break
            case "12":
                hairtype = "4C"
                path = "M100 0 C 100 0, 120 12, 100 20 S 80 15, 100 10 S 120 30, 100 45 S 80 35, 100 30 S 120 45, 100 70 S 80 57, 100 52 S 120 67, 100 92 S 80 79, 100 74 S 120 89, 100 114 S 80 101, 100 96 S 120 111, 100 136 S 80 123, 100 118 S 120 133, 100 158 S 80 145, 100 140 S 120 155, 100 180 S 80 167, 100 162 S 120 177, 100 202 S 80 189, 100 184 S 120 199, 100 224 S 80 211, 100 206 S 120 221, 100 246 S 80 233, 100 228 S 120 243, 100 268 S 80 255, 100 250 S 120 265, 100 290 S 80 277, 100 272 S 120 287, 100 312 S 80 299, 100 294 S 120 309, 100 334 S 80 321, 100 316 S 120 331, 100 356 S 80 343, 100 338 S 120 353, 100 378 S 80 365, 100 360 S 120 375, 100 400 S 80 387, 100 382 S 120 397, 100 422 S 80 409, 100 404 S 120 419, 100 450"
                break 
        }
        

        setInput(prev => ({...prev, ["hairtype_num"]: value, ["hairtype"]: hairtype, ["path"]: path}));
        setFormData(prev => ({...prev, ["hairtype"]: hairtype}));

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

            <div class="fixed left-1/2 transform -translate-x-1/2 bg-neutral-900/20 h-screen w-[750px] ">

                <p class="text-center mb-4 mt-8 text-4xl text-white font-semibold font-sans">Hair Type & Goals</p>
                <div class="grid grid-cols-5 gap-4 h-[600px] p-4">
                    <div class="relative col-span-2 bg-slate-300/40 rounded-md">
                        <div class="flex justify-center items-center h-full w-full">
                            <svg width="200" height="450" viewBox="0 0 200 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d={inputs.path}
                                stroke="white"
                                stroke-width={formData.thickness}
                                fill="none"
                                />
                            </svg>
                        </div>
                        <div class="absolute top-0 left-0 text-white p-2 text-4xl font-semibold">
                            {inputs.hairtype}
                        </div>                        
                    </div>
                    <div class="col-span-3 bg-slate-600/40 rounded-md p-0 accent-sky-600 text-left text-2xl text-white relative">
                        <div class="m-4">
                            <label for="hairtype">Hair Type</label>
                            <input type="range" id="hairtype" name="hairtype_num" min="1" max="12" value={inputs.hairtype_num} onChange={handleHairTypeChange}/>

                            <label for="thickness">Hair Thickness</label>
                            <input type="range" id="thickness" name="thickness" min="1" max="10" value={formData.thickness} onChange={handleChange}/>
                            
                            <p class="pb-2">Hair Goals</p>
                            <div  class="grid grid-cols-3 gap-4">
                                {goalOpts.map((opts) => {return(opts == "filler" ? <div></div> :
                                    <button class={`h-16 text-md flex items-center justify-center ${formData.goals.includes(opts) ? "bg-sky-600" : "bg-gray-600/50"} 
                                    transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600/50 `}
                                    key={opts} onClick={() => toggleGoal(opts)}>
                                    {opts == "Volume/Thickness" ? "Volume/ Thickness" : opts}</button>
                                    )})}
                            </div>
                        </div>

                        <div class="absolute bottom-4 w-full flex justify-center">
                            <span class="pr-3">
                                <button class="h-12 w-24 text-lg rounded-full font-light font-sans bg-neutral-900/40 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#f0b775] " onClick={handleCancel}>Cancel</button>
                            </span>
                            <span>
                                <button class="h-12 w-24 text-lg rounded-full font-light font-sans bg-neutral-900/40 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#f0b775] " onClick={handleNext}>Next</button>
                            </span>
                        </div>

                        {/* <div class="pt-2">
                            <label class="pr-2" for="dandruff">Dandruff or Scalp Irratitation?</label>
                            <input type="checkbox" id="dandruff" name="dandruff" checked={formData.dandruff} onChange={(e) => setFormData({ ...formData, dandruff:e.target.checked})}></input>
                        </div>
                        <div>
                            <label class="pr-2" for="headcovering">Head Coverings or Hats?</label>
                            <input type="checkbox" id="headcovering" name="headcovering" checked={formData.headcovering} onChange={(e) => setFormData({ ...formData, headcovering:e.target.checked})}></input>
                        </div>
                        <div>
                            <label class="pr-2" for="workout">Frequent Workouts?</label>
                            <input type="checkbox" id="workout" name="workout" checked={formData.workout} onChange={(e) => setFormData({ ...formData, workout:e.target.checked})}></input>
                        </div>
                        <div>
                            <label class="pr-2" for="heat">Frequent Heat Tool Usage?</label>
                            <input type="checkbox" id="heat" name="heat" checked={formData.heat} onChange={(e) => setFormData({ ...formData, heat:e.target.checked})}></input>
                        </div> */}
                        
                    </div>
                </div>
                    <div className="flex justify-center space-x-4">
                        {Array.from({ length: 3 }, (_, i) => (
                            <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                                i + 1 === 1
                                ? "bg-sky-600 border-sky-600 text-white"
                                : "border-gray-300 text-gray-500"
                            }`}
                            >
                            {i + 1}
                            </div>
                        ))}
                    </div>
            </div>
        </div>     
    );
}

export default HairType;


        