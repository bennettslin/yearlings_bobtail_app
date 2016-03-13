var babelCoreRegister = require('babel-core/register');
var express = require('express');

// FIXME: Uncomment or delete.

// var React = require('react');
// var ReactDOMServer = require('react-dom/server');

var config = require('../album/00-yearlings-bobtail.js');
config.album.songs.push(require('../album/01-didi.js').song);
config.album.songs.push(require('../album/02-willy-the-cocoa.js').song);
config.album.songs.push(require('../album/03-dear-saskia.js').song);
config.album.songs.push(require('../album/04-odin.js').song);
config.album.songs.push(require('../album/05-ash-wednesday.js').song);
config.album.songs.push(require('../album/06-pchelkas-starry-journey.js').song);
config.album.songs.push(require('../album/07-m.js').song);
config.album.songs.push(require('../album/08-good-night-sita.js').song);
config.album.songs.push(require('../album/09-grasshoppers-lie-heavy.js').song);
config.album.songs.push(require('../album/10-constellations.js').song);
config.album.songs.push(require('../album/11-look-back-in-anger.js').song);
config.album.songs.push(require('../album/12-garryowen.js').song);
config.album.songs.push(require('../album/13-on-a-golden-cord.js').song);
config.album.songs.push(require('../album/14-kyon.js').song);
config.album.songs.push(require('../album/15-uncanny-valley-boy.js').song);
config.album.songs.push(require('../album/16-cremated.js').song);
config.album.songs.push(require('../album/17-vegan-proclamation.js').song);
config.album.songs.push(require('../album/18-my-100000th-dream.js').song);
// var components = require('../public/js/components.js');

// var SoundPlayerComponents = require('react-soundplayer/components');
// var SoundPlayerAddons = require('react-soundplayer/addons');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('main/index', {album: config.album});
});

module.exports = router;