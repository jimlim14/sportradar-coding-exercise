const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = new express();
const port = 3001;

app
	.use(cors())
	.use(express.json())
	.use(router)
	.listen(port, () =>
		console.log('solo project server running on port: ' + port)
	);
