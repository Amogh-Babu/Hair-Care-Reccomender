import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Reccomendation = ({ fetchReccomendation, loading, recco }) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetchReccomendation();
    }, []);



    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
                {recco.map((rec) => {
                    return(<li key={rec}>{rec}</li>)
                })}
            </ul> 
        </div>
      
    );
}

export default Reccomendation;