import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    BENNETT_COUCH_THOUGHT_KEY,
    BERKELEY_BANCROFT_KEY,
    BERKELEY_CAMPANILE_KEY,
    CATHOLIC_CHURCH_KEY,
    COURTYARD_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_SPRING,
    SEASON_THOUGHT,
    TIME_EVENING,
    TIME_MORNING,
    TIME_NIGHT,
} from '../../../../src/constants/scene/sky'
import {
    AMY,
    BENNETT,
    CATHERINE,
    WADE,
} from '../../../../src/constants/scene/actors'
import { SMOKER } from '../../../../src/constants/scene/actors/amy'
import {
    BREAKUP_DEJECTED,
    CATHOLIC_IDEA,
    CATHOLIC_PENSIVE,
    PIOUS,
    SOLICITING_OPINION,
} from '../../../../src/constants/scene/actors/bennett'
import {
    PUZZLED,
    QUIPPING,
    WEEPING,
} from '../../../../src/constants/scene/actors/catherine'
import { CATHOLIC_GUY } from '../../../../src/constants/scene/actors/wade'
import {
    OAKLAND_SIDE__LEVEL,
    THOUGHT_LARGE__RIGHT,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_LARGE__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_SMALL__RIGHT,
} from '../../../../src/constants/scene/things/bubbles'
import {
    POSTER_NIRVANA,
    ALBUM_POLICE,
} from '../../../../src/constants/scene/things/cardboards'
import {
    ASH_CAN,
    BUSH_DOUBLE__COURTYARD,
    BUSH_SINGLE__COURTYARD,
    CAMPUS_TREE_DOUBLE__CAMPANILE,
    CAMPUS_TREE_SINGLE__BANCROFT,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    LAMPPOST__CHURCH,
    RECYCLING_BIN__BENNETT,
    SIGNPOST,
    STINK_PLANT,
} from '../../../../src/constants/scene/things/cutouts'
import {
    BANCROFT_DOOR,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
    BLINDS_OUTSIDE__BENNETT,
} from '../../../../src/constants/scene/things/doors'
import {
    BEETHOVEN_BUST__COUCH,
    BENNETT_COUCH_LAMP,
    BENNETT_RECORD_PLAYER,
    ELECTRIC_GUITAR,
} from '../../../../src/constants/scene/things/fixtures'
import {
    BERKELEY_BUILDING_TALL,
    BERKELEY_BUILDING_WIDE__BANCROFT,
    BERKELEY_BUILDING_WIDE__CAMPANILE,
    CAMPANILE,
    DISTANT_BUILDINGS,
    DISTANT_HOUSES,
    NEAR_BUILDINGS,
    ST_JOSEPHS_ANNEX,
    ST_JOSEPHS_CHURCH,
} from '../../../../src/constants/scene/things/flats'
import {
    BENNETT_NIGHTSTAND,
    BENNETT_RECORD_STAND,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT,
    WIDE_COUCH_BENNETT,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'standing forward, disappointed, defeated',
                    instance: BREAKUP_DEJECTED,
                },
                [CATHERINE]: {
                    description: 'walking away, in a bad mood',
                    instance: WEEPING,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [RECYCLING_BIN__BENNETT]: true,
                [BUSH_SINGLE__COURTYARD]: true,
                [BUSH_DOUBLE__COURTYARD]: true,
            },
            [DOOR]: {
                [BLINDS_OUTSIDE__BENNETT]: true,
                [BENNETT_DOOR_OUTSIDE]: true,
                [BENNETT_GATE_SIDE]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
            },
        },
        cubes: COURTYARD_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SPRING },
    },
    {
        unitIndex: 3,
        description: `In Bennett's thoughts, he and Catherine are together on the couch. She is putting down the book she is reading, while he is playing the guitar, a pencil and notepad in hand, implying that he is writing a song, looking at her inquisitively.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting slouched, showing lyrics to Catherine',
                    instance: SOLICITING_OPINION,
                },
                [CATHERINE]: {
                    description: 'sitting upright, droll smile',
                    instance: QUIPPING,
                },
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__RIGHT]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__RIGHT]: true,
                [BUBBLE_MEDIUM__RIGHT]: true,
                [BUBBLE_LARGE__RIGHT]: true,
            },
            [CARDBOARD]: {
                [ALBUM_POLICE]: true,
                [POSTER_NIRVANA]: true,
            },
            [FIXTURE]: {
                [BEETHOVEN_BUST__COUCH]: true,
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [ELECTRIC_GUITAR]: true,
            },
            [PANEL]: {
                [BENNETT_NIGHTSTAND]: true,
                [BENNETT_RECORD_STAND]: true,
                [WIDE_COUCH_BENNETT]: true,
                [WIDE_ARMREST_BENNETT__LEFT]: true,
                [WIDE_ARMREST_BENNETT__RIGHT]: true,
            },
        },
        cubes: BENNETT_COUCH_THOUGHT_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 5,
        description: `Bennett is standing in the rain at night, staring at a Catholic church across the street.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'standing, back forward, hands in pocket',
                    instance: CATHOLIC_PENSIVE,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [LAMPPOST__CHURCH]: true,
            },
            [FLAT]: {
                [DISTANT_HOUSES]: true,
                [ST_JOSEPHS_ANNEX]: true,
                [ST_JOSEPHS_CHURCH]: true,
            },
        },
        cubes: CATHOLIC_CHURCH_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SPRING },
    },
    {
        unitIndex: 7,
        description: `Bennett is staring at an outdoor ashtray. Someone with a cross on their forehead is walking behind him in the other direction, while someone who has just put out a cigarette in the ashtray is walking in front of him, exhaling the smoke. Bennett looks back at the person behind him.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, noticing Catholic',
                    instance: CATHOLIC_IDEA,
                },
                [WADE]: {
                    catholic: {
                        description: 'side angle, walking, looking pious',
                        instance: CATHOLIC_GUY,
                    },
                },
                [AMY]: {
                    smoker: {
                        description: 'walking up stairs, back forward, exhaling smoke',
                        instance: SMOKER,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [ASH_CAN]: true,
                [CAMPUS_TREE_SINGLE__BANCROFT]: true,
            },
            [DOOR]: {
                [BANCROFT_DOOR]: true,
            },
            [FLAT]: {
                [DISTANT_BUILDINGS]: true,
                [BERKELEY_BUILDING_WIDE__BANCROFT]: true,
            },
        },
        cubes: BERKELEY_BANCROFT_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING },
    },
    {
        unitIndex: 8,
        description: `Bennett now has an ashed cross on his forehead, eyes closed and head held high, looking both pious and pompous. Catherine walks towards him from the other side of the stage.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, looking pious',
                    instance: PIOUS,
                },
                [CATHERINE]: {
                    description: 'walking forward, confused and curious at Bennett',
                    instance: PUZZLED,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [STINK_PLANT]: true,
                [SIGNPOST]: true,
                [CAMPUS_TREE_SINGLE__CAMPANILE]: true,
                [CAMPUS_TREE_DOUBLE__CAMPANILE]: true,
            },
            [FLAT]: {
                [DISTANT_BUILDINGS]: true,
                [CAMPANILE]: true,
                [BERKELEY_BUILDING_TALL]: true,
                [BERKELEY_BUILDING_WIDE__CAMPANILE]: true,
            },
        },
        cubes: BERKELEY_CAMPANILE_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SPRING },
    },
]
