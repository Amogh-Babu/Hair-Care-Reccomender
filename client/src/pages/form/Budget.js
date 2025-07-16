import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../../styles/form.css'

const Lifestyle = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const timeSliderRef = useRef(null);
  const budgetSliderRef = useRef(null);


  useEffect(() => {
    if (timeSliderRef.current && !timeSliderRef.current.noUiSlider) {
      noUiSlider.create(timeSliderRef.current, {
        start: formData.timeRange || [20, 80],
        connect: true,
        range: { min: 0, max: 60 },
      });

      timeSliderRef.current.noUiSlider.on('update', (values) => {
        const newRange = values.map((v) => Math.round(v))
        if (JSON.stringify(newRange) !== JSON.stringify(formData.timeRange)) {
            setFormData((prev) => ({
            ...prev,
            timeRange: newRange,
            }));
        }
      });
    }

    if (budgetSliderRef.current && !budgetSliderRef.current.noUiSlider) {
      noUiSlider.create(budgetSliderRef.current, {
        start: formData.budgRange || [10, 50],
        connect: true,
        range: { min: 0, max: 50 },
      });

      budgetSliderRef.current.noUiSlider.on('update', (values) => {
        const newRange = values.map((v) => Math.round(v))
        if (JSON.stringify(newRange) !== JSON.stringify(formData.budgRange)) {
            setFormData((prev) => ({
            ...prev,
            budgRange: newRange,
            }));
        }
      });
    }

    return () => {
      if (timeSliderRef.current?.noUiSlider) timeSliderRef.current.noUiSlider.destroy();
      if (budgetSliderRef.current?.noUiSlider) budgetSliderRef.current.noUiSlider.destroy();
    };
  }, [setFormData, formData.timeRange, formData.budgRange]);

  const handleNext = () => {
    navigate('/form/summary');
  };

  const handleBack = () => {
    navigate('/form/lifestyle');
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Time & Budget</h2>
      <div className="form-questions">
        <div>
          <label className="question-labels">
            How much time are you willing to spend on your hair weekly?
            
          </label>
          <div id="slider" ref={timeSliderRef} style={{ marginTop: 40 }}></div>
         {formData.timeRange && (
          <p>
            Selected range: {formData.timeRange[0]} - {formData.timeRange[1]} minutes
          </p>
        )}
        </div>
        <div>
          <label className="question-labels">
            How much money are you willing to spend on your hair monthly?
            
          </label>
          <div id="slider" ref={budgetSliderRef} style={{ marginTop: 40 }}></div>
         {formData.budgRange && (
          <p>
            Selected range: {formData.budgRange[0]} - {formData.budgRange[1]} dollars
          </p>
        )}
        </div>
        


      </div>
      <button onClick={handleNext} type="button">
        Next
      </button>
      <button onClick={handleBack} type="button">
        Back
      </button>
    </div>
  );
};

export default Lifestyle;
