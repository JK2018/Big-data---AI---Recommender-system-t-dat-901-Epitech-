import unittest
import sys
import pandas as pd

sys.path.insert(0, '/Users/ryanheadley/epitech/recommender_2021_35/server')
from recommender.client import getUserData
from recommender.client import getUserRecommendations
from recommender.client import get_recommendation_accuracy
from recommender.database import storeStats, ObjectId, clientStats, itemStats, clientCol


class TestClient(unittest.TestCase):
    def setUp(self):
        self.assertEqual(True, True)  # add assertion here
        self.client_id = 1490281

    def test_getUserData(self):
        data = getUserData(str(1490281))

        self.assertEqual(type(data), dict)

    def test_get_user_recommendations(self):
        data = getUserRecommendations(self.client_id)

        self.assertEqual(len(data), 2)

    def test_get_recommendation_accuracy(self):
        query2 = {"CLI_ID": int(self.client_id)}
        cursor2 = clientCol.find(query2)
        fields2 = ['CLI_ID', 'PROD_ID', 'QTY', 'RATING']
        purchases = pd.DataFrame(list(cursor2), columns=fields2)
        data = get_recommendation_accuracy([1309, 1207], pd.Series(purchases['PROD_ID']))

        self.assertEqual(len(data), 2)