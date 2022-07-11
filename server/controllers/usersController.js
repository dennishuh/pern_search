const pool = require('../db/connect');

const getUsers = async (req, res) => {
	try {
		const { query } = req.query;

		const users = await pool.query(
			"SELECT * FROM users WHERE first_name || ' ' || last_name ILIKE $1;",
			[`%${query}%`]
		);

		res.send(users.rows);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = {
	getUsers,
};
