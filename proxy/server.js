// Import required modules
const express = require('express');
const fetch = require('node-fetch'); // To make HTTP requests

// Create an Express app
const app = express();
const port = process.env.PORT || 3000; // Port number

// Define a route for proxying HTTP requests
app.get('/proxy', async (req, res) => {
    const { url } = req.query; // Get URL to fetch from query parameter

    try {
        const response = await fetch(url); // Fetch data from the provided URL
        const data = await response.json(); // Assuming JSON response
        res.json(data); // Send JSON response back to the client
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
