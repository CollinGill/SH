from flask import Flask
import os 
import json
import time
import spotipy
import lyricsgenius as lg

app = Flask(__name__)

# Members API Route

spotify_client_id = os.environ['SPOTIPY_CLIENT_ID']
spotify_secret = os.environ['SPOTIPY_CLIENT_SECRET']
spotify_redirect_uri = os.environ['SPOTIPY_REDIRECT_UPI']

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

@app.route("/")
def members():
    return "hello"

if __name__ == "__main__":
    app.run(debug=True) 