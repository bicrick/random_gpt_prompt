import pandas as pd
import random
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

df = pd.read_csv("prompts.csv")
prompt_dict = {}
for row in df.iterrows():
    act, prompt = row[1]['act'], row[1]['prompt']
    if act in prompt_dict:
        prompt_dict[act].append(prompt)
    else:
        prompt_dict[act] = [prompt]


port = int(os.environ.get("PORT",5000))
app = Flask(__name__, static_url_path='')
CORS(app)

def RandomPrompt():
    purpose = random.choice(list(prompt_dict.keys()))
    prompt = random.choice(prompt_dict[purpose])

    return [purpose,prompt]

@app.route("/api")
def sendJSON():
    response = RandomPrompt()
    return jsonify({"message": response})

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port) 

#Izzy is so funny. 
#She likes to eat pizza.
#She is a good friend.
#Sometimes she is a little bit mean.
#In the mornings, she likes to eat cereal.
#She is a good student.
#But, she is not a good dancer.