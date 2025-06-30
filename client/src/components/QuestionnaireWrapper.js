import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StepOne from '../pages/StepOne';
import StepTwo from '../pages/StepTwo';
import Summary from '../pages/Summary';

const QuestionnaireWrapper = ({ formData, handleChange, handleSubmit, fetchResponses, loading, responses, fetchError, message }) => {


    return (
        <Routes>
            <Route path="/" element={<StepOne formData={formData} handleChange={handleChange} />} />
            <Route path="/step2" element={<StepTwo formData={formData} handleChange={handleChange} />} />
            <Route path="/summary" element={<Summary formData={formData} handleSubmit={handleSubmit} fetchResponses={fetchResponses} loading={loading} 
                                                     responses={responses} fetchError={fetchError} message={message}/>} />
        </Routes>
    );

}

export default QuestionnaireWrapper;