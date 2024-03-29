const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 'message': '[WIP] Server is running.' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});