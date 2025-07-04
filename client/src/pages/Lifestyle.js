import { useNavigate } from 'react-router-dom';

const Lifestyle = ({formData, setFormData}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/summary');
    }

    const handleBack = () => {
        navigate('/');
    }

    const toggleGoal = (goal) => {
        const goals = new Set(formData.goals)
        if (goals.has(goal)) {
            goals.delete(goal)
        } else {
            goals.add(goal)
        }
        setFormData({ ...formData, goals: Array.from(goals)})
    }

    const goalOpts = ["Growth", "Volume/Thickness", "Damage Repair", "Frizz Control", "Curl Definition", "Softness", "Texture"]

    return (
        <div className="form-container">
            <h2 className='section-title'>Goals & Lifestyle</h2>
            <div className='form-questions'>
                <div>
                    <label className='question-labels'>
                        What are your hair goals?
                        {goalOpts.map((opts) => {
                            return(<button key={opts} className={`button-input-${formData.goals.includes(opts) ? "on" : "off"}`} onClick={() => toggleGoal(opts)}>{opts}</button>)
                        })}
                    </label>
                </div>
                <div>
                    <label>
                        Do you wear head coverings or hats often?
                        <input type="checkbox" name="headcovering" checked={formData.headcovering} onChange={(e) => setFormData({ ...formData, headcovering:e.target.checked})}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Do you workout often?
                        <input type="checkbox" name="workout" checked={formData.workout} onChange={(e) => setFormData({ ...formData, workout:e.target.checked})}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Do you use heat tools?
                        <input type="checkbox" name="heat" checked={formData.heat} onChange={(e) => setFormData({ ...formData, heat:e.target.checked})}></input>
                    </label>
                </div>
            </div>
            <button onClick={handleNext}>Next</button>
            <button onClick={handleBack}>Back</button>

        </div>               
    );
}

export default Lifestyle;