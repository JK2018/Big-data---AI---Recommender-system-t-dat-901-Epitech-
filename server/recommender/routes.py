from recommender import app, request, jsonify
from recommender.store import *
from recommender.client import *

# La route pour envoyer la liste des ID client


@app.route('/')
def index():
    return '/'

# Copié ce systeme pour le user


@app.route('/getStoreInfos', methods=['GET'])
def getStoreRoute():
    return jsonify(getStoreInfos())


@app.route('/getUserIds', methods=['GET'])
def getClientsIdRoute():
    ids = getClientsId()
    return JSONEncoder().encode(ids)


@app.route('/getUserIds', methods=['GET'])
def getUserRoute():
    ids = getClientsId()
    return JSONEncoder().encode(ids)


@app.route('/getUserData', methods=["GET"])
def getUserDataRoute():
    userId = request.args.get('userId')
    # user = getUserData(userId)

    result = getUserData(userId)
    if result == -1:
        return "User not found", 400
    else:
        return result


@app.route('/getUserRecommendations', methods=["GET", 'POST'])
def getUserRecommendationRoute():
    print("---init recomm---")
    userId = request.form["userId"]
    print("userId : "+userId)
    return jsonify(ids=getUserRecommendations(userId)[0], accuracy=get_recommendation_accuracy(
        getUserRecommendations(userId)[0], getUserRecommendations(userId)[1]))
