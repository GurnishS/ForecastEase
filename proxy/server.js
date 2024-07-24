// Import required modules using import() syntax
import('node-fetch').then(({ default: fetch }) => {
    // Create an Express app
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;

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
}).catch(err => {
    console.error('Failed to import node-fetch:', err);
});
