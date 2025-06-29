import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepOne = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/step2');
    }

    return (
        <div>
            <h2>Step 1</h2>
            <button onClick={handleNext}>Next</button>
        </div>        
    );
}

export default StepOne;