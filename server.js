import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 5001;

// Convert the URL to a path that's usable in the file system
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the path module to join __dirname with your 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


// Proxy endpoint
// Assuming your React app might call multiple teams, let's make it dynamic:
app.get('/api/news/:teamName', async (req, res) => {
    const { teamName } = req.params;
    try {
        const apiUrl = `http://52.0.91.192:3000/news/${teamName}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('API request failed', error);
        res.status(500).send('Internal Server Error');
    }
});

