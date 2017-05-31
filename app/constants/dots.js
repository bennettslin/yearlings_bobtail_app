const AFTERWORD = 'afterword',
      BACKSTORY = 'backstory',
      NARRATIVE = 'narrative',
      OBSERVATION = 'observation',
      PORTAL = 'portal',
      PUN = 'pun',
      REFERENCE = 'reference',
      SONGWRITING = 'songwriting'

module.exports = {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PORTAL,
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
        PORTAL,
        AFTERWORD
    ],

    DOT_DESCRIPTIONS: {
        [NARRATIVE]: 'the story',
        [BACKSTORY]: 'backstory description',
        [OBSERVATION]: 'my two cents',
        [PUN]: 'Of both the "literary" and "bad" variety.',
        [REFERENCE]: 'wiki description',
        [SONGWRITING]: 'music description',
        [PORTAL]: 'portal description',
        [AFTERWORD]: 'after the album'
    },

}
