import pandas as pd
from .user import User

if __name__ == "main":
    dataframe = pd.read_csv('/Users/jonathankhalifa/Desktop/T-DAT-901/KaDo.csv')
    x = User(dataframe, '997385337')
    print(x.get_user_id)