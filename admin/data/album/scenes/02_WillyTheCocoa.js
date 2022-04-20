import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    BEDROOM_KEY,
    BEDROOM_STOOL_NIGHT_KEY,
    CHANGELING_CAVE_KEY,
    FREEWAY_KEY,
    FREEWAY_NIGHT_KEY,
    NOHO_HOUSES_KEY,
    PORCH_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_MAGIC,
    SEASON_SUMMER,
    TIME_DAWN,
    TIME_EVENING,
    TIME_MORNING,
    TIME_NIGHT,
    TIME_NOON,
    TIME_TWILIGHT,
} from '../../../../src/constants/scene/sky'
import {
    CHRISTOPHER,
    CHRISTOPHER_BENNETT_WILLY,
    FATHER,
    HOWIE_WILLY,
    MOTHER,
    PRETEEN_BENNETT,
    TOMER,
    WILLY,
} from '../../../../src/constants/scene/actors'
import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
} from '../../../../src/constants/scene/actors/preteenBennett'
import {
    COLLECTING,
    DUCKING,
} from '../../../../src/constants/scene/actors/willy'
import {
    COMFORTING,
    STOOPING,
} from '../../../../src/constants/scene/actors/mother'
import { ROARING } from '../../../../src/constants/scene/actors/father'
import {
    SOBBING,
    TANTRUM,
} from '../../../../src/constants/scene/actors/christopher'
import { REASSURING_ENCHANTED } from '../../../../src/constants/scene/actors/christopherBennettWilly'
import { GANGBANGER } from '../../../../src/constants/scene/actors/songs'
import {
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP,
    VALLEY_PANORAMA_BACKDROP,
} from '../../../../src/constants/scene/things/backdrops'
import { POSTER_TINTIN } from '../../../../src/constants/scene/things/cardboards'
import {
    CACTUS_DOUBLE__PORCH,
    CACTUS_SINGLE__PORCH,
    CAMPFIRE,
    FIRE_HYDRANT,
    OVERPASS_SIGN_BACK,
    SHOPPING_CART,
} from '../../../../src/constants/scene/things/cutouts'
import {
    BEDROOM_BLINDS_OPEN,
    BEDROOM_FENCE,
    DEFAULT_FENCE_BATHROOM,
    PORCH_DOOR,
} from '../../../../src/constants/scene/things/doors'
import {
    BEDROOM_LAMP__DESK,
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS,
    FLOWER_BULBS,
    HAIRCUT_SCISSORS,
    LETTER_SCRAPS__CHRISTOPHER,
    TORN_MAGAZINES__CHRISTOPHER,
} from '../../../../src/constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    FAMILY_HOUSE,
    NEAR_HOUSES,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    VALLEY_FREEWAY,
} from '../../../../src/constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../../../src/constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    BEDROOM_STOOL,
    CAPTAIN_BED,
    CAVE_SHADOWS,
    FREEWAY_FENCE,
    STALACTITES,
    TROLL_SHADOW_FAR,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `San Fernando valley in the morning.`,
        cubes: FREEWAY_NIGHT_KEY,
        presences: {
            [BACKDROP]: {
                [VALLEY_PANORAMA_BACKDROP]: true,
            },
            [CUTOUT]: {
                [OVERPASS_SIGN_BACK]: true,
            },
            [FLAT]: {
                [VALLEY_FREEWAY]: true,
            },
            [PANEL]: {
                [FREEWAY_FENCE]: true,
            },
        },
        sky: { time: TIME_TWILIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 2,
        description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    description: 'side angle, holding up a bottle, squinting',
                    instance: COLLECTING,
                },
            },
            [BACKDROP]: {
                [VALLEY_PANORAMA_BACKDROP]: true,
            },
            [CUTOUT]: {
                [SHOPPING_CART]: true,
                [OVERPASS_SIGN_BACK]: true,
            },
            [FLAT]: {
                [VALLEY_FREEWAY]: true,
            },
            [PANEL]: {
                [FREEWAY_FENCE]: true,
            },
        },
        cubes: FREEWAY_KEY,
        sky: { time: TIME_DAWN, season: SEASON_SUMMER },
    },
    {
        unitIndex: 5,
        description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    description: 'side, ducking behind post, chuckling',
                    instance: DUCKING,
                },
                [MOTHER]: {
                    description: 'squatting, righting chair, exasperated, concerned',
                    instance: STOOPING,
                },
                [CHRISTOPHER]: {
                    description: 'off balance, having a tantrum',
                    instance: TANTRUM,
                },
                [PRETEEN_BENNETT]: {
                    description: 'stepping off porch, cautious, trying to calm Christopher',
                    instance: CAUTIOUS,
                },
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true,
            },
            [CUTOUT]: {
                [CACTUS_DOUBLE__PORCH]: true,
                [CACTUS_SINGLE__PORCH]: true,
            },
            [DOOR]: {
                [DEFAULT_FENCE_BATHROOM]: true,
                [PORCH_DOOR]: true,
            },
            [FIXTURE]: {
                [HAIRCUT_SCISSORS]: true,
            },
        },
        cubes: PORCH_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SUMMER },
    },
    {
        unitIndex: 7,
        description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    description: 'side, running, angry',
                    instance: ROARING,
                },
                [CHRISTOPHER]: {
                    description: 'lying on side, in pain, clenching stomach',
                    instance: SOBBING,
                },
                [PRETEEN_BENNETT]: {
                    description: 'side angle, aggressive stance, angry',
                    instance: ENRAGED,
                },
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [POSTER_TINTIN]: true,
            },
            [DOOR]: {
                [BEDROOM_FENCE]: true,
                [BEDROOM_BLINDS_OPEN]: true,
            },
            [FIXTURE]: {
                [BEDROOM_LAMP__DESK]: true,
                [BEETHOVEN_BUST]: true,
                [LETTER_SCRAPS__CHRISTOPHER]: true,
                [TORN_MAGAZINES__CHRISTOPHER]: true,
                [CHRISTOPHER_LETTERS]: true,
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true,
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true,
            },
        },
        cubes: BEDROOM_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER },
    },
    {
        unitIndex: 9,
        description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
        presences: {
            [ACTOR]: {
                [HOWIE_WILLY]: {
                    description: 'side angle, pointing at shoe, pushing Willy',
                    instance: GANGBANGER,
                },
                [TOMER]: {
                    gangbanger: {
                        description: 'pulling bottle from cart, about to strike, threatening',
                        instance: GANGBANGER,
                    },
                },
            },
            [BACKDROP]: {
                [VALLEY_CLOSER_BACKDROP]: true,
            },
            [CUTOUT]: {
                [SHOPPING_CART]: true,
                [FIRE_HYDRANT]: true,
            },
            [FLAT]: {
                [NEAR_HOUSES]: true,
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true,
            },
        },
        cubes: NOHO_HOUSES_KEY,
        sky: { time: TIME_NOON, season: SEASON_SUMMER },
    },
    {
        unitIndex: 12,
        description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
        presences: {
            [ACTOR]: {
                [MOTHER]: {
                    description: 'getting up to close curtain, trying to be reassuring',
                    instance: COMFORTING,
                },
                [PRETEEN_BENNETT]: {
                    description: 'lying in bed, worried, scared',
                    instance: FEARFUL,
                },
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true,
            },
            [CARDBOARD]: {
                [POSTER_TINTIN]: true,
            },
            [DOOR]: {
                [BEDROOM_FENCE]: true,
                [BEDROOM_BLINDS_OPEN]: true,
            },
            [FIXTURE]: {
                [BEDROOM_LAMP__DESK]: true,
                [BEETHOVEN_BUST]: true,
                [FLOWER_BULBS]: true,
            },
            [FLAT]: {
                [BEDROOM_SIREN]: true,
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true,
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [BEDROOM_STOOL]: true,
                [CAPTAIN_BED]: true,
            },
        },
        cubes: BEDROOM_STOOL_NIGHT_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER },
    },
    {
        unitIndex: 14,
        description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
        presences: {
            [ACTOR]: {
                [CHRISTOPHER_BENNETT_WILLY]: {
                    description: 'side angle, looking up at Bennett, reassuring',
                    instance: REASSURING_ENCHANTED,
                },
            },
            [BACKDROP]: {
                [VALLEY_CLOSER_BACKDROP]: true,
            },
            [CUTOUT]: {
                [CAMPFIRE]: true,
            },
            [FLAT]: {
                [NEAR_HOUSES]: true,
                [FAMILY_HOUSE]: true,
            },
            [PANEL]: {
                [CAVE_SHADOWS]: true,
                [TROLL_SHADOW_LEFT]: true,
                [TROLL_SHADOW_RIGHT]: true,
                [TROLL_SHADOW_FAR]: true,
                [STALACTITES]: true,
            },
        },
        cubes: CHANGELING_CAVE_KEY,
        sky: { season: SEASON_MAGIC },

    },
]
