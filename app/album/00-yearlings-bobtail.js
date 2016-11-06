module.exports = {
    title: `Yearling's Bobtail`,
    // Hi, I'm Bennett. end of my relationship,
    // Narrowed down to five things that changed my life.
    // Spent the next five years
    // Ulysses of rock albums.
    // Wrote and recorded all the parts myself.
    // Released in 2006.
    overview: 'placeholder text',
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
            taskName: `store wiki index instead of url`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `method to log portals and wikis`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `focus sections, and have them route events to app`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `have class to show visual keyboard keys`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `handle resetting accessed indices`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `scroll played verse into view`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `make played verse accessible`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `bug where you click on verse, then key away`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `lyrics, not app, should care about hovered line`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `refactor app handlers`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `colour verse based on odd or even`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `write album overviews`,
            workedHours: 0,
            neededHours: 6
        },
        {
            taskName: `figure out best way to do portals`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `make radio buttons float`,
            workedHours: 0,
            neededHours: 2
        },
        {
            taskName: `make interactable superclass`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `create dot tooltips`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `"problem with indie" in footer`,
            workedHours: 0,
            neededHours: 8
        },
        {
            taskName: `progressive tooltips`,
            workedHours: 0,
            neededHours: 8
        },
        // {
        //     taskName: `Safari...`,
        //     workedHours: 0,
        //     neededHours: 2
        // },
        // {
        //     taskName: `delay in annotation popup after scroll and then link clicked? only in firefox, it seems`,
        //     workedHours: 0,
        //     neededHours: 1
        // },
        // {
        //     taskName: `refactor to use dot index rather than key`,
        //     workedHours: 0,
        //     neededHours: 2
        // },
        // {
        //     taskName: `show notated scores`,
        //     workedHours: 0,
        //     neededHours: 3
        // },
        // {
        //     taskName: `change every "one" to "you"`,
        //     workedHours: 0,
        //     neededHours: 1
        // },
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
        },
        {
            taskName: `allow for side stanza`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `replace em dash with \u2011, change format helper`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `allow for music link in lyrics`,
            workedHours: 4,
            neededHours: 4
        },
        {
            taskName: `allow for title to have annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `make selectable dots block`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `allow multiple dots`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `fix wiki url not showing in annotation`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `allow for call and response lyrics`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `improve custom stanza layouts`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `add song sections to stanzas, stylise`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `hide annotation when dots inactive`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `disable active annotations`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `add time to components`,
            workedHours: 8,
            neededHours: 8
        },
        {
            taskName: `dismiss popup by clicking on body`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `songs need end times`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `make popup a general utility`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `store line index for hoverable play button`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `hoverable play button on verse`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `add song sections to lyrics`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `use correct state descriptors`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `foldable lyrics section`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `https://www.npmjs.com/package/babel-preset-stage-2`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `correct stanzas too wide in narrow lyrics`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `line width resizing is buggy in doublespeaker songs.`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `call line width resizing method at appropriate times`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `no space before italic in anchor (Bobtail's sake and Bildungsroman)`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `don't allow lyric play button to be hoverable`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `make annotations keyboard accessible`,
            workedHours: 5,
            neededHours: 5
        },
        {
            taskName: `pass accessible class to dot stanzas`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `wiki in italic not recognised`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `use scroll into view if needed npm package`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `foreign characters in portal increase line height`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `allow wikis in urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `scroll lyrics to top upon song change, regardless of access outline`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `add spinner to wiki section`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `store wiki url in session`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `dev mechanism to play line`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `method to log selected verse`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `have accessed sections`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `access song index`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `accessed sections skip lyrics if no selected song`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `fix current mess with accessed song indices`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `reset dom width of lines upon changing from left to right`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `add audio section`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `make dots section accessible`,
            workedHours: 1,
            neededHours: 2
        },
        {
            taskName: `change overviews`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `selected line will change selected time`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `selected time will change selected line`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `switch from time logic to verse index in verse`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `add wiki index`,
            workedHours: 2,
            neededHours: 2
        }
    ]
}
