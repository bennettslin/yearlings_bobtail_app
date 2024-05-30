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
    OVERVIEW,
} from '../../../../src/constants/tips'

export default [
    null,
    {
        // Didi.
        type: ANNOTATION,
        description: `Some lyrics link to an annotation that explains the underlying meaning. Click the link to read it.`,
    },
    {
        // Willy the Cocoa
        type: LYRIC_EXPAND,
        description: `To expand the lyrics to full height on narrow screens, click the expand button. Or rotate your device to zoom in on the stage.`,
    },
    {
        // Dear Saskia
        type: DOTS,
        description: `Behind every annotation are colored "dots" that each represent a different theme. Select any dot in this panel to show all annotations for its theme.`,
    },
    {
        // Odin
        type: DOUBLESPEAKER,
        description: `In doublespeaker rhyme, lyrics in the left and right columns are sung together. On narrow screens, only one column is shown at a time. Click the ear button to alternate between them.`,
    },
    {
        // Pchelka's Starry Journey
        type: CAROUSEL,
        description: `On wide screens, click the carousel button to scroll through several annotations at once.`,
    },
    {
        // Ash Wednesday
        type: ACTIVATED_VERSE,
        description: `To have the audio jump to a line in the lyrics, click the line, then click the rewind or fast forward button that appears.`,
    },
    {
        // M
        type: ACCESS,
        description: `On wide screens, you can use the keyboard to navigate and select features. Type any key to show character icons and have tooltips show upon hover.`,
    },
    {
        // Good Night, Sita
        type: STANZA_TAB,
        description: `To have the audio jump to a stanza, click the stanza tab.`,
    },
    {
        // Grasshoppers Lie Heavy
        type: WORMHOLES,
        description: `A wormhole is a thematic connection between two songs. To jump through a wormhole, first turn on the "wormhole" category. Then select any annotation showing a wormhole icon, and click the wormhole button.`,
    },
    {
        // Constellations!
        type: WIKI,
        description: `Some annotations link to a Wikipedia page. First turn on the "reference" category to show all linked references.`,
    },
    {
        // Look Back in Anger
        type: SLIDER,
        description: `On wide screens, you can have the audio jump to a new line from the slider above the lyrics.`,
    },
    {
        // Garryowen
        type: SCORE,
        description: `On wide screens, click the score button to show the musical score.`,
    },
    {
        // On a Golden Cord
        type: FILMSTRIP,
        description: `Each frame in the filmstrip represents a different scene onstage. Clicking one will also have the audio jump to that scene.`,
    },
    {
        // Kyon?
        type: TIPS,
        description: `To prevent a new tip from showing at the start of each song, click the light bulb twice until it is no longer in the socket.`,
    },
    {
        // Uncanny Valley Boy
        type: AUTOSCROLL,
        description: `With auto scroll, the lyrics will scroll along with the audio. Manually scroll to turn it off, or click the scroll button to turn it on.`,
    },
    {
        // Cremated
        type: NAV,
        description: `On wide screens, you can show the navigation menu by clicking the carousel button twice. Then click any snowglobe to select that song.`,
    },
    {
        // Vegan Proclamation
        type: ABOUT,
        description: `To join our mailing list or visit our band website, click the Bobtail Yearlings button.`,
    },
    {
        // My 100,000th Dream
        type: OVERVIEW,
        description: `To prevent Bennett from speaking at the start of each song, click him twice until he is wearing headphones.`,
    },
    null,
]
