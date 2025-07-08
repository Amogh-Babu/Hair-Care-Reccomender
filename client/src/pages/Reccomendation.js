import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Reccomendation = ({ fetchReccomendation, loading, rec }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(rec)
    }, []);


    return (
        <div>
            {loading && <p>Loading...</p>}
            {/* <ul>
                {recco.map((rec) => {
                    return(<li key={rec}>{rec}</li>)
                })}
            </ul>  */}
        </div>
      
    );
}

export default Reccomendation;