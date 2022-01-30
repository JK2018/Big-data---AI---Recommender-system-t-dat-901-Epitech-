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
    ids = getClientsId(request.args.get('searchId'))
    return JSONEncoder().encode(ids)


# @app.route('/getUserIds', methods=['GET'])
# def getUserRoute():
#     ids = getClientsId()
#     return JSONEncoder().encode(ids)


@app.route('/getUserData', methods=["GET"])
def getUserDataRoute():
    userId = request.args.get('userId')
    result = getUserData(userId)
    if result == -1:
        return "User not found", 400
    else:
        return result


@app.route('/getUserRecommendations', methods=["GET"])
def getUserRecommendationRoute():
    userId = request.args.get('userId')
    recommendations = getUserRecommendations(userId)
    svdModel = svdPredict(userId)
    return {"svd": svdModel, "nlp": recommendations}
