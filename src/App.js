import "./styles.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(XXXX, user);
      });
    }

    console.log("i have a token", token);
  }, []);

  return (
    <div className="App">
      <h1></h1>
      {token ? <h1>I am logged in</h1> : <Login />}

      <Login />
    </div>
  );
}
export default App;
