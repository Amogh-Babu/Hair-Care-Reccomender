import { Routes, Route } from 'react-router-dom';
import Reccomendation from '../pages/Reccomendation';


const ReccomendationWrapper = ({ setLoading, loading }) => {


    return (
        <Routes>
            <Route path="/" element={<Reccomendation setLoading={setLoading} loading={loading}/>} />
        </Routes>
    );

}

export default ReccomendationWrapper;