# import necessary libraries
import os
import sys
import csv
from flask import (
    Flask,
    render_template,
    request,
    jsonify)
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.sql import text
import pandas as pd
import joblib

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#model = joblib.load(some_ml_filename)

#################################################
# Database Setup
#################################################

## if running locally, run the following line in the terminal before running the app.py
## where username and password are your postgres username and password
#################################################
#export DATABASE_URL=postgresql://username:password@localhost/property

#################################################

#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

# create and connect to engine
#engine=db.engine

#################################################

# create route that renders landing page
@app.route("/")
def home():
    return render_template("index.html")
    
@app.route('/predict',methods=['POST'])
def predict():
    someval = request.form['somevalue']
    someotherval = request.form['someotherval']
    prediction=""
    ##insert prediction here blablabla as python script##
    #eg# prediction = model.predict(final_features)
    return render_template('index.html', prediction_text=prediction)

# run app
if __name__ == "__main__":
    app.run(debug = True)