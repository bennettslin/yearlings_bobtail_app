module.exports = {
    title: 'Yearling\'s Bobtail',
    overviews: {
        narrative: 'five things that changed my life',
        music: 'personal yb'
    },
    pageStartingIndices: [0, 9],
    songs: [
        require('./01-didi.js'),
        require('./02-willy-the-cocoa.js'),
        require('./03-dear-saskia.js'),
        require('./04-odin.js'),
        require('./05-pchelkas-starry-journey.js'),
        require('./06-ash-wednesday.js'),
        require('./07-m.js'),
        require('./08-good-night-sita.js'),
        require('./09-grasshoppers-lie-heavy.js'),
        require('./10-constellations.js'),
        require('./11-look-back-in-anger.js'),
        require('./12-garryowen.js'),
        require('./13-on-a-golden-cord.js'),
        require('./14-kyon.js'),
        require('./15-uncanny-valley-boy.js'),
        require('./16-cremated.js'),
        require('./17-vegan-proclamation.js'),
        require('./18-my-100000th-dream.js')
    ],
    tasks: [
        {
            taskName: 'write album overviews',
            workedHours: 0,
            neededHours: 6
        },
        {
            taskName: 'make interactable superclass',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'make selectable dots block',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'keep doublespeaker verses parallel, allow for slightly centred.',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'create dot popups',
            workedHours: 0,
            neededHours: 2,
            subtasks: [
                {
                    taskName: 'make popup a general utility',
                    workedHours: 2,
                    neededHours: 2
                }
            ]
        },
        {
            taskName: 'allow for Wikipedia links',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'allow for non-lyric annotation links',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'refactor to get album objects',
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: 'annotation header formatting',
            workedHours: 1,
            neededHours: 1,
            subtasks: [
                {
                    taskName: 'Add proper noun flags.',
                    workedHours: 1,
                    neededHours: 1
                }
            ]
        },
        {
            taskName: 'create portals',
            workedHours: 6,
            neededHours: 6
        },
        {
            taskName: 'non breaking space in lyrics only',
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: 'take care of em-dashes',
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: 'separate out dot categories',
            workedHours: 8,
            neededHours: 8
        }
    ]
};