import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../constants/scene/things'
import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    FREEWAY_KEY,
    PORCH_KEY,
    NOHO_HOUSES_KEY,
    CHANGELING_CAVE_KEY
} from '../../constants/scene/scenes'
import {
    TIME_TWILIGHT,
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_EVENING,
    TIME_NIGHT,
    SEASON_SUMMER,
    SEASON_MAGIC
} from '../../scene/sky/keys'
import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    CHRISTOPHER_BENNETT_WILLY,
    HOWIE_WILLY,
    TOMER
} from '../../constants/scene/actors'
import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL
} from '../../constants/scene/actors/preteenBennett'
import {
    COLLECTING,
    DUCKING
} from '../../constants/scene/actors/willy'
import {
    STOOPING,
    COMFORTING
} from '../../constants/scene/actors/mother'
import { ROARING } from '../../constants/scene/actors/father'
import {
    TANTRUM,
    SOBBING
} from '../../constants/scene/actors/christopher'
import { REASSURING_ENCHANTED } from '../../constants/scene/actors/christopherBennettWilly'
import { GANGBANGER } from '../../constants/scene/actors/songs'
import {
    NOHO_HOUSES_BACKDROP,
    FENCE_BACKDROP,
    VALLEY__FREEWAY
} from '../../constants/scene/things/backdrops'
import { TINTIN_POSTER } from '../../constants/scene/things/cardboards'
import {
    SHOPPING_CART,
    OVERPASS_SIGN_BACK,
    CACTUS_DOUBLE__PORCH,
    CACTUS_SINGLE__PORCH,
    FIRE_HYDRANT,
    CAMPFIRE
} from '../../constants/scene/things/cutouts'
import {
    PORCH_DOOR,
    BEDROOM_BLINDS_OPEN
} from '../../constants/scene/things/doors'
import {
    LETTER_SCRAPS__CHRISTOPHER,
    CHRISTOPHER_LETTERS,
    HAIRCUT_SCISSORS
} from '../../constants/scene/things/fixtures'
import {
    VALLEY_FREEWAY,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    FAMILY_HOUSE,
    BEDROOM_SIREN
} from '../../constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE,
    CAVE_SHADOWS,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    TROLL_SHADOW_FAR,
    STALACTITES
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `San Fernando valley in the morning.`,
        cubes: FREEWAY_KEY,
        presences: {
            [BACKDROP]: {
                [VALLEY__FREEWAY]: true
            },
            [CUTOUT]: {
                [OVERPASS_SIGN_BACK]: true
            },
            [FLAT]: {
                [VALLEY_FREEWAY]: true
            }
        },
        sky: { time: TIME_TWILIGHT, season: SEASON_SUMMER }
    },
    {
        unitIndex: 2,
        description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    description: 'side angle, holding up a bottle, squinting',
                    instance: COLLECTING
                }
            },
            [BACKDROP]: {
                [VALLEY__FREEWAY]: true
            },
            [CUTOUT]: {
                [SHOPPING_CART]: true,
                [OVERPASS_SIGN_BACK]: true
            },
            [FLAT]: {
                [VALLEY_FREEWAY]: true
            }
        },
        cubes: FREEWAY_KEY,
        sky: { time: TIME_DAWN, season: SEASON_SUMMER }
    },
    {
        unitIndex: 5,
        description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    description: 'side, ducking behind post, chuckling',
                    instance: DUCKING
                },
                [MOTHER]: {
                    description: 'squatting, righting chair, exasperated, concerned',
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    description: 'off balance, having a tantrum',
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    description: 'stepping off porch, cautious, trying to calm Christopher',
                    instance: CAUTIOUS
                }
            },
            [BACKDROP]: {
                [NOHO_HOUSES_BACKDROP]: true,
                [FENCE_BACKDROP]: true
            },
            [CUTOUT]: {
                [CACTUS_DOUBLE__PORCH]: true,
                [CACTUS_SINGLE__PORCH]: true
            },
            [DOOR]: {
                [PORCH_DOOR]: true
            },
            [FIXTURE]: {
                [HAIRCUT_SCISSORS]: true
            }
        },
        cubes: PORCH_KEY,
        sky: { time: TIME_MORNING, season: SEASON_SUMMER }
    },
    {
        unitIndex: 7,
        description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    description: 'side, running, angry',
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    description: 'lying on side, in pain, clenching stomach',
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    description: 'side angle, aggressive stance, angry',
                    instance: ENRAGED
                }
            },
            [CARDBOARD]: {
                [TINTIN_POSTER]: true
            },
            [DOOR]: {
                [BEDROOM_BLINDS_OPEN]: true
            },
            [FIXTURE]: {
                [LETTER_SCRAPS__CHRISTOPHER]: true,
                [CHRISTOPHER_LETTERS]: true
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER }
    },
    {
        unitIndex: 9,
        description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
        presences: {
            [ACTOR]: {
                [HOWIE_WILLY]: {
                    description: 'side angle, pointing at shoe, pushing Willy',
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        description: 'pulling bottle from cart, about to strike, threatening',
                        instance: GANGBANGER
                    }
                }
            },
            [BACKDROP]: {
                [NOHO_HOUSES_BACKDROP]: true,
                [FENCE_BACKDROP]: true
            },
            [CUTOUT]: {
                [SHOPPING_CART]: true,
                [FIRE_HYDRANT]: true
            },
            [FLAT]: {
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: { time: TIME_NOON, season: SEASON_SUMMER }
    },
    {
        unitIndex: 12,
        description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
        presences: {
            [ACTOR]: {
                [MOTHER]: {
                    description: 'getting up to close curtain, trying to be reassuring',
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    description: 'lying in bed, worried, scared',
                    instance: FEARFUL
                }
            },
            [CARDBOARD]: {
                [TINTIN_POSTER]: true
            },
            [DOOR]: {
                [BEDROOM_BLINDS_OPEN]: true
            },
            [FLAT]: {
                [BEDROOM_SIREN]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_STOOL_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER }
    },
    {
        unitIndex: 14,
        description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
        presences: {
            [ACTOR]: {
                [CHRISTOPHER_BENNETT_WILLY]: {
                    description: 'side angle, looking up at Bennett, reassuring',
                    instance: REASSURING_ENCHANTED
                }
            },
            [CUTOUT]: {
                [CAMPFIRE]: true
            },
            [FLAT]: {
                [FAMILY_HOUSE]: true
            },
            [PANEL]: {
                [CAVE_SHADOWS]: true,
                [TROLL_SHADOW_LEFT]: true,
                [TROLL_SHADOW_RIGHT]: true,
                [TROLL_SHADOW_FAR]: true,
                [STALACTITES]: true
            }
        },
        cubes: CHANGELING_CAVE_KEY,
        sky: { season: SEASON_MAGIC }
    }
]
