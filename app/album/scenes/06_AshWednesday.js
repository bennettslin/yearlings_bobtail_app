import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES
} from 'constants/scene'

import {
    BENNETT_COUCH_THOUGHT_KEY,
    COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SPRING,
    SEASON_THOUGHT
} from '../../scene/sky'

import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from '../../scene/actorKeys'

import {
    SMOKER
} from '../../scene/instanceKeys/amy'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from '../../scene/instanceKeys/bennett'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from '../../scene/instanceKeys/catherine'

import { CATHOLIC_GUY } from '../../scene/instanceKeys/wade'

import {
    BENNETT_COUCH_THOUGHT_BACKDROP,
    WEST_BERKELEY_BACKDROP,
    UC_BERKELEY_BACKDROP
} from '../../scene/backdropKeys'

import {
    RECYCLABLES,
    NIRVANA_POSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE,
    ARRANGEMENT_UC_BERKELEY_TREE_LEFT,
    ARRANGEMENT_UC_BERKELEY_TREE_RIGHT
} from '../../scene/cutoutKeys'

import {
    POLICE_ALBUM,
    BENNETT_RECORD_PLAYER,
    ARRANGEMENT_BENNETT_RECORD_PLAYER_COUCH,
    BENNETT_COUCH_LAMP,
    ASH_CAN
} from '../../scene/fixtureKeys'

import {
    ST_JOSEPHS_CHURCH,
    ST_JOSEPHS_ANNEX,
    CAMPANILE
} from '../../scene/flatKeys'

import {
    BENNETT_BLINDS
} from '../../scene/doorKeys'

import {
    BENNETT_CUSHIONS
} from '../../scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            [ACTORS]: {
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
            },
            [CUTOUTS]: {
                [RECYCLABLES]: true
            },
            [DOORS]: {
                [BENNETT_BLINDS]: true
            }
        },
        cubes: COURTYARD_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 3,
        description: `In Bennett's thoughts, he and Catherine are together on the couch. She is putting down the book she is reading, while he is playing the guitar, a pencil and notepad in hand, implying that he is writing a song, looking at her inquisitively.`,
        presences: {
            [ACTORS]: {
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
            },
            [BACKDROPS]: {
                [BENNETT_COUCH_THOUGHT_BACKDROP]: true
            },
            [CUTOUTS]: {
                [NIRVANA_POSTER]: true
            },
            [FIXTURES]: {
                [POLICE_ALBUM]: true,
                [BENNETT_RECORD_PLAYER]: ARRANGEMENT_BENNETT_RECORD_PLAYER_COUCH,
                [BENNETT_COUCH_LAMP]: true
            },
            [FURNITURES]: {
                [BENNETT_CUSHIONS]: true
            }
        },
        cubes: BENNETT_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 5,
        description: `Bennett is standing in the rain at night, staring at a Catholic church across the street.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing, back forward, hands in pocket',
                    instance: CATHOLIC_PENSIVE
                }
            },
            [BACKDROPS]: {
                [WEST_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [DISPENSER_LEFT]: true,
                [DISPENSER_RIGHT]: true,
                [BERKELEY_LAMPPOST]: true
            },
            [FLATS]: {
                [ST_JOSEPHS_ANNEX]: true,
                [ST_JOSEPHS_CHURCH]: true
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
            [ACTORS]: {
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
            },
            [BACKDROPS]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [UC_BERKELEY_TREE]: ARRANGEMENT_UC_BERKELEY_TREE_LEFT
            },
            [FIXTURES]: {
                [ASH_CAN]: true
            }
        },
        cubes: BANCROFT_LIBRARY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 8,
        description: `Bennett now has an ashed cross on his forehead, eyes closed and head held high, looking both pious and pompous. Catherine walks towards him from the other side of the stage.`,
        presences: {
            [ACTORS]: {
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
            },
            [BACKDROPS]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BANCROFT_SHRUBS]: true,
                [SIGNPOST]: true,
                [UC_BERKELEY_TREE]: ARRANGEMENT_UC_BERKELEY_TREE_RIGHT
            },
            [FLATS]: {
                [CAMPANILE]: true
            }
        },
        cubes: CAMPANILE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
