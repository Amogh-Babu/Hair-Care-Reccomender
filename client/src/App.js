import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import QuestionnaireWrapper from './components/QuestionnaireWrapper';
import ReccomendationWrapper from './components/ReccomendationWrapper';


function App() {
  const [formData, setFormData] = useState({
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

  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [rec, setRec] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/api/responses')

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await res.json();
      setResponses(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchReccomendation = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/api/recommendation',         
        { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await res.json();
      setRec(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoading(false);
      
    }
  };

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
      const res = await fetch('http://localhost:4000/api/submit',
        { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (!res.ok) {
        throw new Error(`Server Error: ${res.statusText}`);
      }

      const rec = await res.json();
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
      <Route path="*" element={<QuestionnaireWrapper 
      formData={formData} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFormData={setFormData}
      loading={loading}
      message={message}
      />}/>
      <Route path="/reccomendation/*" element={<ReccomendationWrapper
      fetchReccomendation={fetchReccomendation}
      setLoading={setLoading}
      loading={loading}
      rec={rec}/>}/>
      

    </Routes>
    
  );
}

export default App;