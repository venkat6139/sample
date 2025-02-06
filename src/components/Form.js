import React, { useState } from "react";
import "./Form.css"; // Import form styles

const Form = ({ onPredict }) => {
    // State to store form data for all medical attributes
    const [formData, setFormData] = useState({
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onPredict(formData);
    };

    return (
        <form className="prediction-form" onSubmit={handleSubmit}>
            <h2>Enter Patient Details</h2>

            <div className="input-group">
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Sex (0 = Female, 1 = Male):</label>
                <select name="sex" value={formData.sex} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                </select>
            </div>

            <div className="input-group">
                <label>Chest Pain Type (1-4):</label>
                <select name="cp" value={formData.cp} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Typical Angina</option>
                    <option value="2">Atypical Angina</option>
                    <option value="3">Non-anginal Pain</option>
                    <option value="4">Asymptomatic</option>
                </select>
            </div>

            <div className="input-group">
                <label>Resting Blood Pressure (mm Hg):</label>
                <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Cholesterol (mg/dL):</label>
                <input type="number" name="chol" value={formData.chol} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Fasting Blood Sugar ( 120 mg/dL):</label>
                <select name="fbs" value={formData.fbs} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                </select>
            </div>

            <div className="input-group">
                <label>Resting ECG (0-2):</label>
                <select name="restecg" value={formData.restecg} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">Normal</option>
                    <option value="1">ST-T Wave Abnormality</option>
                    <option value="2">Left Ventricular Hypertrophy</option>
                </select>
            </div>

            <div className="input-group">
                <label>Max Heart Rate Achieved:</label>
                <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Exercise Induced Angina:</label>
                <select name="exang" value={formData.exang} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="input-group">
                <label>ST Depression (oldpeak):</label>
                <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Slope of Peak Exercise ST Segment (1-3):</label>
                <select name="slope" value={formData.slope} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Upsloping</option>
                    <option value="2">Flat</option>
                    <option value="3">Downsloping</option>
                </select>
            </div>

            <div className="input-group">
                <label>Number of Major Vessels (0-3):</label>
                <input type="number" name="ca" value={formData.ca} onChange={handleChange} required />
            </div>

            <div className="input-group">
                <label>Thalassemia (3, 6, 7):</label>
                <select name="thal" value={formData.thal} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="3">Normal</option>
                    <option value="6">Fixed Defect</option>
                    <option value="7">Reversible Defect</option>
                </select>
            </div>

            <button type="submit" className="predict-btn">Predict</button>
        </form>
    );
};

export default Form;
