import React from "react";
import "./Prediction.css"; // Import result styles

const Prediction = ({ result, precautions, onBack }) => {
    return (
        <div className="prediction-result">
            <h2 className="heading">Prediction Result:</h2>
            <p className={result.includes("No") ? "safe" : "risk"}>{result}</p>

            <h3 className="heading">Precautions:</h3>
            <p className="precautions-text">{precautions}</p>
            <button className="ok-btn" onClick={onBack}>OK</button>
        </div>
    );
};

export default Prediction;
