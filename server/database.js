const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
  connectionString: 'postgres://weqiaugkwkfwuc:7333f8981160a348a8e40f834c83392e9221982a5a1964a788391d85ca4c9ac6@ec2-79-125-2-142.eu-west-1.compute.amazonaws.com:5432/d4bo1uu8dsslou',
  ssl: true
});

module.exports = pool;
