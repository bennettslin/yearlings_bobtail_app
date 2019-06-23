import {
    ACTOR,
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'

import {
    BENNETT_COUCH_THOUGHT_KEY,
    COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    BERKELEY_BANCROFT_KEY,
    BERKELEY_CAMPANILE_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_SPRING,
    SEASON_THOUGHT
} from '../../scene/sky/keys'

import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from '../../scene/actors/keys'

import {
    SMOKER
} from '../../scene/actors/keys/instances/amy'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from '../../scene/actors/keys/instances/bennett'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from '../../scene/actors/keys/instances/catherine'

import { CATHOLIC_GUY } from '../../scene/actors/keys/instances/wade'

import {
    BENNETT_COUCH_THOUGHT_BACKDROP,
    WEST_BERKELEY_BACKDROP,
    UC_BERKELEY_BACKDROP
} from '../../scene/things/keys/backdrops'

import {
    POLICE_ALBUM,
    NIRVANA_POSTER
} from '../../scene/things/keys/cardboards'

import {
    RECYCLABLES,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT
} from '../../scene/things/keys/cutouts'

import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    ASH_CAN
} from '../../scene/things/keys/fixtures'

import {
    ST_JOSEPHS_CHURCH,
    ST_JOSEPHS_ANNEX,
    CAMPANILE
} from '../../scene/things/keys/flats'

import {
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST
} from '../../scene/things/keys/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'standing forward, disappointed, defeated',
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'walking away, in a bad mood',
                    instance: WEEPING
                }
            },
            [CUTOUT]: {
                [RECYCLABLES]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'sitting slouched, showing lyrics to Catherine',
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'sitting upright, droll smile',
                    instance: QUIPPING
                }
            },
            [BACKDROP]: {
                [BENNETT_COUCH_THOUGHT_BACKDROP]: true
            },
            [CARDBOARD]: {
                [POLICE_ALBUM]: true,
                [NIRVANA_POSTER]: true
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true
            },
            [PANEL]: {
                [BENNETT_COUCH]: true,
                [BENNETT_LEFT_ARMREST]: true,
                [BENNETT_RIGHT_ARMREST]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'standing, back forward, hands in pocket',
                    instance: CATHOLIC_PENSIVE
                }
            },
            [BACKDROP]: {
                [WEST_BERKELEY_BACKDROP]: true
            },
            [CUTOUT]: {
                [BERKELEY_LAMPPOST]: true
            },
            [FLAT]: {
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, noticing Catholic',
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'side angle, walking, looking pious',
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'walking up stairs, back forward, exhaling smoke',
                        instance: SMOKER
                    }
                }
            },
            [BACKDROP]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUT]: {
                [UC_BERKELEY_TREE_LEFT]: true
            },
            [FIXTURE]: {
                [ASH_CAN]: true
            }
        },
        cubes: BERKELEY_BANCROFT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    },
    {
        unitIndex: 8,
        description: `Bennett now has an ashed cross on his forehead, eyes closed and head held high, looking both pious and pompous. Catherine walks towards him from the other side of the stage.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, walking, looking pious',
                    instance: PIOUS
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'walking forward, confused and curious at Bennett',
                    instance: PUZZLED
                }
            },
            [BACKDROP]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUT]: {
                [BANCROFT_SHRUBS]: true,
                [SIGNPOST]: true,
                [UC_BERKELEY_TREE_RIGHT]: true
            },
            [FLAT]: {
                [CAMPANILE]: true
            }
        },
        cubes: BERKELEY_CAMPANILE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SPRING
        }
    }
]
