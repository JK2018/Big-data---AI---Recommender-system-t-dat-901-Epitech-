import os
import sys

import pandas as pd
import numpy as np


def get_nb_clients(dataframe):
    """
    Take dataframe
    Return number of unique clients
    """
    total_clients = dataframe['CLI_ID'].nunique()
    return total_clients


def get_avg_product_price(dataframe):
    """
    Take dataframe
    Return average price of products
    """
    avg_product_price = dataframe['PRIX_NET'].mean()
    return avg_product_price


def get_total_sales(dataframe):
    """
    Take dataframe
    Return sum of all sold products
    """
    grand_total_sales = dataframe['PRIX_NET'].sum()
    return grand_total_sales


def get_nb_unique_libelle(dataframe):
    """
    Take dataframe 
    Return number of unique Libelle
    """
    return dataframe['LIBELLE'].nunique()


def get_nb_unique_maille(dataframe):
    """
    Take dataframe 
    Return number of unique Maille
    """
    return dataframe['MAILLE'].nunique()


def get_nb_unique_univers(dataframe):
    """
    Take dataframe 
    Return number of unique Univers
    """
    return dataframe['UNIVERS'].nunique()


def get_nb_unique_famille(dataframe):
    """
    Take dataframe 
    Return number of unique Famille
    """
    return dataframe['FAMILLE'].nunique()

def get_nb_unique_months(dataframe):
    """
    Take dataframe 
    Return number of unique MOIS VENTE
    """
    return dataframe['MOIS_VENTE'].nunique()


def get_nb_unique_clients(dataframe):
    """
    Take dataframe 
    Return number of unique clients
    """
    return dataframe['CLI_ID'].nunique()


def get_null_values(dataframe):
    """
    Take dataframe and check null values
    If none RETURN False
    If yes RETURN dictionary with count of null per group
    """
    null_famille = dataframe['FAMILLE'].isna().sum()
    null_maille = dataframe['MAILLE'].isna().sum()
    null_univers = dataframe['UNIVERS'].isna().sum()
    null_libelle = dataframe['LIBELLE'].isna().sum()
    null_cli_id = dataframe['CLI_ID'].isna().sum()
    null_prix_net = dataframe['PRIX_NET'].isna().sum()
    null_ticket_id = dataframe['TICKET_ID'].isna().sum()

    results = np.array([
        null_famille,        
        null_maille,
        null_univers,
        null_libelle,        
        null_cli_id,
        null_prix_net,
        null_ticket_id
    ])
    
    if np.all((results == 0)):
        return False
    
    return {
        "FAMILLE": null_famille,
        "MAILLE": null_maille,
        "UNIVERS": null_univers,
        "LIBELLE": null_libelle,
        "CLI_ID": null_cli_id,
        "PRIX_NET": null_prix_net,
        "TICKET_ID": null_ticket_id,
    }




def get_mean_product_price_per_maille(dataframe):
    """
    Take dataframe
    Return mean product price per MAILLE
    """
    return dataframe.groupby(['MAILLE'])['MAILLE', 'PRIX_NET'].mean()


def get_mean_product_price_per_famille(dataframe):
    """
    Take dataframe
    Return mean product price per FAMILLE
    """
    return dataframe.groupby(['FAMILLE'])['FAMILLE', 'PRIX_NET'].mean()


def get_mean_product_price_per_univers(dataframe):
    """
    Take dataframe
    Return mean product price per UNIVERS
    """
    return dataframe.groupby(['UNIVERS'])['UNIVERS', 'PRIX_NET'].mean()


def get_nb_unique_libelle_per_maille(dataframe):
    """
    Take dataframe
    Return number of unique products for each different MAILLE
    """
    u = dataframe.groupby(['MAILLE']).nunique()
    nb_products_per_maille = u[['LIBELLE']]
    nb_products_per_maille.rename(columns={'LIBELLE': 'NB_DIFF_LIBELLE'}, inplace=True)
    return nb_products_per_maille



def get_nb_unique_libelle_per_famille(dataframe):
    """
    Take dataframe
    Return number of unique products for each different FAMILLE
    """
    uu = dataframe.groupby(['FAMILLE']).nunique()
    nb_products_per_famille = uu[['LIBELLE']]
    nb_products_per_famille.rename(columns={'LIBELLE': 'NB_DIFF_LIBELLE'}, inplace=True)
    return nb_products_per_famille


def get_nb_unique_libelle_per_univers(dataframe):
    """
    Take dataframe
    Return number of unique products for each different UNIVERS
    """
    uuu = dataframe.groupby(['UNIVERS']).nunique()
    nb_products_per_univers = uuu[['LIBELLE']]
    nb_products_per_univers.rename(columns={'LIBELLE': 'NB_DIFF_LIBELLE'}, inplace=True)
    return nb_products_per_univers


def get_standard_deviation_nb_products_per_client(dataframe):
    """
    Take dataframe
    Return standard deviation of number of products baught per client
    """
    w = dataframe.groupby(['CLI_ID']).count()
    std_nb_items_bought_per_client = w['PRIX_NET'].std()
    return std_nb_items_bought_per_client


def get_avg_nb_products_per_client(dataframe):
    """
    Take dataframe
    Return mean number of products bought per client
    """
    w = dataframe.groupby(['CLI_ID']).count()
    avg_nb_items_bought_per_client = w['PRIX_NET'].mean()
    return avg_nb_items_bought_per_client




def get_avg_total_expenses_per_client(dataframe):
    """
    Take dataframe
    Return mean price spent by clients
    """
    z = dataframe.groupby(['CLI_ID']).sum()
    avg_client_expenses = z['PRIX_NET'].mean()
    return avg_client_expenses


def get_avg_ticket_price(dataframe):
    """
    Take dataframe
    Return mean price spent per cart
    """
    x = dataframe.groupby(['CLI_ID','TICKET_ID','MOIS_VENTE']).sum()
    avg_ticket_price = x['PRIX_NET'].mean()
    return avg_ticket_price


def get_avg_nb_product_per_ticket(dataframe):
    """
    Take dataframe
    Return mean number products per cart
    """
    y = dataframe.groupby(['CLI_ID','TICKET_ID','MOIS_VENTE']).count()
    avg_ticket_nb_products = y['PRIX_NET'].mean()
    return avg_ticket_nb_products


def get_top_ten_most_sold_products(dataframe):
    """
    Take dataframe
    Return 10 most sold products
    """
    most_sold_items = data['LIBELLE'].value_counts()
    return most_sold_items[:10]


def get_all_products(dataframe):
    pass