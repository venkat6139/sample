import React, { useState } from "react";
import Form from "./components/Form";
import Prediction from "./components/Prediction";
import axios from "./api"; // API call handler
import "./App.css"; // Import styles

const App = () => {
    const [prediction, setPrediction] = useState(null);
    const [precautions, setPrecautions] = useState("");
    const [showPrediction, setShowPrediction] = useState(false);

    const handlePredict = async (formData) => {
        try {
            const values = Object.values(formData).map(Number);
            const response = await axios.post("/predict", { features: values });

            const result = response.data.prediction;
            setPrediction(result);
            setPrecautions(getPrecautions(result));
            setShowPrediction(true);
        } catch (error) {
            console.error("Prediction Error:", error);
            setPrediction("Error in prediction. Try again!");
            setPrecautions("");
            setShowPrediction(true);
        }
    };

    const getPrecautions = (result) => {
        if (result.includes("Risk")) {
            return "Maintain a healthy diet, exercise regularly, and consult a doctor immediately.";
        }else {
            return "You are at low risk. Maintain a balanced lifestyle and stay active.";
        }
    };

    const handleBackToForm = () => {
        setShowPrediction(false);
        setPrediction(null);
        setPrecautions("");
    };

    return (
        <div className="app-container">
            <h1>Heart Stroke Prediction</h1>
            {showPrediction ? (
                <Prediction result={prediction} precautions={precautions} onBack={handleBackToForm} />
            ) : (
                <Form onPredict={handlePredict} />
            )}
        </div>
    );
};

export default App;
