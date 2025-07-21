import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import QuestionnaireWrapper from './components/QuestionnaireWrapper';
import RecommendationWrapper from './components/RecommendationWrapper';
import Hompage from './pages/Hompage';


function App() {
  const [formData, setFormData] = useState({
    hairtype: '',
    thickness: 1,
    oiliness: 1,
    dandruff: false,
    goals: [],
    headcovering: false,
    workout: false,
    heat: false,
    timeRange: [0, 60],
    budgRange: [0, 50]
  });

  const [message, setMessage] = useState('');
  const [rec, setRec] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(`Setting form data of ${name} to ${value}`);
    setFormData(prev => (
      {...prev, [name]: value}
    ));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('Submitting....');

    try {
      const res = await fetch('http://localhost:8000/submit',
        { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            hair_type: "" + formData.hairTypeNum + formData.hairTypeAlpha,
            density: Number(formData.density),
            oiliness: Number(formData.oiliness),
            dandruff: formData.dandruff,
            goals: formData.goals,
            headcovering: formData.headcovering,
            workout: formData.workout,
            heat: formData.heat,
            time_range: formData.timeRange,
            budget_range: formData.budgRange
          })
        }
      );

      if (!res.ok) {
        throw new Error(`Server Error: ${res.statusText}`);
      }

      const newRecommendation = await res.json();
      setRec(newRecommendation);

      setMessage('Submission Success!');
      setFormData({
        hairTypeNum: '',
        hairTypeAlpha: '',
        density: 1,
        oiliness: 1,
        dandruff: false,
        goals: [],
        headcovering: false,
        workout: false,
        heat: false,
        timeRange: [0, 60],
        budgRange: [0, 50]
      });
    } catch (error) {
      setMessage(`Submission Failed: ${error.message}`)
    } finally {
      setLoading(false);
      setMessage('');
    }
  }

  return (
    <Routes>
      <Route path='/' element={<Hompage/>}></Route>
      <Route path="/form/*" element={<QuestionnaireWrapper 
      formData={formData} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFormData={setFormData}
      loading={loading}
      message={message}
      />}/>
      <Route path="/recommendation/*" element={<RecommendationWrapper
      setLoading={setLoading}
      loading={loading}
      rec={rec}/>}/>
    </Routes>
  );
}

export default App;