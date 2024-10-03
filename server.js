import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json("License valid");
})

app.listen(3000);