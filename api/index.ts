import express from 'express';
import cors from 'cors';
import massage from './massege.json';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

app.use(express.json());   

//for working with same domain and preventing blocking of browser
app.use(cors());

// Handling '/' Request
app.get('/', (_req, _res) => {
	_res.send(massage);
});

// Server setup
app.listen(port, () => {
	console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});