
from flask import Flask
from flask import jsonify
from flask_cors import CORS
from client import *
from database import *
import pymongo

client = pymongo.MongoClient(
    "mongodb+srv://dat:dat@clusterdat.s2ggv.mongodb.net")
db = client['datdb']
dataset = db['storeStats']

# mydoc = dataset.find({})

app = Flask(__name__)
CORS(app)

if client is None:
    print("pas de client")

@app.route('/')
def index():
    return '/'


@app.route('/getSellsInformations')
def getSellsInformations():
    info = {}
    mydoc = dataset.find({})
    for post in mydoc:
        if (str(post["_id"]) == "61a176352e90743f7b15c072"):
            info["totalNbClients"] = post["totalNbClients"]
            info["totalSales"] = post["totalSales"]
            info["avgTicketPrice"] = post["avgTicketPrice"]
            info["avgQtyItemsPerTicket"] = post["avgQtyItemsPerTicket"]
    return jsonify(
        info
    )


if __name__ == '__main__':
    app.run()  # Start the server
