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
} from '../../constants/scene/scenes'

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
} from '../../constants/scene/actors'

import { SMOKER } from '../../constants/scene/actors/instances/amy'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from '../../constants/scene/actors/instances/bennett'

import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from '../../constants/scene/actors/instances/catherine'

import { CATHOLIC_GUY } from '../../constants/scene/actors/instances/wade'

import {
    BENNETT_COUCH_THOUGHT_BACKDROP,
    FOLIAGE_BACKDROP,
    UC_BERKELEY_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    POLICE_ALBUM,
    NIRVANA_POSTER
} from '../../constants/scene/things/cardboards'

import {
    RECYCLABLES,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE__LEFT,
    UC_BERKELEY_TREE__RIGHT
} from '../../constants/scene/things/cutouts'

import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    ASH_CAN
} from '../../constants/scene/things/fixtures'

import {
    ST_JOSEPHS_CHURCH,
    ST_JOSEPHS_ANNEX,
    CAMPANILE
} from '../../constants/scene/things/flats'

import {
    WIDE_COUCH__BENNETT,
    WIDE_LEFT_ARMREST__BENNETT,
    WIDE_RIGHT_ARMREST__BENNETT
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'standing forward, disappointed, defeated',
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
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
                    description: 'sitting slouched, showing lyrics to Catherine',
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
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
                [WIDE_COUCH__BENNETT]: true,
                [WIDE_LEFT_ARMREST__BENNETT]: true,
                [WIDE_RIGHT_ARMREST__BENNETT]: true
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
                    description: 'standing, back forward, hands in pocket',
                    instance: CATHOLIC_PENSIVE
                }
            },
            [BACKDROP]: {
                [FOLIAGE_BACKDROP]: true
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
                    description: 'side angle, noticing Catholic',
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        description: 'side angle, walking, looking pious',
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        description: 'walking up stairs, back forward, exhaling smoke',
                        instance: SMOKER
                    }
                }
            },
            [BACKDROP]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUT]: {
                [UC_BERKELEY_TREE__LEFT]: true
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
                    description: 'side, walking, looking pious',
                    instance: PIOUS
                },
                [CATHERINE]: {
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
                [UC_BERKELEY_TREE__RIGHT]: true
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
