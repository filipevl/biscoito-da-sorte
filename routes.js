const express = require('express');
const router = express.Router();
const FraseController = require('./FraseController');

router.get('/getPhrase', FraseController.getFrase)
    .get('/', (req,res) => {
        res.render('index');
    });


module.exports = router;