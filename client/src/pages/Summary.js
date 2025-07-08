import { useNavigate } from 'react-router-dom';
import '../styles/summary.css';

const Summary = ({ formData, handleSubmit, loading, message }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/budget');
  };

  const handleNext = (e) => {
    handleSubmit(e);
    navigate('/reccomendation');
  }

  return (
    <div className="summary-container">
      <h2 className="section-title">Summary</h2>

      <section className="summary-section">
        <h3>Your Goals:</h3>
        <ul className="summary-list">
          {formData.goals.map((goal) => {
            return(<li key={goal}>{goal}</li>)
          })}
        </ul>
      </section>

      <section className="summary-section">
        <h3>Hair Information:</h3>
        <p>Your Hair Type: <strong>{`${formData.hairTypeNum}${formData.hairTypeNum !== 1 ? formData.hairTypeAlpha : ""}`}</strong></p>
        <p>Your Hair Density: <strong>{formData.density}</strong></p>
        <p>Your Hair Oiliness: <strong>{formData.oiliness}</strong></p>
        <p>You {formData.dandruff ? "do" : "do not"} experience dandruff or scalp itchiness</p>
      </section>

      <section className="summary-section">
        <h3>Lifestyle Information:</h3>
        <p>You {formData.headcovering ? "do" : "do not"} wear headcoverings</p>
        <p>You {formData.workout ? "do" : "do not"} workout/get sweaty often</p>
        <p>You {formData.heat ? "do" : "do not"} use heat tools on your hair</p>
      </section>

      <section className="summary-section">
        <h3>Time and Budget:</h3>
        <p>You’re willing to spend <strong>{formData.timeRange[0]}–{formData.timeRange[1]}</strong> minutes weekly</p>
        <p>You’re willing to spend <strong>${formData.budgRange[0]}–${formData.budgRange[1]}</strong> monthly</p>
      </section>

      <div className="button-row">
        <button onClick={handleNext}>Submit</button>
        <button onClick={handleBack}>Back</button>
      </div>

      <div>
        {loading && <p>{message}</p>}
      </div>

    </div>
  );
};

export default Summary;
