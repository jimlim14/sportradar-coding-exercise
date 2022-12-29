const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = new express();
const port = 3001;

app
	.use(cors())
	.use(express.json())
	.use(router)
	.listen(port, () => console.log('server may be running on port: 3001, 3002, or 3003'));
