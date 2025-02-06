import React from "react";
import "./Prediction.css"; // Import result styles

const Prediction = ({ result }) => {
    return (
        <div className="prediction-result">
            <h2>Prediction Result:</h2>
            <p className={result.includes("No") ? "safe" : "risk"}>{result}</p>
        </div>
    );
};

export default Prediction;
