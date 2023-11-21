const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'build')));

// Catchall handler to handle every other route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Client is being served on http://localhost:${port}`);
});
