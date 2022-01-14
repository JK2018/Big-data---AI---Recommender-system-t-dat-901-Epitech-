from recommender import app, request, jsonify
from server.recommender.store import *

# La route pour envoyer la liste des ID client


@app.route('/')
def index():
    return '/'

# Copié ce systeme pour le user
@app.route('/getTop10QuantityObject', methods=['GET'])
def getClientsId():
    return jsonify(getTop10QuantityObject())


@app.route('/getClients', methods=['POST'])
@app.route('/getSellsInformations')
def getSellsInformations():
    info = {}
