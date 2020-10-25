# import necessary libraries
import os
import sys
import csv
from flask import (
    Flask,
    render_template,
    request,
    jsonify)
#from flask_sqlalchemy import SQLAlchemy
#from sqlalchemy import create_engine
#from sqlalchemy.sql import text
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

# route for all beer data
@app.route("/data")
def data():
    beerdata=[]
    with open('./data/final_beerdata.csv') as csv_file:
        data=csv.reader(csv_file,delimiter=',')
        data_header=next(data)
        for row in data:
            descriptor=[]
            for col in range(14,190):
                if int(row[col])>1:
                    descriptor.append({data_header[col]:row[col]})
            beerdata.append({
                "brewery_id":row[0],
                "brewery_name":row[1],
                "beer_id":row[2],
                "beer_name":row[3],
                "beer_style":row[4],
                "beer_abv":row[5],
                "beer_strength":row[6],
                "n_reviews":row[7],
                "review_overall":row[8],
                "review_aroma":row[9],
                "review_appearance":row[10],
                "review_palate":row[11],
                "review_taste":row[12],
                "availability":row[13],
                "lat":row[-4],
                "lng":row[-3],
                "address":row[-2],
                "country":row[-1],
                "description":descriptor
                })

    return jsonify(beerdata)   

# route for beer based on beer id
@app.route("/data/<beerid>")
def beer(beerid):
    beerdata=[]
    with open('./data/final_beerdata.csv') as csv_file:
        data=csv.reader(csv_file,delimiter=',')
        data_header=next(data)
        for row in data:
            if row[2]==beerid:
                descriptor=[]
                for col in range(14,190):
                    if int(row[col])>1:
                        descriptor.append({data_header[col]:row[col]})
                beerdata.append({
                    "brewery_id":row[0],
                    "brewery_name":row[1],
                    "beer_id":row[2],
                    "beer_name":row[3],
                    "beer_style":row[4],
                    "beer_abv":row[5],
                    "beer_strength":row[6],
                    "n_reviews":row[7],
                    "review_overall":row[8],
                    "review_aroma":row[9],
                    "review_appearance":row[10],
                    "review_palate":row[11],
                    "review_taste":row[12],
                    "availability":row[13],
                    "lat":row[-4],
                    "lng":row[-3],
                    "address":row[-2],
                    "country":row[-1],
                    "description":descriptor
                    })

    return jsonify(beerdata)   

# to do - prediction with ML
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