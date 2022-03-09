module.exports = ({ env }) => ({
    url: env('https://backend-charles-cantin.herokuapp.com'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["9TJpN/qHlNeciq/Xp22i0w==","3t1DrhCe4WQo0MYGEHzCtg==","r5rAdJ0Vs1XjsWQtvsDCPA==","30gzTlfbLw7dCoOM5scYyQ=="]),
    },
  });