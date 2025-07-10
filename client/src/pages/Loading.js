import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = ({ loading }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            navigate('/recommendation/result');
        }
    }, [loading]);

    return (
        <p>Loading...</p>      
    );
}

export default Loading;