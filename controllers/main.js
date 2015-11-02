var express = require('express');
// var SoundPlayerComponents = require('react-soundplayer/components');
// var SoundPlayerAddons = require('react-soundplayer/addons');

var album = require('../album.js');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('main/index', {album: album.details});
});

module.exports = router;