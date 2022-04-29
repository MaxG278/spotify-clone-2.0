//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
  "https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#";

const redirectUri = "http://localhost:3000/";

const clientId = "d9d54020fda04514a31e9751cacbe33d";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
    });
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect-uri${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
