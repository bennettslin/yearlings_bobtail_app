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

    DOT_DESCRIPTIONS: {
        [NARRATIVE]: 'the story',
        [BACKSTORY]: 'backstory description',
        [OBSERVATION]: 'my two cents',
        [PUN]: 'Of both the "literary" and "bad" variety.',
        [REFERENCE]: 'wiki description',
        [SONGWRITING]: 'music description',
        [WORMHOLE]: 'wormhole description',
        [AFTERWORD]: 'after the album'
    },

}
