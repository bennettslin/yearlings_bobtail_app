import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL
} from '../../../../app/constants/scene/things'
import {
    BENNETT_COUCH_THOUGHT_KEY,
    COURTYARD_KEY,
    CATHOLIC_CHURCH_KEY,
    BERKELEY_BANCROFT_KEY,
    BERKELEY_CAMPANILE_KEY
} from '../../../../app/constants/scene/scenes'
import {
    TIME_MORNING,
    TIME_EVENING,
    TIME_NIGHT,
    SEASON_SPRING,
    SEASON_THOUGHT
} from '../../../../app/constants/scene/sky'
import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from '../../../../app/constants/scene/actors'
import { SMOKER } from '../../../../app/constants/scene/actors/amy'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from '../../../../app/constants/scene/actors/bennett'
import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from '../../../../app/constants/scene/actors/catherine'
import { CATHOLIC_GUY } from '../../../../app/constants/scene/actors/wade'
import {
    NEAR_BUILDINGS,
    DISTANT_BUILDINGS_BACKDROP,
    DISTANT_HOUSES_BACKDROP,
    OAKLAND_SIDE
} from '../../../../app/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
    THOUGHT_LARGE__RIGHT
} from '../../../../app/constants/scene/things/bubbles'
import {
    POLICE_ALBUM,
    NIRVANA_POSTER
} from '../../../../app/constants/scene/things/cardboards'
import {
    RECYCLABLES__BENNETT,
    BUSH_SINGLE__COURTYARD,
    BUSH_DOUBLE__COURTYARD,
    LAMPPOST__CHURCH,
    SIGNPOST,
    BANCROFT_SHRUB,
    ASH_CAN,
    CAMPUS_TREE_SINGLE__BANCROFT,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    CAMPUS_TREE_DOUBLE__CAMPANILE
} from '../../../../app/constants/scene/things/cutouts'
import {
    BLINDS_OUTSIDE__BENNETT,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
    BANCROFT_DOOR
} from '../../../../app/constants/scene/things/doors'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    ELECTRIC_GUITAR
} from '../../../../app/constants/scene/things/fixtures'
import {
    ST_JOSEPHS_CHURCH,
    ST_JOSEPHS_ANNEX,
    CAMPANILE,
    BERKELEY_BUILDING_TALL,
    BERKELEY_BUILDING_WIDE__BANCROFT,
    BERKELEY_BUILDING_WIDE__CAMPANILE
} from '../../../../app/constants/scene/things/flats'
import {
    WIDE_COUCH_BENNETT,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT
} from '../../../../app/constants/scene/things/panels'

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
            [BACKDROP]: {
                [OAKLAND_SIDE]: true,
                [NEAR_BUILDINGS]: true
            },
            [CUTOUT]: {
                [RECYCLABLES__BENNETT]: true,
                [BUSH_SINGLE__COURTYARD]: true,
                [BUSH_DOUBLE__COURTYARD]: true
            },
            [DOOR]: {
                [BLINDS_OUTSIDE__BENNETT]: true,
                [BENNETT_DOOR_OUTSIDE]: true,
                [BENNETT_GATE_SIDE]: true
            }
        },
        cubes: COURTYARD_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SPRING }
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
            [BUBBLE]: {
                [BUBBLE_SMALL__RIGHT]: true,
                [BUBBLE_MEDIUM__RIGHT]: true,
                [BUBBLE_LARGE__RIGHT]: true,
                [THOUGHT_LARGE__RIGHT]: true
            },
            [CARDBOARD]: {
                [POLICE_ALBUM]: true,
                [NIRVANA_POSTER]: true
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [ELECTRIC_GUITAR]: true
            },
            [PANEL]: {
                [WIDE_COUCH_BENNETT]: true,
                [WIDE_ARMREST_BENNETT__LEFT]: true,
                [WIDE_ARMREST_BENNETT__RIGHT]: true
            }
        },
        cubes: BENNETT_COUCH_THOUGHT_KEY,
        sky: { season: SEASON_THOUGHT }
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
                [DISTANT_HOUSES_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [CUTOUT]: {
                [LAMPPOST__CHURCH]: true
            },
            [FLAT]: {
                [ST_JOSEPHS_ANNEX]: true,
                [ST_JOSEPHS_CHURCH]: true
            }
        },
        cubes: CATHOLIC_CHURCH_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SPRING }
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
                [DISTANT_BUILDINGS_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [CUTOUT]: {
                [ASH_CAN]: true,
                [CAMPUS_TREE_SINGLE__BANCROFT]: true
            },
            [DOOR]: {
                [BANCROFT_DOOR]: true
            },
            [FLAT]: {
                [BERKELEY_BUILDING_WIDE__BANCROFT]: true
            }
        },
        cubes: BERKELEY_BANCROFT_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING }
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
                [DISTANT_BUILDINGS_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [CUTOUT]: {
                [BANCROFT_SHRUB]: true,
                [SIGNPOST]: true,
                [CAMPUS_TREE_SINGLE__CAMPANILE]: true,
                [CAMPUS_TREE_DOUBLE__CAMPANILE]: true
            },
            [FLAT]: {
                [CAMPANILE]: true,
                [BERKELEY_BUILDING_TALL]: true,
                [BERKELEY_BUILDING_WIDE__CAMPANILE]: true
            }
        },
        cubes: BERKELEY_CAMPANILE_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING }
    }
]
