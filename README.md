# 🏠 House Price Prediction 

A machine learning-powered web application that predicts house prices based on various input features. The project covers the full data science pipeline — from data preprocessing and model selection to frontend/backend development — using Python, Flask, and HTML/CSS/JavaScript.

---

## 📌 Features

- 🔍 **Data Preprocessing**: Outlier detection, feature engineering, selection, and dimensionality reduction  
- 📈 **Model Training**: Compared Lasso, Decision Tree, and Linear Regression using `GridSearchCV` with `ShuffleSplit`  
- 🧠 **Final Model**: Selected Linear Regression with highest cross-validation R² score of **81.4%**  
- 🌐 **Web Interface**: Built with HTML, CSS, and JavaScript (frontend), and Flask (backend)  
- 🧪 **Runs Locally**: Model served via Flask in a local environment for testing and demonstration

---

## 🛠️ Tech Stack

- **Languages**: Python, HTML, CSS, JavaScript  
- **Libraries**: Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn  
- **Tools**: Jupyter Notebook, VS Code, Flask  
- **ML Techniques**: Regression models, Grid Search, Cross-Validation, EDA, Feature Engineering

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/house-price-predictor.git
   cd house-price-predictor
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask app**
   ```bash
   python app.py
   ```

4. **Open in browser**  
   Navigate to `http://localhost:5000` in your web browser.

---

## 📊 Model Selection Summary

| Model              | R² Score (CV) | Best Parameters                             |
|-------------------|---------------|---------------------------------------------|
| **Linear Regression** | **0.814**      | –                                           |
| Lasso              | 0.79         | `alpha=0.01`, `selection='cyclic'`           |
| Decision Tree      | 0.75        | `criterion='friedman_mse'`, `splitter='best'` |

---



## 🧠 Learnings

- Hands-on practice with end-to-end regression workflow  
- Applied model evaluation techniques like GridSearchCV and cross-validation  
- Gained experience in integrating ML models with a basic web interface using Flask

---

## 📬 Contact

**Ishita Garg**  
📧 your-email@example.com  
📍 PEC Chandigarh | CSE (Data Science)
