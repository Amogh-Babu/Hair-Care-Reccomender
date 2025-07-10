import '../styles/form.css'
import { useNavigate } from 'react-router-dom';

const HairType = ({formData, handleChange, setFormData}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/lifestyle');
    }


    return (
        <div className="form-container">
            <h2 className='section-title'>Hair Type & Texture</h2>
            <div className='form-questions'>
                <div>
                    <label className='question-labels'>
                        What is your natural hair texture?
                        <select name='hairTypeNum' value={formData.hairTypeNum} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>

                    {(formData.hairTypeNum !== '') && (
                    <label  className='question-labels'>
                        Subtype:
                        <select name='hairTypeAlpha' value={formData.hairTypeAlpha} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </label>
                    )}
                </div>
                <div className='side-by-side'>
                    <label className='question-labels'>
                        How dense is your hair?
                          <input type="range" name="density" min="1" max="10" value={formData.density} onChange={handleChange}/>
                          <span>{formData.density}</span>
                    </label>
                </div>
                <div className='side-by-side'> 
                    <label className='question-labels'>
                        How oily is your hair/scalp?
                          <input type="range" name="oiliness" min="1" max="10" value={formData.oiliness} onChange={handleChange}/>
                          <span>{formData.oiliness}</span>
                    </label>
                </div>
                <div>
                    <label>
                        Do you experience dandruff or scalp itchiness?
                        <input type="checkbox" name="dandruff" checked={formData.dandruff} onChange={(e) => setFormData({ ...formData, dandruff:e.target.checked})}></input>
                    </label>
                </div>
            </div>
            <button onClick={handleNext}>Next</button>

        </div>        
    );
}

export default HairType;