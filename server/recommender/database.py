import pymongo
from bson.objectid import ObjectId

# Data stored for the store
client = pymongo.MongoClient(
    "mongodb+srv://dat:dat@clusterdat.s2ggv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client['datdb']
storeStats = db['storeStats']
