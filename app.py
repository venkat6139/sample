from flask import Flask, request, jsonify
import numpy as np
import pickle
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS

# Load ML Model
model_path = os.path.join(os.path.dirname(__file__), "model/heart_model.pkl")
with open(model_path, "rb") as file:
    model = pickle.load(file)



@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['features']
    data_array = np.array(data).reshape(1, -1)
    prediction = model.predict(data_array)[0]
    result = "No Heart Disease" if prediction == 0 else "Risk of Heart Disease"
    return jsonify({"prediction": result})


if __name__ == '__main__':
    app.run(debug=True)
