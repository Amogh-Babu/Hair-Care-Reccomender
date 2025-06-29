import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/summary');
    }

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div>
            <h2>Step 2</h2>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>

        </div>        
    );
}

export default StepTwo;