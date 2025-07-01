import React from 'react';
import '../styles/form.css'
import { useNavigate } from 'react-router-dom';

const HairType = ({formData, handleChange}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/step2');
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

                    {(formData.hairTypeNum === '2' || formData.hairTypeNum === '3' || formData.hairTypeNum === '4') && (
                    <label  className='question-labels'>
                        Subtype:
                        <select name='hairTypeAlpha' value={formData.hairTypeAlpha} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                    </label>
                    )}
                </div>
                <div>
                    <label className='question-labels'>
                        Age:
                        <input type="number" name="age" value={formData.age} onChange={handleChange} />
                    </label>
                </div>
            </div>
            <button onClick={handleNext}>Next</button>

        </div>        
    );
}

export default HairType;