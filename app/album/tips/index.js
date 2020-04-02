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
        done: true,
        description: `Click an annotated lyric to read the meaning behind it.`
    },
    {
        // Willy the Cocoa
        type: LYRIC_EXPAND,
        tempPosition: 'lyric expand toggle',
        mobileOnly: true,
        done: true,
        description: `In mobile, click the lyric expand button to expand the lyrics. You can also flip horizontal to zoom in on the stage.`
    },
    {
        // Dear Saskia
        type: DOTS,
        tempPosition: 'dots slide toggle',
        done: true,
        description: `Each annotation falls under one or more categories. Click a category button to show or hide all annotations for a given category.`
    },
    {
        // Odin
        type: DOUBLESPEAKER,
        tempPosition: 'ear toggle',
        done: true,
        description: `In doublespeaker rhyme, lyrics in the left and right columns are sung together. On narrow screens, only one column is shown at a time. Click the ear button to alternate between them.`
    },
    {
        // Pchelka's Starry Journey
        type: CAROUSEL,
        tempPosition: 'carousel toggle',
        desktopOnly: true,
        done: true,
        description: `On desktop, click the carousel button to open the carousel and scroll through all the annotations at once.`
    },
    {
        // Ash Wednesday
        type: ACTIVATED_VERSE,
        tempPosition: 'any activated verse',
        description: `Click any line in the lyrics, then click rewind or fast forward, to have the audio player jump to that line.`
    },
    {
        // M
        type: ACCESS,
        desktopOnly: true,
        done: true,
        description: `On desktop, use the keyboard to navigate and select features. Type any key to show character icons and have tooltips show upon hover.`
    },
    {
        // Good Night, Sita
        type: STANZA_TAB,
        tempPosition: 'any stanza tab',
        description: `Click any stanza tab to have the audio player jump to that stanza.`
    },
    {
        // Grasshoppers Lie Heavy
        type: WORMHOLES,
        tempPosition: 'first wormhole',
        description: `A wormhole is a thematic connection between two songs. Click a wormhole button to jump to the corresponding line in the other song.`
    },
    {
        // Constellations!
        type: WIKI,
        tempPosition: 'any wiki annotation',
        description: `Click a linked reference within an annotation to read the Wikipedia entry.`
    },
    {
        // Look Back in Anger
        type: SLIDER,
        tempPosition: 'slider',
        desktopOnly: true,
        done: true,
        description: `On desktop, you can have the audio player jump to a new line by selecting it from the slider above the lyrics.`
    },
    {
        // Garryowen
        type: SCORE,
        tempPosition: 'score toggle',
        desktopOnly: true,
        done: true,
        description: `On desktop, click the score button to see the musical score.`
    },
    {
        // On a Golden Cord
        type: FILMSTRIP,
        tempPosition: 'filmstrip',
        done: true,
        description: `Click any frame in the filmstrip to show its corresponding scene onstage. The audio player will also jump to that scene.`
    },
    {
        // Kyon?
        type: TIPS,
        tempPosition: 'tips toggle',
        done: true,
        description: `To prevent tips from showing at the start of each new song, click the light bulb until it is removed from its socket.`
    },
    {
        // Uncanny Valley Boy
        type: AUTOSCROLL,
        tempPosition: 'auto scroll',
        done: true,
        description: `The lyrics will auto scroll with the audio player, but any manual scrolling will turn it off. Click the scroll button to turn auto scroll back on.`
    },
    {
        // Cremated
        type: NAV,
        tempPosition: 'nav',
        desktopOnly: true,
        done: true,
        description: `On desktop with the carousel open, click the nav button to show the nav bar. Then click any snowglobe button to have the audio player jump to its corresponding song.`
    },
    {
        // Vegan Proclamation
        type: ABOUT,
        done: true,
        description: `Click the Bobtail Yearlings button to join our mailing list, or to visit our band website and social media pages.`
    },
    {
        // My 100,000th Dream
        type: OVERVIEW,
        tempPosition: 'overview',
        done: true,
        description: `To prevent the narrative overview from showing at the start of each new song, click the Bennett button until he is wearing headphones.`
    }
]
