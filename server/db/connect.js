const Pool = require('pg').Pool;

console.log('process.env.DB_USER:', process.env.DB_USER);

const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: 'localhost',
	port: '5432',
	database: 'partydb',
});

module.exports = pool;
