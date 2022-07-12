const Pool = require('pg').Pool;

const devConfig = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: 'localhost',
	port: '5432',
	database: 'partydb',
};

const prodConfig = {
	connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
	process.env.NODE_ENV === 'production' ? prodConfig : devConfig
);

module.exports = pool;
