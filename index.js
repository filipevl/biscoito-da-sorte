const express = require('express');
const app = express();
const router = require('./routes.js');

app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})