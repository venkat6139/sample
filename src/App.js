import React, { useState } from "react";
import Form from "./components/Form";
import Prediction from "./components/Prediction";
import axios from "./api"; // API call handler
import "./App.css"; // Import styles

const App = () => {
    const [prediction, setPrediction] = useState(null);

    const handlePredict = async (formData) => {
        try {
            const values = Object.values(formData).map(Number);
            const response = await axios.post("/predict", { features: values });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Prediction Error:", error);
            setPrediction("Error in prediction. Try again!");
        }
    };

    return (
        <div className="app-container">
            <h1>Heart Stroke Prediction</h1>
            <Form onPredict={handlePredict} />
            {prediction && <Prediction result={prediction} />}
        </div>
    );
};

export default App;
