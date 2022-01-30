import unittest
from recommender.store import getTop10QuantityObject


class TestStore(unittest.TestCase):
    def setUp(self):
        self.assertEqual(True, True)  # add assertion here

    def test_get_top_100_quantity_object(self):
        data = getTop10QuantityObject()

        self.assertEqual(len(data), 100)


