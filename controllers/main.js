var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    var config = {
        title: 'Yearling\'s Bobtail',
        personal: 'personal yb',
        pageStartingIndices: [0, 9],
        songs: [
            {
                title: 'Didi',
                narrative: 'narrative1',
                personal: 'personal1',
                lyrics: [
                    'lyrics column a1'
                ]
            },
            {
                title: 'Willy the Cocoa',
                narrative: 'narrative2',
                personal: 'personal2',
                lyrics: [
                    'lyrics column a2'
                ]
            },
            {
                title: 'Dear Saskia',
                narrative: 'narrative3',
                personal: 'personal3',
                lyrics: [
                    'lyrics column a3'
                ]
            },
            {
                title: 'Odin',
                narrative: 'narrative4',
                personal: 'personal4',
                lyrics: [
                    'lyrics column a4',
                    'lyrics column b4'
                ]
            },
            {
                title: 'Ash Wednesday',
                narrative: 'narrative5',
                personal: 'personal5',
                lyrics: [
                    'lyrics column a5'
                ]
            },
            {
                title: 'Pchelka\'s Starry Journey',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'M',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Good Night, Sita',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Grasshoppers Lie Heavy',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Constellations!',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Look Back in Anger',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Garryowen',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'On a Golden Cord',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a',
                    'lyrics column b'
                ]
            },
            {
                title: 'Kyon?',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Uncanny Valley',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'Cremated',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a',
                    'lyrics column b'
                ]
            },
            {
                title: 'Vegan Proclamation',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            },
            {
                title: 'My 100,000th Dream',
                narrative: 'narrative',
                personal: 'personal',
                lyrics: [
                    'lyrics column a'
                ]
            }
        ]
    };

    res.render('main/index', {config: config});
});

module.exports = router;