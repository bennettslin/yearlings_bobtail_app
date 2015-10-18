var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    var config = {

    };

    res.render('main/index', config);
});

module.exports = router;