import os
import sys

import pandas as pd
import numpy as np


def get_nb_clients(dataframe):
    pass


def get_avg_product_price(dataframe):
    pass


def get_total_sales(dataframe):
    pass


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


# TODO: create function to check all null values for all columns
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
    pass


def get_nb_unique_libelle_per_famille(dataframe):
    pass


def get_nb_unique_libelle_per_univers(dataframe):
    pass


def get_standard_deviation_nb_products_per_client(dataframe):
    pass


def get_avg_nb_products_per_client(dataframe):
    pass


def get_avg_total_expenses_per_client(dataframe):
    pass


def get_avg_ticket_price(dataframe):
    pass


def get_avg_nb_product_per_ticket(dataframe):
    pass


def get_all_products(dataframe):
    pass