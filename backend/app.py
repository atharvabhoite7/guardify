from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import argparse
import configparser
import pandas as pd
import time
from tweepy import API, Cursor, OAuthHandler, TweepyException
import numpy as np
import csv
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

token = "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"
consumer_key = "c3sFnv7hxrfgRk5zN4VT1tfpk"
consumer_secret = "Tmr7cq2PLOUEA8nP2zrW5w5OT2yKieu5HE4FuOniyEZfin9Ktv"
access_token = "1390587786491617282-5K8Sz2lHtG35RP1UzjHnkl1LvvkYyw"
access_secret = "4CGdhXjBIlELdJqlm0vXdyQoDtslmVaNmgMebqSSs1ADf"
auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
api = API(auth, wait_on_rate_limit=True)


# @app.route("/analyzer", methods=["POST"])
# def hello():

#     session = HTMLSession()
#     url = "https://twitter.com/user/status/1633845058675027970"

#     r = session.get(url)
#     r.html.render(sleep=2)

#     tweet_text = r.html.find(".css-1dbjc4n.r-1s2bzr4", first=True)

#     print(tweet_text.text)


# @app.route("/scrape", methods=["POST"])
# def scrape1():
#     r = requests.get("https://twitter.com/user/status/1633845058675027970")
#     soup = BeautifulSoup(r.text, "html.parser")

#     category = []
#     size = []
#     price = []
#     floor = []
#     for item in soup.findAll(
#         "span",
#         {"class": "css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"},
#     ):
#         category.append(item.get_text(strip=True))

#     print(category)
#     return "ok"


@app.route("/get-followings", methods=["GET"])
def followings():
    friend_ids = []
    for fid in Cursor(
        api.get_friend_ids, screen_name="shubham307pal", count=5000
    ).items():
        friend_ids.append(fid)

    user_info = []
    for i in range(0, len(friend_ids), 100):
        try:
            chunk = friend_ids[i : i + 100]
            user_info.extend(api.lookup_users(user_id=chunk))
        except:
            import traceback

            traceback.print_exc()
            print("Something went wrong, skipping...")

    usernames = []
    for user in user_info:
        print(user._json["screen_name"])
        usernames.append(user._json["screen_name"])

    print(usernames)
    return usernames


@app.route("/get-tweets", methods=["POST"])
def tweets():
    username = request.json["username"]
    tweets = api.user_timeline(screen_name=username, count=10, tweet_mode="extended")
    # print(tweets[0]._json["full_text"])

    all_tweets = []

    for tweet in tweets:
        all_tweets.append(tweet._json["full_text"])

    return all_tweets


if __name__ == "__main__":
    app.run()
