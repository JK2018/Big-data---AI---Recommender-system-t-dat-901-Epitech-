# Getting Started

A system of product recommendations was created based on a dataset provided, which contained the product purchases from a wide range of clients. The system itself takes a client ID, and returns a list of recommended products. Two different algorithms are offered: The first is a collaborative based filtering method, which creates a rank for each product purchased by each client; the second is a content based method using NLP to detect similarity between product titles. The resulting recommendations are provided with a categorical weighted average.
Keywords: Collaborative filtering, item based, Artificial Intelligence

For having more information about the project and the methodology, please see the document "Report.pdf" in the root of the project

## Launch Front-end interface

This application is made with the framework React

1. First, you need to go to the front directory `cd /app`

2. Then you need to install all dependencies `npm install`

3. After the project installation you can launch the app `npm start`

## Launch Back-end infrastructure

The infrastructure is made in Python with Flask framework

1. First, you need to go to the infrastructure directory `cd /server`

2. Then, you need to install all dependencies `pip install -r requirements.txt`

3. If you have any missing module during the installtion. Just run the command `pip install name_module`

4. After the project installation is complete, you can launch the app `python run.py`

