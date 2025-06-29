import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/step2');
    }

    return (
        <div>
            <h2>Summary</h2>
            <button onClick={handleBack}>Back</button>

        </div>        
    );
}

export default StepTwo;