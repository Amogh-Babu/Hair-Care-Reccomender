import { Routes, Route } from 'react-router-dom';
import Reccomendation from '../pages/Reccomendation';


const ReccomendationWrapper = ({ fetchReccomendation, loading, rec }) => {


    return (
        <Routes>
            // Loading screen here
            <Route path="/" element={<Reccomendation fetchReccomendation={fetchReccomendation} loading={loading} rec={rec}/>} />
        </Routes>
    );

}

export default ReccomendationWrapper;