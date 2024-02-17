const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

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

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
