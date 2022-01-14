from recommender import app, request, jsonify
from recommender.store import *

# La route pour envoyer la liste des ID client


@app.route('/')
def index():
    return '/'

# Copié ce systeme pour le user


@app.route('/getStoreInfos', methods=['GET'])
def getStore():
    return jsonify(getStoreInfos())


# @app.route('/getClients', methods=['POST'])
# @app.route('/getSellsInformations')
# def getSellsInformations():
#     info = {}
