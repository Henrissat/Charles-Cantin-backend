const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

// postgres://sxuepqrnrrcbss:5d3100b82e46b43fa0d0b2b6aade7c6dc7a923fe02e2530feba1599e7cb3ba9b@ec2-54-228-95-1.eu-west-1.compute.amazonaws.com:5432/d74ackl37mepl9