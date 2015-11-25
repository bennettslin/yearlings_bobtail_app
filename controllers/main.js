var babelCoreRegister = require('babel-core/register');
var express = require('express');

// FIXME: Uncomment or delete.

// var React = require('react');
// var ReactDOMServer = require('react-dom/server');

var album = require('../album.js');
// var components = require('../public/js/components.js');

// var SoundPlayerComponents = require('react-soundplayer/components');
// var SoundPlayerAddons = require('react-soundplayer/addons');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('main/index', {album: album.details});
});

module.exports = router;