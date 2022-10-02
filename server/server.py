from flask import Flask, jsonify, request
import os 
from dotenv import load_dotenv
from spotipy.oauth2 import SpotifyOAuth
import json
import time
import spotipy


app = Flask(__name__)
# Members API Route
# cd into server, "python3 -m venv venv"
# "source venv/bin/activate"
# "pip3 install Flask"
# "pip3 install spotipy"
# "pip3 install python-dotenv"

load_dotenv()

spotify_client_id = os.environ.get('SPOTIPY_CLIENT_ID')
spotify_secret = os.environ.get('SPOTIPY_CLIENT_SECRET')
spotify_redirect_uri = os.environ.get('SPOTIPY_REDIRECT_UPI')
scope = "user-top-read"
spotify_username = os.environ.get('USERNAME')


# go to http://127.0.0.1:5000/songs
@app.route('/songs', methods = ['GET'])
def songs():
    top_songs = sp.current_user_top_tracks(limit=20)
    song_dict = {}
    for count, items in enumerate(top_songs["items"]):
        song_dict[count+1] = str(items["name"])
    return song_dict

# go to http://127.0.0.1:5000/artists
@app.route("/artists", methods = ['GET'])
def artists():
    top_artists = sp.current_user_top_artists(limit=20)
    artist_list = []
    for artist in top_artists['items']:
        artist_list.append([artist['name'], artist['external_urls']['spotify'], str(artist["popularity"]) + "/100"])
    return artist_list

@app.route('/login')
def login():
    # token = spotipy.util.prompt_for_user_token(username=spotify_username, scope=scope)
    return [artists(), songs()]

if __name__ == "__main__":
    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=spotify_client_id, client_secret=spotify_secret, 
                        redirect_uri=spotify_redirect_uri, scope=scope, username=spotify_username))
    app.run(debug=True) 