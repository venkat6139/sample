import numpy as np
import pandas as pd
import pickle  # Save and load model
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load Dataset
df = pd.read_csv("../dataset/heart_disease_data.csv")


# Splitting Features and Target
X = df.drop(columns='target', axis=1)
Y = df['target']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=42)

# Train Logistic Regression Model
model = LogisticRegression()
model.fit(X_train, Y_train)

# Evaluate the Model
training_accuracy = accuracy_score(model.predict(X_train), Y_train)
testing_accuracy = accuracy_score(model.predict(X_test), Y_test)
print(f"Training Accuracy: {training_accuracy}")
print(f"Testing Accuracy: {testing_accuracy}")

# Save Model
with open("heart_model.pkl", "wb") as file:
    pickle.dump(model, file)
