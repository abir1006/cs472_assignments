const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json());
app.use('/books', bookRouter);

// 404 error handling
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Oopps 404 not found" });
});

// Custom error handling
app.use((error, req, res, next) => {
    res.status(500).json({ success: false, message: error.message });
});

app.listen(3000, () => console.log('Listening on port 3000'));