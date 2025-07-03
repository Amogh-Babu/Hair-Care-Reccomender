import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HairType from '../pages/HairType';
import Lifestyle from '../pages/Lifestyle';
import Summary from '../pages/Summary';

const QuestionnaireWrapper = ({ formData, handleChange, handleSubmit, fetchResponses, setFormData, loading, responses, fetchError, message }) => {


    return (
        <Routes>
            <Route path="/" element={<HairType formData={formData} handleChange={handleChange} />} />
            <Route path="/step2" element={<Lifestyle formData={formData} setFormData={setFormData} />} />
            <Route path="/summary" element={<Summary formData={formData} handleSubmit={handleSubmit} fetchResponses={fetchResponses} loading={loading} 
                                                     responses={responses} fetchError={fetchError} message={message}/>} />
        </Routes>
    );

}

export default QuestionnaireWrapper;