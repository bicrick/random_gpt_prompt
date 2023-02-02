import pandas as pd
import random
from flask import Flask, request, jsonify
from flask_cors import CORS

df = pd.read_csv("prompts.csv")
a_list = df['act'].values.tolist()
b_list = df['prompt'].values.tolist()
purpose = random.choice(a_list)
prompt = random.choice(b_list)
print(purpose + ": " + prompt)

app = Flask(__name__)
CORS(app)

def RandomPrompt():
    purpose = random.choice(a_list)
    prompt = random.choice(b_list)

    return [purpose,prompt]

@app.route("/")
def sendJSON():
    response = RandomPrompt()
    return jsonify({"message": response})

@app.route('/status')
def index():
    return "Status OK"

if __name__ == '__main__':
    app.run() 

