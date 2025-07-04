import { Routes, Route } from 'react-router-dom';
import HairType from '../pages/HairType';
import Lifestyle from '../pages/Lifestyle';
import Budget from '../pages/Budget';
import Summary from '../pages/Summary';

const QuestionnaireWrapper = ({ formData, handleChange, handleSubmit, fetchResponses, setFormData, loading, responses, fetchError, message }) => {


    return (
        <Routes>
            <Route path="/" element={<HairType formData={formData} setFormData={setFormData} handleChange={handleChange} />} />
            <Route path="/lifestyle" element={<Lifestyle formData={formData} setFormData={setFormData} />} />
            <Route path="/budget" element={<Budget formData={formData} setFormData={setFormData}/>} />
            <Route path="/summary" element={<Summary formData={formData} handleSubmit={handleSubmit} fetchResponses={fetchResponses} loading={loading} 
                                                     responses={responses} fetchError={fetchError} message={message}/>} />
        </Routes>
    );

}

export default QuestionnaireWrapper;