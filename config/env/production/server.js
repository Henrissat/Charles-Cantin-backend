module.exports = ({ env }) => ({
    url: env('https://backend-charles-cantin.herokuapp.com'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["TEST"]),
    },
  });