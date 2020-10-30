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
import numpy as np
import joblib
from sklearn.metrics.pairwise import linear_kernel

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
model=joblib.load("./data/kmean_model_final.sav")

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
                count=[]
                for col in range(14,189):
                    if int(row[col])>1:
                        descriptor.append(data_header[col])
                        count.append(int(row[col]))
                keydict=dict(zip(descriptor,count))
                descriptor.sort(key=keydict.get,reverse=True)
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
@app.route('/',methods=['POST'])
def predict():
    # user input, to change
    beer_strength=request.form['beerstrength'].split(',')
    beer_style=request.form['beerstyle'].split(',')
    country=request.form['country'].split(',')
    words=request.form['taste-preference'].split(',')
    aroma=5-(int(request.form['aromaRank'])-1)
    appearance=5-(int(request.form['appearanceRank'])-1)
    taste=5-(int(request.form['tasteRank'])-1)

    # #default
    beerdata=pd.read_csv("./data/final_beerdata_cluster.csv")
    numberof_reviews=beerdata["numberof_reviews"].median()
    overall=4
    palate=4

    # data manipulation, don't change
    # not user input
    beer_style_all=["ale","barleywine","bitter","exotic","ipa","kolsch","lager","pilsener","porter","stout","trappist"]
    beer_style_val=[0]*11
    for i in range(len(beer_style_all)):
        for j in beer_style:
            if j==beer_style_all[i]:
                beer_style_val[i]=1

    beer_strength_all=["light","mid","full","heavy","very strong"]
    beer_abv_all=[1,3.5,5,7.5,10.5]
    beer_strength_val=[0]*5
    for i in range(len(beer_strength_all)):
        if beer_strength[0]==beer_strength_all[i]:
            beer_strength_val[i]=1
            beer_abv=beer_abv_all[i]
    
    # predict cluster
    userInput=np.array([[beer_abv,numberof_reviews,overall,aroma,
                    appearance,palate,taste,beer_style_val[0],
                    beer_style_val[1],beer_style_val[2],beer_style_val[3],
                    beer_style_val[4],beer_style_val[5],beer_style_val[6],
                    beer_style_val[7],beer_style_val[8],beer_style_val[9],
                    beer_style_val[10],beer_strength_val[2],beer_strength_val[3],
                    beer_strength_val[0],beer_strength_val[1],beer_strength_val[4]]])
    cluster=model.predict(userInput)

    # create subset dataframe of specific cluster
    alldata=pd.DataFrame()
    for i in country:
        data=beerdata[beerdata["country"]==i]
        alldata=alldata.append(data)
    beerdata=alldata
    alldata=pd.DataFrame()
    for i in beer_style:
        data=beerdata[beerdata["beer_style"]==i]
        alldata=alldata.append(data)
    beerdata=alldata
    
    beer_id=[]
    
    if len(beerdata)<6:
        beer_id=beerdata["beer_id"].array
    else: 
        # add user input to dataframe in order to calculate cosine similarity
        matrix=pd.DataFrame()
        for i in range(14,189):
            matrix[beerdata.columns[i]]=beerdata[beerdata.columns[i]]/beerdata["numberof_reviews"]
        matrix["Kmeans Cluster"]=beerdata["Kmeans Cluster"]
        matLen=len(matrix)
        for i in range(14,189):    
            for j in words:
                if beerdata.columns[i]==j:
                    matrix.loc[matLen,beerdata.columns[i]]=1
                else:
                    matrix.loc[matLen,beerdata.columns[i]]=0
        # add cluster
        beerdata.loc[matLen,"Kmeans Cluster"]=cluster[0]
        matrix_bin=pd.get_dummies(matrix, columns=["Kmeans Cluster"])
        
        cosine_similarity=linear_kernel(matrix_bin,matrix_bin)
    
        # use similarity score to get most similar beers based on review words
        similarity_scores = list(enumerate(cosine_similarity[len(cosine_similarity)-1]))
        similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
        similarity_scores = similarity_scores[1:6]
        beers_index = [i[0] for i in similarity_scores]
    
        for i in beers_index:
            beer_id.append(beerdata.iloc[i,2])   

    return render_template('index.html', prediction_text=beer_id,scroll='#map-section')

# run app
if __name__ == "__main__":
    app.run(debug = True)