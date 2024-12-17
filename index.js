import express from 'express';
import dotenv from 'dotenv';
import summarizeText from './summzarize.js';

import { summarizeController } from './controllers/summarizeController.js'; 
const app = express();
const port = 3000;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());
dotenv.config();

// Serves static files from the 'frontend' directory
app.use(express.static('frontend'));

app.post('/summarize', summarizeController);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
