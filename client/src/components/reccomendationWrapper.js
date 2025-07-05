import { Routes, Route } from 'react-router-dom';
import Reccomendation from '../pages/Reccomendation';


const ReccomendationWrapper = ({ fetchReccomendation, loading, recco }) => {


    return (
        <Routes>
            <Route path="/" element={<Reccomendation fetchReccomendation={fetchReccomendation} loading={loading} recco={recco}/>} />
        </Routes>
    );

}

export default ReccomendationWrapper;