import {
    BENNETT_APARTMENT_COUCH_THOUGHT_KEY,
    BENNETT_APARTMENT_COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    SPROUL_PLAZA_KEY,
    BERKELEY_WALKWAY_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING
} from 'scene/sky'

import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from 'scene/actorKeys'

import {
    SMOKER
} from 'scene/instanceKeys/amy'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS,
} from 'scene/instanceKeys/bennett'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'scene/instanceKeys/catherine'

import { CATHOLIC_GUY } from 'scene/instanceKeys/wade'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing forward, disappointed, defeated',
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking away, in a bad mood',
                    instance: WEEPING
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
                    description: 'sitting slouched, showing lyrics to Catherine',
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting upright, droll smile',
                    instance: QUIPPING
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
                    description: 'standing, back forward, hands in pocket',
                    instance: CATHOLIC_PENSIVE
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
                    description: 'side angle, noticing Catholic',
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, walking, looking pious',
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        todo: true,
                        workedHours: 3,
                        description: 'walking up stairs, back forward, exhaling smoke',
                        instance: SMOKER
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
                    description: 'side, walking, looking pious',
                    instance: PIOUS
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking forward, confused and curious at Bennett',
                    instance: PUZZLED
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
