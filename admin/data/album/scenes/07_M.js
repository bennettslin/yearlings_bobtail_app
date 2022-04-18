import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    BASEMENT_KEY,
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_KEYBOARD_KEY,
    CINEMA_KEY,
    CINEMA_STREET_KEY,
    CLUB_FRONT_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_AUTUMN,
    SEASON_SPRING,
    SEASON_WINTER,
    TIME_AFTERNOON,
    TIME_EVENING,
    TIME_NIGHT,
    TIME_NOON,
} from '../../../../src/constants/scene/sky'
import {
    ANA,
    BENNETT,
    HOWIE,
    JACOB,
    JACOB_MARA,
    MARA,
    MIRIAM,
    STEPHANIE,
    TOMER,
} from '../../../../src/constants/scene/actors'
import { SQUATTING } from '../../../../src/constants/scene/actors/ana'
import {
    COUCH_READING,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    MERRILY_DERANGED,
    PONDERING,
    RUBIKS_CUBE,
    WONDERING_BABY,
} from '../../../../src/constants/scene/actors/bennett'
import {
    USHER_LOOKING,
    USHER_WAITING,
} from '../../../../src/constants/scene/actors/howie'
import {
    INFANT_CURIOUS,
    INFANT_NURSING,
} from '../../../../src/constants/scene/actors/miriam'
import { BENNETT_KEYBOARD } from '../../../../src/constants/scene/actors/stephanie'
import { SHANE_BUYING } from '../../../../src/constants/scene/actors/tomer'
import {
    EATING,
    FLIRTING,
} from '../../../../src/constants/scene/actors/songs'
import {
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE__LEVEL,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_LARGE__CINEMA,
    BUBBLE_MEDIUM__CINEMA,
    BUBBLE_SMALL__CINEMA,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
} from '../../../../src/constants/scene/things/bubbles'
import {
    POSTER_GLADIATOR,
    POSTER_LEONARD_COHEN,
    POSTER_MARA_GLADIATOR,
    POSTER_MARA_MEMENTO,
    MARQUEE_FRAME__GLADIATOR,
    MARQUEE_FRAME__MARA_GLADIATOR,
    MARQUEE_FRAME__MARA_MEMENTO,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    ALBUM_TELEVISION,
} from '../../../../src/constants/scene/things/cardboards'
import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    PEACH_TREE,
    ROSEBUSH_DOUBLE_BASEMENT,
    ROSEBUSH_SINGLE_BASEMENT,
    TREE_DEAD__COUCH,
    TREE__COUCH,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT,
} from '../../../../src/constants/scene/things/cutouts'
import {
    BASEMENT_DOOR_OPEN,
    CINEMA_DOORS,
    DEFAULT_FENCE_BASEMENT,
    TRANSOM,
} from '../../../../src/constants/scene/things/doors'
import {
    BUDWEISER_FULLER__BENNETT,
    BUDWEISER_CASE,
    BUDWEISER_EMPTIER__MARA,
    BASS_CASE_UPRIGHT,
    BENNETT_COUCH_LAMP,
    BENNETT_RECORD_PLAYER,
    CASH_BOX,
    DRUMKIT,
    DRUMS_STACKED__BASEMENT,
    ELECTRIC_GUITAR,
    GUITAR_CASE_UPRIGHT,
    KEYBOARD,
} from '../../../../src/constants/scene/things/fixtures'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT,
} from '../../../../src/constants/scene/things/flats'
import { BENNETT_PILLOW__COUCH } from '../../../../src/constants/scene/things/furnitures'
import {
    BENNETT_NIGHTSTAND,
    BENNETT_RECORD_STAND,
    KEYBOARD_STAND_LEFT,
    KEYBOARD_STAND_RIGHT,
    MILK_CRATE__ANA,
    MILK_CRATE__BENNETT,
    MILK_CRATE__JACOB,
    MILK_CRATE__MARA,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT,
    WIDE_COUCH_BENNETT,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'looking at Leonard Cohen poster',
                    instance: PONDERING,
                },
            },
            [CARDBOARD]: {
                [POSTER_LEONARD_COHEN]: true,
            },
            [CUTOUT]: {
                [TREE__COUCH]: true,
            },
            [DOOR]: {
                [TRANSOM]: true,
            },
            [FIXTURE]: {
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
        cubes: BENNETT_COUCH_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 2,
        description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting on couch, figuring out Rubiks Cube',
                    instance: RUBIKS_CUBE,
                },
            },
            [CARDBOARD]: {
                [ALBUM_TELEVISION]: true,
                [PROGRESS_CHART_EARLY]: true,
            },
            [CUTOUT]: {
                [TREE_DEAD__COUCH]: true,
            },
            [DOOR]: {
                [TRANSOM]: true,
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [ELECTRIC_GUITAR]: true,
            },
            [FURNITURE]: {
                [BENNETT_PILLOW__COUCH]: true,
            },
            [PANEL]: {
                [BENNETT_NIGHTSTAND]: true,
                [BENNETT_RECORD_STAND]: true,
                [WIDE_COUCH_BENNETT]: true,
                [WIDE_ARMREST_BENNETT__LEFT]: true,
                [WIDE_ARMREST_BENNETT__RIGHT]: true,
            },
        },
        cubes: BENNETT_COUCH_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_WINTER },
    },
    {
        unitIndex: 3,
        description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting on couch, reading a book',
                    instance: COUCH_READING,
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'sitting on floor, back turned, playing keyboard',
                        instance: BENNETT_KEYBOARD,
                    },
                },
            },
            [CARDBOARD]: {
                [PROGRESS_CHART_LATE]: true,
            },
            [CUTOUT]: {
                [TREE__COUCH]: true,
            },
            [DOOR]: {
                [TRANSOM]: true,
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [ELECTRIC_GUITAR]: true,
                [KEYBOARD]: true,
            },
            [PANEL]: {
                [BENNETT_NIGHTSTAND]: true,
                [BENNETT_RECORD_STAND]: true,
                [KEYBOARD_STAND_LEFT]: true,
                [KEYBOARD_STAND_RIGHT]: true,
                [WIDE_COUCH_BENNETT]: true,
                [WIDE_ARMREST_BENNETT__LEFT]: true,
                [WIDE_ARMREST_BENNETT__RIGHT]: true,
            },
        },
        cubes: BENNETT_COUCH_KEYBOARD_KEY,
        sky: { time: TIME_NOON, season: SEASON_SPRING },
    },
    {
        unitIndex: 4,
        description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'chatting with hipster, paying attention to Mara',
                    instance: DISTRACTED,
                },
                [JACOB]: {
                    description: 'wiping sweat, chatting with Mara, laughing',
                    instance: FLIRTING,
                },
                [MARA]: {
                    description: 'flirting with Jacob',
                    instance: FLIRTING,
                },
                [ANA]: {
                    description: 'squatting, back turned, putting bass back in case',
                    instance: SQUATTING,
                },
                [TOMER]: {
                    shane: {
                        description: 'chatting with Bennett, gushing about music',
                        instance: SHANE_BUYING,
                    },
                },
            },
            [CUTOUT]: {
                [MONITOR_FRONT__LEFT]: true,
                [MONITOR_FRONT__RIGHT]: true,
                [WALL_SPEAKER_FRONT__LEFT]: true,
                [WALL_SPEAKER_FRONT__RIGHT]: true,
            },
            [FIXTURE]: {
                [CASH_BOX]: true,
                [DRUMKIT]: true,
            },
        },
        cubes: CLUB_FRONT_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SPRING },
    },
    {
        unitIndex: 6,
        description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting, silently eating burger, uncomfortable',
                    instance: EATING,
                },
                [JACOB_MARA]: {
                    description: 'sitting, eating burger, holding Mara\'s hand',
                    instance: EATING,
                },
                [ANA]: {
                    description: 'sitting, eating fries, laughing',
                    instance: EATING,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [PEACH_TREE]: true,
                [ROSEBUSH_DOUBLE_BASEMENT]: true,
                [ROSEBUSH_SINGLE_BASEMENT]: true,
            },
            [DOOR]: {
                [DEFAULT_FENCE_BASEMENT]: true,
                [BASEMENT_DOOR_OPEN]: true,
            },
            [FIXTURE]: {
                [BASS_CASE_UPRIGHT]: true,
                [GUITAR_CASE_UPRIGHT]: true,
                [DRUMS_STACKED__BASEMENT]: true,
                [BUDWEISER_CASE]: true,
                [BUDWEISER_EMPTIER__MARA]: true,
                [BUDWEISER_FULLER__BENNETT]: true,
            },
            [PANEL]: {
                [MILK_CRATE__ANA]: true,
                [MILK_CRATE__BENNETT]: true,
                [MILK_CRATE__JACOB]: true,
                [MILK_CRATE__MARA]: true,
            },
        },
        cubes: BASEMENT_KEY,
        sky: { time: TIME_NOON, season: SEASON_SPRING },
    },
    {
        unitIndex: 8,
        description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, sulking with head down',
                    instance: HOPELESSLY_CRUSHED,
                },
                [MIRIAM]: {
                    maskedWoman: {
                        description: 'side, holding baby, looking back at Bennett',
                        instance: INFANT_CURIOUS,
                    },
                },
            },
            [CARDBOARD]: {
                [POSTER_MARA_MEMENTO]: true,
                [MARQUEE_FRAME__MARA_MEMENTO]: true,
                [POSTER_MARA_GLADIATOR]: true,
                [MARQUEE_FRAME__MARA_GLADIATOR]: true,
            },
            [DOOR]: {
                [CINEMA_DOORS]: true,
            },
        },
        cubes: CINEMA_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SPRING },
    },
    {
        unitIndex: 10,
        description: `Bennett is looking at the woman holding a baby who just passed by.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, looking back at baby',
                    instance: WONDERING_BABY,
                },
                [MIRIAM]: {
                    maskedWoman: {
                        description: 'side, walking away',
                        instance: INFANT_NURSING,
                    },
                },
                [HOWIE]: {
                    maskedUsher: {
                        description: 'checking watch',
                        instance: USHER_WAITING,
                    },
                },
            },
            [CARDBOARD]: {
                [POSTER_MARA_MEMENTO]: true,
                [MARQUEE_FRAME__MARA_MEMENTO]: true,
                [POSTER_MARA_GLADIATOR]: true,
                [MARQUEE_FRAME__MARA_GLADIATOR]: true,
            },
            [DOOR]: {
                [CINEMA_DOORS]: true,
            },
        },
        cubes: CINEMA_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SPRING },
    },
    {
        unitIndex: 12,
        description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, inspired by sudden thought',
                    instance: MERRILY_DERANGED,
                },
                [HOWIE]: {
                    maskedUsher: {
                        description: 'looking at Bennett',
                        instance: USHER_LOOKING,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__CINEMA]: true,
                [BUBBLE_MEDIUM__CINEMA]: true,
                [BUBBLE_LARGE__CINEMA]: true,
                [CINEMA_THOUGHT_BUYING]: true,
                [CINEMA_THOUGHT_RECORDING]: true,
            },
            [CARDBOARD]: {
                [POSTER_GLADIATOR]: true,
                [MARQUEE_FRAME__GLADIATOR]: true,
            },
            [FLAT]: {
                [COMMERCIAL_CENTRE]: true,
                [COMMERCIAL_FAR_LEFT]: true,
                [COMMERCIAL_FAR_RIGHT]: true,
                [COMMERCIAL_MIDDLE_RIGHT]: true,
                [COMMERCIAL_NEAR_RIGHT]: true,
            },
        },
        cubes: CINEMA_STREET_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SPRING },
    },
]
