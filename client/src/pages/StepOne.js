import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepOne = ({formData, handleChange}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/step2');
    }

    return (
        <div>
            <h2>Step 1</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <button onClick={handleNext}>Next</button>
        </div>        
    );
}

export default StepOne;