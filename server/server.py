from flask import Flask
import os 
from dotenv import load_dotenv
import json
import time
import spotipy


app = Flask(__name__)

# Members API Route
# cd into server, "python3 -m venv venv"
# "source venv/bin/activate"
# "pip3 install Flask"
# "pip3 install spotipy"

load_dotenv()

spotify_client_id = os.environ.get('SPOTIPY_CLIENT_ID')
spotify_secret = os.environ.get('SPOTIPY_CLIENT_SECRET')
spotify_redirect_uri = os.environ.get('SPOTIPY_REDIRECT_UPI')

scope = "user-top-read"

oauth_object = spotipy.SpotifyOAuth(client_id=spotify_client_id, 
                                    client_secret=spotify_secret,
                                    redirect_uri=spotify_redirect_uri,
                                    scope=scope)


token_dict = oauth_object.get_access_token()

token = token_dict['access_token']  

spotify_object = spotipy.Spotify(auth=token)

current = spotify_object.current_user_top_tracks()
currentTwo = spotify_object.current_user_top_artists()


# go to http://127.0.0.1:5000/songs
@app.route("/songs")
def songs():
    dict = {}
    for count, items in enumerate(current["items"]):
        dict[count+1] = str(items["name"])
    return dict

# go to http://127.0.0.1:5000/artists
@app.route("/artists")
def artists():
    dict = {}
    for count, items in enumerate(currentTwo["items"]):
        dict[count+1] = items["name"] + " + popularity: " + str(items["popularity"]) + "/100"
    return dict

if __name__ == "__main__":
    app.run(debug=True) 