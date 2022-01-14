from recommender.database import storeStats, ObjectId


def getTop10QuantityObject():
    objInstance = ObjectId("61a176352e90743f7b15c073")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    print(result)
    return result
