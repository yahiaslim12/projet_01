from flask import Flask, jsonify, request, session
from flask_cors import CORS
import os
import psycopg2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://default:oLa5hePtz0RN@ep-proud-hill-a2s52c8d.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"

DATABASE_URL = app.config['SQLALCHEMY_DATABASE_URI']

# Connect to PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    if conn : print("connection successfuly")
    return conn

@app.route('/api/test')
def hello_world():
    con = get_db_connection()
    return jsonify({"message":"hello "})



if __name__ == '__main__':
    app.run(debug=True,port=8000)
