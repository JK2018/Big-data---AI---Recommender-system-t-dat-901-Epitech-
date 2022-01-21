import unittest
from recommender.client import getUserData2, getUserRecommendations


class TestClient(unittest.TestCase):
    def SetUp(self):
        self.assertEqual(True, True)  # add assertion here
        self.client_id = 1490281

    def test_get_user_data_2(self):
        data = getUserData2(self.client_id)

        self.assertEqual(type(data), "object")

    def test_get_user_recommendations(self):
        data = getUserRecommendations(self.client_id)

        self.assertEqual(len(data), 3)

