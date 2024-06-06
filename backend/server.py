from flask import Flask, jsonify, request, session
from flask_cors import CORS
import os
import psycopg2

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://default:oLa5hePtz0RN@ep-proud-hill-a2s52c8d.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"

DATABASE_URL = app.config['SQLALCHEMY_DATABASE_URI']
CORS(app, supports_credentials=True)

# Connect to PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    if conn:
        print("connection successfuly")
    return conn

@app.route('/api/test')
def test():
    return jsonify({"message": "hello"})

@app.route('/api/createAccount', methods=['POST'])
def create_account():
    try:
        con = get_db_connection()
        data = request.get_json()

        if not data:
            return jsonify({"error": "No input data provided"}), 400

        email = data.get('email')
        password = data.get('password')
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        age = data.get('age')
        weight = data.get('weight')

        if not email or not password or not firstname or not lastname or not age or not weight:
            return jsonify({"error": "Missing required fields"}), 400

        cursor = con.cursor()
        cursor.execute(
            "INSERT INTO users (firstname, lastname, age, weight, email, password) VALUES (%s, %s, %s, %s, %s, %s)",
            (firstname, lastname, age, weight, email, password)
        )
        con.commit()
        cursor.close()
        con.close()

        return jsonify({"message": "User is added"})
    except Exception as e:
        app.logger.error(f"Database error occurred: {e}")
        return jsonify({"error": "Database query failed"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
