from recommender.database import storeStats, ObjectId


def getStoreInfos():
    store = {}

    # GET STORE INFORMATIONS
    objInstance = ObjectId("61a176352e90743f7b15c072")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["store_informations"] = result

    # GET LIBELLE QUANTITY
    objInstance = ObjectId("61a176352e90743f7b15c073")
    result = storeStats.find_one({"_id": objInstance})
    # cast problem
    del result["_id"]
    store["libelle_quantity"] = result

    # GET TOP 10 CLIENT SPENT BY ID
    objInstance = ObjectId("61a176352e90743f7b15c074")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["top_client_spent"] = result

    # GET TOTAL SELLS/NB_TICKETS BY MONTH
    objInstance = ObjectId("61a1754f2e90743f7b15c06f")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["sells_nbtickets_by_month"] = result

    # GET LIBELLE QUANTITY BY MONTH
    objInstance = ObjectId("61a176352e90743f7b15c075")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["libelle_sell_by_month"] = result

    # GET INFORMATION BY FAMILY
    objInstance = ObjectId("61a176352e90743f7b15c076")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["infos_by_family"] = result

    # GET INFORMATION BY UNIVERS
    objInstance = ObjectId("61a176352e90743f7b15c077")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["infos_by_univers"] = result

    # GET INFORMATION BY MAILLES
    objInstance = ObjectId("61a1754f2e90743f7b15c070")
    result = storeStats.find_one({"_id": objInstance})
    del result["_id"]
    store["infos_by_mailles"] = result

    return store
