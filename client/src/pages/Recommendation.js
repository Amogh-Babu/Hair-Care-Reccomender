import { useEffect } from 'react';

const Recommendation = ({ rec }) => {

    useEffect(() => {
        console.log(rec);
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(rec, null, 2)}</pre>
        </div>
      
    );
}

export default Recommendation;