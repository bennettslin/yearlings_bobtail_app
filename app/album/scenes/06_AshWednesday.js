import {
    BENNETT_APARTMENT_COUCH_THOUGHT_KEY,
    BENNETT_APARTMENT_COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    SPROUL_PLAZA_KEY,
    BERKELEY_WALKWAY_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING
} from 'constants/sky'

import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing forward, disappointed, defeated'
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking away, in a bad mood'
                }
            }
        },
        cubes: BENNETT_APARTMENT_COURTYARD_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `In Bennett's thoughts, he and Catherine are together on the couch. She is putting down the book she is reading, while he is playing the guitar, a pencil and notepad in hand, implying that he is writing a song, looking at her inquisitively.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting slouched, showing lyrics to Catherine'
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting upright, droll smile'
                }
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 5,
        description: `Bennett is standing in the rain at night, staring at a Catholic church across the street.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing, back forward, hands in pocket'
                }
            }
        },
        cubes: CATHOLIC_CHURCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 7,
        description: `Bennett is staring at an outdoor ashtray. Someone with a cross on their forehead is walking behind him in the other direction, while someone who has just put out a cigarette in the ashtray is walking in front of him, exhaling the smoke. Bennett looks back at the person behind him.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, noticing Catholic'
                },
                [WADE]: {
                    catholic: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, walking, looking pious'
                    }
                },
                [AMY]: {
                    smoker: {
                        todo: true,
                        workedHours: 3,
                        description: 'walking up stairs, back forward, exhaling smoke'
                    }
                }
            }
        },
        cubes: SPROUL_PLAZA_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 8,
        description: `Bennett now has an ashed cross on his forehead, eyes closed and head held high, looking both pious and pompous. Catherine walks towards him from the other side of the stage.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, looking pious'
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking forward, confused and curious at Bennett'
                }
            }
        },
        cubes: BERKELEY_WALKWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
