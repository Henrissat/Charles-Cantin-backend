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

// postgres://rlzvlpgjtfjzrd:cb045bd5a44e17b8fa49fd6b93c83ab893a56e28d4a7b5b1a6171db65999877d@ec2-54-229-47-120.eu-west-1.compute.amazonaws.com:5432/demf9gi77jt1k1