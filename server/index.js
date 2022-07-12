// load in .env first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	// serve static content
	app.use(express.static(path.join(__dirname, '..', 'client/build')));
}

app.use('/api/v1/users', userRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is starting on port ${PORT}`);
});
