const AFTERWORD = 'afterword',
      BACKSTORY = 'backstory',
      NARRATIVE = 'narrative',
      OBSERVATION = 'observation',
      WORMHOLE = 'wormhole',
      PUN = 'pun',
      REFERENCE = 'reference',
      SONGWRITING = 'songwriting'

module.exports = {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    WORMHOLE,
    PUN,
    REFERENCE,
    SONGWRITING,

    // Order matters!
    ALL_DOT_KEYS: [
        NARRATIVE,
        BACKSTORY,
        OBSERVATION,
        PUN,
        REFERENCE,
        SONGWRITING,
        WORMHOLE,
        AFTERWORD
    ],

    // STYLE_LOGIC_DOT_LETTERS: [
    //     NARRATIVE[0],
    //     BACKSTORY[0],
    //     OBSERVATION[0],
    //     PUN[0],
    //     REFERENCE[0],
    //     SONGWRITING[0],
    //     WORMHOLE[0],
    //     AFTERWORD[0]
    // ],

    DOT_DESCRIPTIONS: {
        [NARRATIVE]: 'the story',
        [BACKSTORY]: 'backstory description',
        [OBSERVATION]: 'my two cents',
        [PUN]: 'Of both the "literary" and "bad" variety.',
        [REFERENCE]: 'wiki description',
        [SONGWRITING]: 'music description',
        [WORMHOLE]: 'wormhole description',
        [AFTERWORD]: 'after the album'
    }

}
