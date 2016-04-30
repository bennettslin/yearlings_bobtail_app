module.exports = {
    title: 'Yearling\'s Bobtail',
    speechBubbles: {
        narrative: 'five things that changed my life',
        music: 'personal yb'
    },
    legendSymbols: [
        {
            icon: 'personal',
            name: '',
            description: 'description 1'
        },
        {
            icon: 'puns',
            name: '',
            description: 'description 2'
        },
        {
            icon: 'references',
            name: '',
            description: 'description 3'
        }
    ],
    pageStartingIndices: [0, 9],
    songs: [
        require('./01-didi.js'),
        require('./02-willy-the-cocoa.js'),
        require('./03-dear-saskia.js'),
        require('./04-odin.js'),
        require('./05-ash-wednesday.js'),
        require('./06-pchelkas-starry-journey.js'),
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
            taskName: 'speech bubbles',
            workedHours: 0,
            neededHours: 6
        },
        {
            taskName: 'annotation header formatting',
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: 'create code popups',
            workedHours: 0,
            neededHours: 2,
            subtasks: [
                {
                    taskName: 'make popup a general utility',
                    workedHours: 0,
                    neededHours: 2
                }
            ]
        },
        {
            taskName: 'setup unit and automation tests',
            workedHours: 0,
            neededHours: 15
        }
    ]
};