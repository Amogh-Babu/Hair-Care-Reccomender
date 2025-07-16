import { Routes, Route } from 'react-router-dom';
import HairType from '../pages/form/HairType';
import Lifestyle from '../pages/form/Lifestyle';
import Budget from '../pages/form/Budget';
import Summary from '../pages/form/Summary';

const QuestionnaireWrapper = ({ formData, handleChange, handleSubmit, setFormData, loading, message }) => {


    return (
        <Routes>
            <Route path="/hairtype" element={<HairType formData={formData} setFormData={setFormData} handleChange={handleChange} />} />
            <Route path="/lifestyle" element={<Lifestyle formData={formData} setFormData={setFormData} />} />
            <Route path="/budget" element={<Budget formData={formData} setFormData={setFormData} />} />
            <Route path="/summary" element={<Summary formData={formData} handleSubmit={handleSubmit} loading={loading} message={message} />} />
        </Routes>
    );

}

export default QuestionnaireWrapper;