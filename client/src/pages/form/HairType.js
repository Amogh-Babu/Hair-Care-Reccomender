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

    const handleNext = () => {
        navigate('/form/lifestyle');
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
                path = "M100 0 C 150 50, 100 100"
                break
            case "8":
                hairtype = "3B"
                path = "M100 0 C 150 75, 100 150, 70 75 C 100 0, 150 100, 100 175 C 100 100, 150 200, 100 275"
                break
            case "9":
                hairtype = "3C"
                break
            case "10":
                hairtype = "4A"
                break
            case "11":
                hairtype = "4B"
                break
            case "12":
                hairtype = "4C"
                break 
        }

        setInput(prev => ({...prev, ["hairtype_num"]: value, ["hairtype"]: hairtype, ["path"]: path}));
        setFormData(prev => ({...prev, ["hairtype"]: hairtype}));

    } 


    return (
        <div class="fixed top-0 left-0 w-screen h-screen bg-cyan-950">
            <div class="fixed left-1/2 transform -translate-x-1/2 bg-gray-900/90 h-screen w-[750px] border-l-8 border-r-8 border-white">
                <p class="text-center mb-8 mt-8 font-mono text-4xl text-white font-bold">Hair Type & Texture.</p>
                <div class="grid grid-cols-5 gap-4 h-[600px] p-4">
                    <div class="col-span-2 bg-slate-300 rounded-md">
                        <div class="flex justify-center items-center h-full w-full">
                            <svg width="200" height="450" viewBox="0 0 200 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d={inputs.path}
                                stroke="black"
                                stroke-width={formData.thickness}
                                fill="none"
                                />
                            </svg>
                        </div>

                        
                    </div>
                    <div class="col-span-3 bg-slate-600 rounded-md p-4">
                        <p class="text-center mb-4 font-mono text-2xl text-white font-bold">Hair Type:</p>
                        <input type="range" name="hairtype_num" min="1" max="12" value={inputs.hairtype_num} onChange={handleHairTypeChange}/>

                        <p class="text-center mb-4 font-mono text-2xl text-white font-bold">Hair Thickness:</p>
                        <input type="range" name="thickness" min="1" max="10" value={formData.thickness} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </div>
        // <div className="form-container">
        //     <h2 className='section-title'>Hair Type & Texture</h2>
        //     <div className='form-questions'>
        //         <div>
        //             <label className='question-labels'>
        //                 What is your natural hair texture?
        //                 <select name='hairTypeNum' value={formData.hairTypeNum} onChange={handleChange}>
        //                     <option value="">Select</option>
        //                     <option value="1">1</option>
        //                     <option value="2">2</option>
        //                     <option value="3">3</option>
        //                     <option value="4">4</option>
        //                 </select>
        //             </label>

        //             {(formData.hairTypeNum !== '') && (
        //             <label  className='question-labels'>
        //                 Subtype:
        //                 <select name='hairTypeAlpha' value={formData.hairTypeAlpha} onChange={handleChange}>
        //                     <option value="">Select</option>
        //                     <option value="A">A</option>
        //                     <option value="B">B</option>
        //                     <option value="C">C</option>
        //                 </select>
        //             </label>
        //             )}
        //         </div>
        //         <div className='side-by-side'>
        //             <label className='question-labels'>
        //                 How dense is your hair?
        //                   <input type="range" name="density" min="1" max="10" value={formData.density} onChange={handleChange}/>
        //                   <span>{formData.density}</span>
        //             </label>
        //         </div>
        //         <div className='side-by-side'> 
        //             <label className='question-labels'>
        //                 How oily is your hair/scalp?
        //                   <input type="range" name="oiliness" min="1" max="10" value={formData.oiliness} onChange={handleChange}/>
        //                   <span>{formData.oiliness}</span>
        //             </label>
        //         </div>
        //         <div>
        //             <label>
        //                 Do you experience dandruff or scalp itchiness?
        //                 <input type="checkbox" name="dandruff" checked={formData.dandruff} onChange={(e) => setFormData({ ...formData, dandruff:e.target.checked})}></input>
        //             </label>
        //         </div>
        //     </div>
        //     <button onClick={handleNext}>Next</button>

        // </div>        
    );
}

export default HairType;