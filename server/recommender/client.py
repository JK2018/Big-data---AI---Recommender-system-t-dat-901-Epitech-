import pandas as pd
import json
from recommender.database import storeStats, ObjectId, clientStats, itemStats, clientCol
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer


def getProduct(product_id):
    result = itemStats.find_one({'PROD_ID': product_id})
    return result


def getUserData2(user_id):
    print("userId2 : "+str(user_id))
    cursor = clientStats.find_one({'CLI_ID.0': user_id})
    resultDf = pd.DataFrame(cursor)

    result = {}
    resultDf['PRIX_NET'] = resultDf['PRIX_NET'].apply(float)
    resultDf['TICKET_ID'] = resultDf['TICKET_ID'].apply(int)
    user_tickets = resultDf['TICKET_ID'].unique()
    cart_tot = resultDf.groupby("TICKET_ID").sum()
    # return cart_tot
    result['cli_id'] = user_id

    result['ticket_ids'] = int(user_tickets[0])

    nb_tot_paniers = len(user_tickets)
    result['nb_tot_paniers'] = nb_tot_paniers

    total_depenses = resultDf['PRIX_NET'].sum()
    result['total_depenses'] = total_depenses  # "%.2f" %

    prix_panier_max = cart_tot['PRIX_NET'].max()
    result['prix_panier_max'] = prix_panier_max

    prix_panier_min = cart_tot['PRIX_NET'].min()
    result['prix_panier_min'] = prix_panier_min

    prix_article_achete_max = resultDf['PRIX_NET'].max()
    result['prix_article_achete_max'] = prix_article_achete_max

    depenses_par_moi = resultDf[['MOIS_VENTE', 'PRIX_NET']].groupby(
        "MOIS_VENTE").sum()
    result['depenses_par_moi'] = depenses_par_moi.to_json()

    prix_panier_moy = cart_tot['PRIX_NET'].mean()
    result['prix_panier_moy'] = "%.2f" % prix_panier_moy

    nb_paniers_par_moi = resultDf[['MOIS_VENTE', 'TICKET_ID']].groupby(
        "MOIS_VENTE").nunique()
    nb_paniers_par_moi.drop(
        nb_paniers_par_moi.columns[0], axis=1, inplace=True)
    result['nb_paniers_par_moi'] = nb_paniers_par_moi.to_json()

    top_ten_produits_achetes = resultDf['LIBELLE'].value_counts()
    result['top_ten_produits_achetes'] = top_ten_produits_achetes.to_json()

    top_maille_achetes = resultDf['MAILLE'].value_counts()
    result['top_maille_achetes'] = top_maille_achetes.to_json()

    top_famille_achetes = resultDf['FAMILLE'].value_counts()
    result['top_famille_achetes'] = top_famille_achetes.to_json()

    top_univers_achetes = resultDf['UNIVERS'].value_counts()
    result['top_univers_achetes'] = top_univers_achetes.to_json()

    if top_famille_achetes.max() == top_famille_achetes.get('MAQUILLAGE'):
        gender_supposition = 'FEMALE'
    elif top_famille_achetes.get('MAQUILLAGE') == 'None':
        gender_supposition = 'MALE'
    else:
        gender_supposition = 'UNKNOWN'
    result['gender_supposition'] = gender_supposition

    print(result)

    return result


def get_recommendation_accuracy(recommendations, purchases):
    """Takes the list of products recommended by the application, and
    compares each one with the categories already purchased by the
    customer.

    Args:
        recommendations (List<LIBELLE>): List of product names
        cli_id (CLI_ID): client id

    Returns:
        Dict: LIBELLE as keys and string message as values
    """

    purchaseObjects = []
    for productObject in purchases:
        purchaseObjects.append(getProduct(productObject))

    categories_purchased = []
    for product in purchaseObjects:
        if product["MAILLE"] not in categories_purchased:
            categories_purchased.append(product["MAILLE"])
        if product["UNIVERS"] not in categories_purchased:
            categories_purchased.append(product["UNIVERS"])
        if product["FAMILLE"] not in categories_purchased:
            categories_purchased.append(product["FAMILLE"])

    accuracy = {}
    for product_id in recommendations:
        product = getProduct(product_id)
        percentageCat = 0
        if product["MAILLE"] in categories_purchased:
            percentageCat += 1
        if product["UNIVERS"] in categories_purchased:
            percentageCat += 1
        if product["FAMILLE"] in categories_purchased:
            percentageCat += 1

        accuracy[str(product["LIBELLE"])] = "This product is {}% categorically compatible with your purchases".format(
            percentageCat / 3 * 100
        )

    return accuracy


def getUserRecommendations(userID):
    '''
    IN: client id
    OUT: top 3 recommended items
    INFO: recommends the most similar item for each of the 3 most purchased items from
          this client. If client purchaseed less than 3 items then it ll recommend similar items 
          to the one he has already bought.
    '''

    # fetch items data from db and set to dataframe
    cursor = itemStats.find({})
    fields = ['PRIX_NET', 'FAMILLE', 'LIBELLE',
              'UNIVERS', 'MAILLE', 'PROD_ID', 'PRIX_CAT']
    items_data = pd.DataFrame(list(cursor), columns=fields)

    #print("step1 : ",items_data)

    # remove unecessary columns
    items_data2 = items_data.copy()
    items_data2['TEXT'] = items_data2['LIBELLE']+' '+items_data2['MAILLE'] + \
        ' '+items_data2['UNIVERS']+' '+items_data2['FAMILLE']
    items_data2.drop('LIBELLE', axis=1, inplace=True)
    items_data2.drop('MAILLE', axis=1, inplace=True)
    items_data2.drop('UNIVERS', axis=1, inplace=True)
    items_data2.drop('FAMILLE', axis=1, inplace=True)
    items_data2.drop('PRIX_NET', axis=1, inplace=True)

    count = CountVectorizer()
    count_matrix = count.fit_transform(items_data2['TEXT'])
    cosine_sim = cosine_similarity(count_matrix, count_matrix)
    indices = pd.Series(items_data2['PROD_ID'])

    #print("step1 : ",indices)

    def recommend(prod, cosine_sim=cosine_sim):
        recommended_prods = []
        idx = indices[indices == prod].index[0]
        score_series = pd.Series(cosine_sim[idx]).sort_values(ascending=False)
        top_15_indices = list(score_series.iloc[1:16].index)
        for i in top_15_indices:
            recommended_prods.append(list(items_data2['PROD_ID'])[i])

        return recommended_prods

    query2 = {"CLI_ID": int(userID)}
    cursor2 = clientCol.find(query2)
    fields2 = ['CLI_ID', 'PROD_ID', 'QTY', 'RATING']
    purchases = pd.DataFrame(list(cursor2), columns=fields2)

    # purchases = client_data.loc[client_data['CLI_ID'] == userID] # request DB here
    p_series = pd.Series(purchases['PROD_ID'])
    topThree = purchases.head(3)
    results = []
    for index, row in topThree.iterrows():
        a = recommend(row['PROD_ID'])

        for index, value in p_series.items():
            if value in a:
                a.remove(value)
        results.append(a)

    # PROD_ID buyed by userId
    accuracyList = p_series.tolist()

    if len(results) == 1:
        return [results[0][:3], accuracyList]

    if len(results) == 2:
        return [results[0][:2] + results[1][:1], accuracyList]

    if len(results) == 3:
        return [list(set(results[0][:1] + results[1][:1] + results[2][:1])), accuracyList]
