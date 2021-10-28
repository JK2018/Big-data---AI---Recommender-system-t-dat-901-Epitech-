import os
import sys
import pandas as pd
import pandas as pd
import math
import pprint


class User:

    user_id = ''
    user_data = {}
    grpby_userId = {}
    cart_tot = user_data.groupby("TICKET_ID").sum()

    def __init__(self, dataframe, user_id):
        user_id = self.user_id
        grpby_userId = self.dataframe.groupby('CLI_ID')
        user_data = grpby_userId.get_group(self.user_id)
    

    def get_user_id(self, user_id):
        return user_id

    def get_user_ticket_ids(self, user_data):
        return self.user_data['TICKET_ID'].unique()

    def get_total_nb_carts(self, user_data):
        user_tickets = self.user_data['TICKET_ID'].unique()
        return len(user_tickets)

    def get_total_expenses(self, user_data):
        total_depenses = self.user_data['PRIX_NET'].sum()
        return "%.2f" % total_depenses

    def get_most_expensive_cart(self, cart_tot):
        return self.cart_tot['PRIX_NET'].max()

    def get_least_expensive_cart(self, cart_tot):
        return self.cart_tot['PRIX_NET'].min()

    def get_avg_cart_price(self, cart_tot):
        prix_panier_moy = self.cart_tot['PRIX_NET'].mean()
        return "%.2f" % prix_panier_moy

    def get_most_expensive_product(self, user_data):
        return self.user_data['PRIX_NET'].max()

    def get_all_expenses_per_month(self, user_data):
        depenses_par_moi = self.user_data[['MOIS_VENTE', 'PRIX_NET']].groupby("MOIS_VENTE").sum()
        return depenses_par_moi

    def get_nb_carts_per_month(self, user_data):
        nb_paniers_par_moi = self.user_data[['MOIS_VENTE', 'TICKET_ID']].groupby("MOIS_VENTE").nunique()
        nb_paniers_par_moi.drop(nb_paniers_par_moi.columns[0], axis=1, inplace=True)
        return nb_paniers_par_moi

    def get_purchase_freq_per_product(self, user_data):
        return self.user_data['LIBELLE'].value_counts()

    def get_purchase_freq_per_maille(self, user_data):
        return self.user_data['MAILLE'].value_counts()

    def get_purchase_freq_per_univers(self, user_data):
        return self.user_data['UNIVERS'].value_counts()

    def get_purchase_freq_per_famille(self, user_data):
        return self.user_data['FAMILLE'].value_counts()

    def get_gender_suggestion(self, user_data):
        top_famille_achetes = self.user_data['UNIVERS'].value_counts()
        if top_famille_achetes.max() == top_famille_achetes.get('MAQUILLAGE'):
            gender_supposition = 'FEMALE'
        elif top_famille_achetes.get('MAQUILLAGE') == 'None':
            gender_supposition = 'MALE'
        else:
            gender_supposition = 'UNKNOWN'
        return gender_supposition







dataframe = pd.read_csv('/Users/jonathankhalifa/Desktop/T-DAT-901/KaDo.csv')
x = User(dataframe, '997385337')
print(x.get_user_id)



