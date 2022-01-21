from recommender import app, request, jsonify
from recommender.store import *
from recommender.client import *

# La route pour envoyer la liste des ID client


@app.route('/')
def index():
    return '/'

# Copié ce systeme pour le user


@app.route('/getStoreInfos', methods=['GET'])
def getStore():
    return jsonify(getStoreInfos())


@app.route('/getTop10QuantityObject', methods=['GET'])
def getClientsId():
    return jsonify(getTop10QuantityObject())


@app.route('/getUserData2', methods=["GET", 'POST'])
def getUserData():
    print("---init---")
    userId = request.form["userId"]
    print("userId : "+userId)
    return jsonify(getUserData2(userId))


@app.route('/getUserRecommendations', methods=["GET", 'POST'])
def getUserRecommendation():
    print("---init recomm---")
    userId = request.form["userId"]
    print("userId : "+userId)
    return jsonify(ids=getUserRecommendations(userId)[0], accuracy=get_recommendation_accuracy(
        getUserRecommendations(userId)[0], getUserRecommendations(userId)[1]))
