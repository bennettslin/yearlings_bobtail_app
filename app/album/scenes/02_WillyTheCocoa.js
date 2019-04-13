import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS
} from 'constants/scene'

import {
    BEDROOM_KEY,
    BEDROOM_STOOL_KEY,
    FREEWAY_KEY,
    PORCH_KEY,
    NOHO_HOUSES_KEY,
    CHANGELING_CAVE_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from '../../scene/sky'

import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    CHRISTOPHER_BENNETT_WILLY,
    HOWIE_WILLY,
    TOMER
} from '../../scene/actorKeys'

import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL
} from '../../scene/instanceKeys/preteenBennett'

import {
    COLLECTING,
    DUCKING
} from '../../scene/instanceKeys/willy'

import {
    STOOPING,
    COMFORTING
} from '../../scene/instanceKeys/mother'

import {
    ROARING
} from '../../scene/instanceKeys/father'

import {
    TANTRUM,
    SOBBING
} from '../../scene/instanceKeys/christopher'

import {
    REASSURING_ENCHANTED
} from '../../scene/instanceKeys/christopherBennettWilly'

import {
    GANGBANGER
} from '../../scene/instanceKeys/songs'

import {
    NOHO_HOUSES_BACKDROP,
    VALLEY_BACKDROP,
    BEDROOM_BACKDROP,
    BEDROOM_SIREN_BACKDROP
} from '../../scene/backdropKeys'

import {
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT,
    TINTIN_POSTER,
    FIRE_HYDRANT,
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    STALACTITES
} from '../../scene/cutoutKeys'

import {
    SHOPPING_CART,
    HAIRCUT_SCISSORS,
    GARBAGE_BAG,
    SHOPPING_CART_FULL,
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS
} from '../../scene/fixtureKeys'

import {
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    FAMILY_HOUSE,
    CAVE_SHADOWS
} from '../../scene/flatKeys'

import {
    BEDROOM_DESK,
    CAPTAIN_BED_PILLOW
} from '../../scene/furnitureKeys'

import {
    CAPTAIN_BED_DRAWERS
} from '../../scene/panelKeys'

export default [
    {
        unitIndex: 1,
        description: ``,
        cubes: FREEWAY_KEY,
        presences: {
            [BACKDROPS]: {
                [VALLEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [OVERPASS_SIGN_FRONT]: true,
                [OVERPASS_SIGN_BACK]: true
            },
            [FIXTURES]: {
                [SHOPPING_CART]: true
            }
        },
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 2,
        description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
        presences: {
            [ACTORS]: {
                [WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, holding up a bottle, squinting',
                    instance: COLLECTING
                }
            },
            [BACKDROPS]: {
                [VALLEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [OVERPASS_SIGN_FRONT]: true,
                [OVERPASS_SIGN_BACK]: true
            },
            [FIXTURES]: {
                [SHOPPING_CART]: true
            }
        },
        cubes: FREEWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
        presences: {
            [ACTORS]: {
                [WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, ducking behind post, chuckling',
                    instance: DUCKING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'squatting, righting chair, exasperated, concerned',
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'off balance, having a tantrum',
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'stepping off porch, cautious, trying to calm Christopher',
                    instance: CAUTIOUS
                }
            },
            [CUTOUTS]: {
                [PORCH_PLANTS_LEFT]: true,
                [PORCH_PLANTS_RIGHT]: true
            },
            [FIXTURES]: {
                [HAIRCUT_SCISSORS]: true
            }
        },
        cubes: PORCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 7,
        description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
        presences: {
            [ACTORS]: {
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, running, angry',
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'lying on side, in pain, clenching stomach',
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, aggressive stance, angry',
                    instance: ENRAGED
                }
            },
            [BACKDROPS]: {
                [BEDROOM_BACKDROP]: true
            },
            [CUTOUTS]: {
                [TINTIN_POSTER]: true
            },
            [FIXTURES]: {
                [BEETHOVEN_BUST]: true,
                [CHRISTOPHER_LETTERS]: true
            },
            [FURNITURES]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED_PILLOW]: true
            },
            [PANELS]: {
                [CAPTAIN_BED_DRAWERS]: true
            }
        },
        cubes: BEDROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
        presences: {
            [ACTORS]: {
                [HOWIE_WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'side angle, pointing at shoe, pushing Willy',
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'pulling bottle from cart, about to strike, threatening',
                        instance: GANGBANGER
                    }
                }
            },
            [BACKDROPS]: {
                [NOHO_HOUSES_BACKDROP]: true
            },
            [CUTOUTS]: {
                [FIRE_HYDRANT]: true
            },
            [FIXTURES]: {
                [GARBAGE_BAG]: true,
                [SHOPPING_CART_FULL]: true
            },
            [FLATS]: {
                [NOHO_HOUSE_LEFT]: true,
                [NOHO_HOUSE_RIGHT]: true
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
        presences: {
            [ACTORS]: {
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'getting up to close curtain, trying to be reassuring',
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'lying in bed, worried, scared',
                    instance: FEARFUL
                }
            },
            [BACKDROPS]: {
                [BEDROOM_SIREN_BACKDROP]: true
            },
            [CUTOUTS]: {
                [TINTIN_POSTER]: true
            },
            [FIXTURES]: {
                [BEETHOVEN_BUST]: true
            },
            [FURNITURES]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED_PILLOW]: true
            },
            [PANELS]: {
                [CAPTAIN_BED_DRAWERS]: true
            }
        },
        cubes: BEDROOM_STOOL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 14,
        description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
        presences: {
            [ACTORS]: {
                [CHRISTOPHER_BENNETT_WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'side angle, looking up at Bennett, reassuring',
                    instance: REASSURING_ENCHANTED
                }
            },
            [CUTOUTS]: {
                [TROLL_SHADOW_LEFT]: true,
                [TROLL_SHADOW_RIGHT]: true,
                [CAMPFIRE]: true,
                [STALACTITES]: true
            },
            [FLATS]: {
                [FAMILY_HOUSE]: true,
                [CAVE_SHADOWS]: true
            }
        },
        cubes: CHANGELING_CAVE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
