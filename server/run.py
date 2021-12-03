
from flask import Flask
from client import *
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient(
    "mongodb+srv://dat:dat@clusterdat.s2ggv.mongodb.net")
db = client['datdb']
dataset = db['storeStats']


mydoc = dataset.find({})


@app.route('/')
def daccord():
    if client is None:
        print("ta mere la pute")
    if client:
        for document in mydoc:
            print(document)
    return 'caca'


if __name__ == '__main__':
    app.run()  # Start the server
