import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = ({formData, handleSubmit, fetchResponses, loading, responses, fetchError, message}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/step2');
    }

    useEffect(() => {
        fetchResponses();

    }, []);

    return (
        <div>
            <h2>Summary</h2>

            <label>
                Your Name:
                {formData.name}
            </label>

            <label>
                Your Age:
                {formData.age}
            </label>

            <label>
                Feedback:
                {formData.feedback}
            </label>

            <h2>Past Responses</h2>

            {loading && <p>Loading...</p>}
            {fetchError && <p style={{ color:'red' }}>Error: {fetchError}</p>}
            {!loading && !fetchError && responses.length === 0 && <p>No responses yet.</p>}

            <ul>
                {responses.map((resp) => (
                    <li key={resp._id}>
                        <strong>{resp.name}</strong> ({resp.age} years old): {resp.feedback}
                    </li>
                ))}
            </ul>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button>

            {message && <p>message</p>}

        </div>        
    );
}

export default Summary;