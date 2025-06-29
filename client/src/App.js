import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import Summary from './pages/Summary';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feedback: ''
  });

  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
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

    fetchResponses();

  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => (
      {...prev, [name]: value}
    ));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage('Submitting....');

    try {
      const res = await fetch('http://localhost:4000/api/responses',
        { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (!res.ok) {
        throw new Error(`Server Error: ${res.statusText}`);
      }

      const data = await res.json();
      setMessage('Submission Success!');
      setFormData({ name: '', age: '', feedback: ''});
    } catch (error) {
      setMessage(`Submission Failed: ${error.message}`);
    }
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StepOne/>} />
        <Route path='/step2' element={<StepTwo/>} />
        <Route path='/summary' element={<Summary/>} />
      </Routes>
    </div>
  );
}

export default App;