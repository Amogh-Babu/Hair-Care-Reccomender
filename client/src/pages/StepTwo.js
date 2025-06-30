import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepTwo = ({formData, handleChange}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/summary');
    }

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div>
            <h2>Feedback</h2>
            <label>
                Feeback:
                <input type="text" name="feedback" value={formData.feedback} onChange={handleChange} />
            </label>

            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>           
    );
}

export default StepTwo;