module.exports = {
    title: `Yearling's Bobtail`,
    overviews: {
        narrative: `five things that changed my life`,
        music: `personal yb`
    },
    pageStartingIndices: [0, 9],
    songs: [
        require('./01-didi'),
        require('./02-willy-the-cocoa'),
        require('./03-dear-saskia'),
        require('./04-odin'),
        require('./05-pchelkas-starry-journey'),
        require('./06-ash-wednesday'),
        require('./07-m'),
        require('./08-good-night-sita'),
        require('./09-grasshoppers-lie-heavy'),
        require('./10-constellations'),
        require('./11-look-back-in-anger'),
        require('./12-garryowen'),
        require('./13-on-a-golden-cord'),
        require('./14-kyon'),
        require('./15-uncanny-valley-boy'),
        require('./16-cremated'),
        require('./17-vegan-proclamation'),
        require('./18-my-100000th-dream')
    ],
    tasks: [
        {
            taskName: `create a side stanza object`,
            workedHours: 0,
            neededHours: 8
        },
        {
            taskName: `allow for music link in lyrics`,
            workedHours: 0,
            neededHours: 8
        },
        {
            taskName: `replace em dash with \u2011, change format helper`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `add propTypes`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `change every "one" to "you"`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `change reduce to for/of to allow breaks`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `write album overviews`,
            workedHours: 0,
            neededHours: 6
        },
        {
            taskName: `make interactable superclass`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `make selectable dots block`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `allow multiple dots`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `create dot popups`,
            workedHours: 0,
            neededHours: 2,
            subtasks: [
                {
                    taskName: `make popup a general utility`,
                    workedHours: 2,
                    neededHours: 2
                }
            ]
        },
        {
            taskName: `refactor to get album objects`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `annotation header formatting`,
            workedHours: 1,
            neededHours: 1,
            subtasks: [
                {
                    taskName: `Add proper noun flags.`,
                    workedHours: 1,
                    neededHours: 1
                }
            ]
        },
        {
            taskName: `create portals`,
            workedHours: 6,
            neededHours: 6
        },
        {
            taskName: `non breaking space in lyrics only`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `take care of em-dashes`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `separate out dot categories`,
            workedHours: 8,
            neededHours: 8
        },
        {
            taskName: `keep doublespeaker verses parallel`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `allow for Wikipedia links`,
            workedHours: 3,
            neededHours: 3
        }
    ]
}
