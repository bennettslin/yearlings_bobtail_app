import {
    ANNOTATION,
    LYRIC_EXPAND,
    DOTS,
    DOUBLESPEAKER,
    CAROUSEL,
    ACTIVATED_VERSE,
    ACCESS,
    AUDIO_OPTIONS,
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
        // Didi
        tip: ANNOTATION,
        description: `Click an annotated lyric to read the meaning behind it.`
    },
    {
        // Willy the Cocoa
        tip: LYRIC_EXPAND,
        description: `In mobile, click to expand the lyrics. You can also flip horizontal to zoom in on the stage.`
    },
    {
        // Dear Saskia
        tip: DOTS,
        description: `Each annotation falls under one or more categories. Click to show or hide all annotations for a given category.`
    },
    {
        // Odin
        tip: DOUBLESPEAKER,
        description: `In doublespeaker rhyme, lyrics in the left and right columns are sung simultaneously. On narrow screens, only one column is shown at a time. Click to alternate between them.`
    },
    {
        // Pchelka's Starry Journey
        tip: CAROUSEL,
        description: `On desktop, click to open the carousel and scroll through all the annotations at once.`
    },
    {
        // Ash Wednesday
        tip: ACTIVATED_VERSE,
        description: `Click any line in the lyrics, then click rewind or fast forward, to have the audio player jump to that line.`
    },
    {
        // M
        tip: ACCESS,
        description: `On desktop, use the keyboard to navigate and select features. Type any key to show character icons and have tooltips show upon hover.`
    },
    {
        // Good Night, Sita
        tip: AUDIO_OPTIONS,
        description: `Click any stanza tab to have the audio player jump to that stanza.`
    },
    {
        // Grasshoppers Lie Heavy
        tip: WORMHOLES,
        description: `A wormhole is a thematic connection between two songs. Click to jump to the corresponding line in the other song.`
    },
    {
        // Constellations!
        tip: WIKI,
        description: `Click a linked reference within an annotation to read the Wikipedia entry.`
    },
    {
        // Look Back in Anger
        tip: SLIDER,
        description: `On desktop, you can have the audio player jump to a new line by selecting it from the slider above the lyrics.`
    },
    {
        // Garryowen
        tip: SCORE,
        description: `On desktop, click to see the musical score.`
    },
    {
        // On a Golden Cord
        tip: FILMSTRIP,
        description: `Click any frame in the filmstrip to show its corresponding scene onstage. The audio player will also jump to that scene.`
    },
    {
        // Kyon?
        tip: TIPS,
        description: `To prevent tips from showing at the start of each new song, click the lit bulb. If it is off but not disabled, first click to turn it on.`
    },
    {
        // Uncanny Valley Boy
        tip: AUTOSCROLL,
        description: `The lyrics will auto scroll with the audio player, but any manual scrolling will turn it off. Click to turn auto scroll back on.`
    },
    {
        // Cremated
        tip: NAV,
        description: `On desktop with the carousel open, click to show the nav bar. Then click any snowglobe to have the audio player jump to its corresponding song.`
    },
    {
        // Vegan Proclamation
        tip: ABOUT,
        description: `Click to join our mailing list, visit our band website and social media pages, or contact us with interesting offers and opportunities.`
    },
    {
        // My 100,000th Dream
        tip: OVERVIEW,
        description: `To prevent the narrative overview from showing at the start of each new song, click Bennett while he's talking. If he is silent with eyes open, first click to have him talk.`
    }
]
