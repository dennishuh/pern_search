// load in .env first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

console.log('process.env.PORT', process.env.PORT);
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRouter);

// app.use('/api/v1/jobs', jobsRouter);

// app.get('/api/v1/users', async (req, res) => {
// 	try {
// 		const { query } = req.query;
// 		console.log('query', query);

// 		const users = await pool.query(
// 			'SELECT * FROM users WHERE first_name || " " || last_name ILIKE $1',
// 			[`%${query}%`]
// 		);

// 		console.log('users.row', users.row[0]);

// 		res.send({ test: 'dennis' });
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// });

app.listen(PORT, () => {
	console.log(`Server is starting on port ${PORT}`);
});
