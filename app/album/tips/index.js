import {
    ANNOTATION,
    LYRIC_EXPAND,
    DOTS,
    DOUBLESPEAKER,
    CAROUSEL,
    ACTIVATED_VERSE,
    ACCESS,
    STANZA_TAB,
    WORMHOLES,
    WIKI,
    SLIDER,
    SCORE,
    FILMSTRIP,
    TIPS,
    AUTOSCROLL,
    NAV,
    ABOUT,
    OVERVIEW
} from '../../constants/tips'

export default [
    {
        // Didi.
        type: ANNOTATION,
        todo: true,
        description: `Click an annotated lyric to read the meaning behind it.`
    },
    {
        // Willy the Cocoa
        type: LYRIC_EXPAND,
        description: `On narrow screens, click the lyric expand button to expand the lyrics. You can also flip horizontal to zoom in on the stage.`
    },
    {
        // Dear Saskia
        type: DOTS,
        description: `Each annotation falls under one or more categories. Click a category button to show or hide all annotations for that category.`
    },
    {
        // Odin
        type: DOUBLESPEAKER,
        description: `In doublespeaker rhyme, lyrics in the left and right columns are sung together. On narrow screens, only one column is shown at a time. Click the ear button to alternate between them.`
    },
    {
        // Pchelka's Starry Journey
        type: CAROUSEL,
        description: `On wide screens, click the carousel button to open the carousel and scroll through all the annotations at once.`
    },
    {
        // Ash Wednesday
        type: ACTIVATED_VERSE,
        todo: true,
        description: `Click any line in the lyrics, then click rewind or fast forward, to have the audio player jump to that line.`
    },
    {
        // M
        type: ACCESS,
        description: `On wide screens, use the keyboard to navigate and select features. Type any key to show character icons and have tooltips show upon hover.`
    },
    {
        // Good Night, Sita
        type: STANZA_TAB,
        todo: true,
        description: `Click any stanza tab to have the audio player jump to that stanza.`
    },
    {
        // Grasshoppers Lie Heavy
        type: WORMHOLES,
        todo: true,
        description: `A wormhole is a thematic connection between two songs. First turn on the "wormhole" category. Then click the wormhole button in any annotation that has one. The audio player will jump to the corresponding line in the other song.`
    },
    {
        // Constellations!
        type: WIKI,
        todo: true,
        description: `Some annotations link to a Wikipedia page. Turn on the "reference" category to show all linked references.`
    },
    {
        // Look Back in Anger
        type: SLIDER,
        description: `On wide screens, you can select a new line from the slider above the lyrics. The audio player will jump to that line.`
    },
    {
        // Garryowen
        type: SCORE,
        description: `On wide screens, click the score button to see the musical score.`
    },
    {
        // On a Golden Cord
        type: FILMSTRIP,
        todo: true,
        description: `Click any frame in the filmstrip to show that scene onstage. The audio player will also jump to that scene.`
    },
    {
        // Kyon?
        type: TIPS,
        description: `To prevent tips from showing at the start of each new song, click the light bulb until it is removed from its socket.`
    },
    {
        // Uncanny Valley Boy
        type: AUTOSCROLL,
        description: `With auto scroll, the lyrics will scroll along with the audio player. Manually scroll to turn it off. Then click the scroll button to turn it back on.`
    },
    {
        // Cremated
        type: NAV,
        description: `On wide screens with the carousel open, click the nav button to show the nav bar. Then click any snowglobe button to have the audio player jump to that song.`
    },
    {
        // Vegan Proclamation
        type: ABOUT,
        description: `Click the Bobtail Yearlings button to join our mailing list or visit our band website and social media pages.`
    },
    {
        // My 100,000th Dream
        type: OVERVIEW,
        description: `To prevent the narrative overview from showing at the start of each new song, click the Bennett button until he is wearing headphones.`
    }
]
