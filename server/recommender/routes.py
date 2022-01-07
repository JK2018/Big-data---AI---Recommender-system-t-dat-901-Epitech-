from recommender import app, request, jsonify
from recommender.client import *

# La route pour envoyer la liste des ID client


@app.route('/')
def index():
    return '/'


@app.route('/getTop10QuantityObject', methods=['GET'])
def getClientsId():
    return jsonify(getTop10QuantityObject())


@app.route('/getClients', methods=['POST'])
@app.route('/getSellsInformations')
def getSellsInformations():
    info = {}
