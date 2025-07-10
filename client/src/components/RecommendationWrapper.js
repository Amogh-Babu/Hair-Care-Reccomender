import { Routes, Route } from 'react-router-dom';
import Recommendation from '../pages/Recommendation';
import Loading from '../pages/Loading';



const RecommendationWrapper = ({ loading, rec }) => {

    return (
        <Routes>
            <Route path="loading" element={<Loading loading={loading} />} />
            <Route path="result" element={<Recommendation rec={rec}/>} />
        </Routes>
    );
}

export default RecommendationWrapper;