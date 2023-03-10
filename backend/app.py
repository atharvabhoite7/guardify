from flask import Flask,request,jsonify
import requests
app = Flask(__name__)

token = "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"

@app.route("/analyzer",methods=['POST'])
def hello():
  data = request.json
#   data_inputs = {
#     "inputs":data
#   }
  print(type(data))
  url = "https://api-inference.huggingface.co/models/ikram54/autotrain-harassement-675420038"
  headers = {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
  output = requests.post(url,headers=headers, data=data)
  print(output.json())
  return jsonify(output.json())

if __name__ == "__main__":
  app.run()