import { Routes, Route } from 'react-router-dom';
import HairType from '../pages/HairType';
import Lifestyle from '../pages/Lifestyle';
import Budget from '../pages/Budget';
import Summary from '../pages/Summary';

const QuestionnaireWrapper = ({ formData, handleChange, handleSubmit, setFormData }) => {


    return (
        <Routes>
            <Route path="/" element={<HairType formData={formData} setFormData={setFormData} handleChange={handleChange} />} />
            <Route path="/lifestyle" element={<Lifestyle formData={formData} setFormData={setFormData} />} />
            <Route path="/budget" element={<Budget formData={formData} setFormData={setFormData} />} />
            <Route path="/summary" element={<Summary formData={formData} handleSubmit={handleSubmit} />} />
        </Routes>
    );

}

export default QuestionnaireWrapper;