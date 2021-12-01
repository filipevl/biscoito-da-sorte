const express = require('express');
const app = express();
const router = require('./routes.js');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})