import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feedback: ''
  });

  const [message, setMessage] = useState('');

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
        { method: 'POST',
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
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Questionnaire</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Age:<br />
          <input
            name="age"
            type="number"
            min="0"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Feedback:<br />
          <textarea
            name="feedback"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </label>

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Submit
        </button>
      </form>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

export default App;