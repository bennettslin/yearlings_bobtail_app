import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../../../app/constants/scene/things'
import {
    BEDROOM_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY,
    VAN_NUYS_HALLWAY_KEY,
    VAN_NUYS_LOCKERS_KEY,
    VAN_NUYS_QUAD_KEY
} from '../../../../app/constants/scene/scenes'
import {
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    SEASON_WINTER,
    SEASON_FUTURE,
    SEASON_NIGHT_MAGIC
} from '../../../../app/constants/scene/sky'
import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN,
    CHRISTOPHER_BENNETT
} from '../../../../app/constants/scene/actors'
import {
    THROWING,
    NOODLING
} from '../../../../app/constants/scene/actors/andrew'
import {
    GESTURING,
    SNACKING
} from '../../../../app/constants/scene/actors/brad'
import { STARING } from '../../../../app/constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from '../../../../app/constants/scene/actors/christopherBennett'
import { ARGUING } from '../../../../app/constants/scene/actors/mother'
import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from '../../../../app/constants/scene/actors/preteenBennett'
import { POPULAR_GIRL } from '../../../../app/constants/scene/actors/sasha'
import { ASLEEP } from '../../../../app/constants/scene/actors/songs'
import { PRINCIPAL } from '../../../../app/constants/scene/actors/tristan'
import {
    NEAR_BUILDINGS,
    VALLEY_CLOSER_BACKDROP,
    VALLEY_FURTHER_BACKDROP
} from '../../../../app/constants/scene/things/backdrops'
import {
    DOGS_SKETCH,
    SKETCHBOOK__DOGS,
    ESCAPE_POD_SKETCH,
    SKETCHBOOK__ESCAPE_POD
} from '../../../../app/constants/scene/things/bubbles'
import {
    BLOOM_COUNTY_POSTER,
    DOGS_ROCKET,
    EARTH__ROCKET,
    EARTH__STATION,
    SPACE_STATION,
    VAN_NUYS_LOGO,
    CORKBOARD
} from '../../../../app/constants/scene/things/cardboards'
import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    TRASH_CAN__QUAD,
    BUSH_SINGLE__LOCKERS,
    BUSH_SINGLE__QUAD,
    BUSH_DOUBLE__LOCKERS,
    BUSH_DOUBLE__QUAD
} from '../../../../app/constants/scene/things/cutouts'
import {
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    PRINCIPAL_DOOR
} from '../../../../app/constants/scene/things/doors'
import {
    BEDROOM_LAMP__BED,
    BEDROOM_LAMP__DESK,
    LETTER_SCRAPS__BENNETT,
    TORN_MAGAZINES__BENNETT,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE,
    THROWN_FRUIT,
    BALLED_FOIL__LOCKERS
} from '../../../../app/constants/scene/things/fixtures'
import { BEDROOM_BUS } from '../../../../app/constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../../../app/constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from '../../../../app/constants/scene/things/panels'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
export default [
    {
        unitIndex: 1,
        description: `Bennett's room, but seemingly no one is there.`,
        presences: {
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true
            },
            [DOOR]: {
                [BEDROOM_BLINDS]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_KEY,
        sky: { time: TIME_EVENING, season: SEASON_WINTER }
    },
    {
        unitIndex: 2,
        description: `Bennett and Christopher are under his bunk bed. Christopher is injured, but happily playing. Bennett looks guilty. There is a drawing of the two as dogs.`,
        presences: {
            [ACTOR]: {
                [CHRISTOPHER_BENNETT]: {
                    description: 'w-sitting, blissful',
                    instance: BLISSFUL_GUILTY
                }
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [BUBBLE]: {
                [SKETCHBOOK__DOGS]: true,
                [DOGS_SKETCH]: true
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [DOOR]: {
                [BEDROOM_BLINDS]: true
            },
            [FIXTURE]: {
                [BEDROOM_LAMP__BED]: true,
                [LETTER_SCRAPS__BENNETT]: true,
                [TORN_MAGAZINES__BENNETT]: true,
                [BENNETT_LETTERS]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_OPEN_KEY,
        sky: { time: TIME_EVENING, season: SEASON_WINTER }
    },
    {
        unitIndex: 6,
        description: `Bennett is at home in bed, pretending to be sick. He is stuffing money from red pouches into a postage envelope. In the window, the schoolbus is driving off, leaving him behind. The bullies are visible through the schoolbus windows, laughing at him.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, sitting up in bed, feigning sick',
                    instance: FEIGNING_SICK
                }
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [DOOR]: {
                [BEDROOM_BLINDS_OPEN]: true
            },
            [FIXTURE]: {
                [BEDROOM_LAMP__DESK]: true,
                [RED_ENVELOPE_MONEY]: true
            },
            [FLAT]: {
                [BEDROOM_BUS]: true
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
        sky: { time: TIME_MORNING, season: SEASON_WINTER }
    },
    {
        unitIndex: 9,
        description: `Bennett is in bed sleeping. In his dream bubble, he imagines two dogs pulling a rocket.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'in bed, asleep, turned away',
                    instance: ASLEEP
                }
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CARDBOARD]: {
                [EARTH__ROCKET]: true,
                [DOGS_ROCKET]: true
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true
            },
            [PANEL]: {
                [BEDROOM_FENCE]: true,
                [CAPTAIN_BED]: true
            }
        },
        cubes: BEDROOM_DOGS_KEY,
        sky: { season: SEASON_NIGHT_MAGIC }
    },
    {
        unitIndex: 10,
        description: `Bennett is at his desk, reading a letter and crying. In his thought bubble, he is standing alone on Earth, looking up into space.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, sitting, shaken, scared',
                    instance: SHAKEN
                }
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true
            },
            [CARDBOARD]: {
                [EARTH__STATION]: true,
                [SPACE_STATION]: true
            },
            [FIXTURE]: {
                [BEDROOM_LAMP__DESK]: true,
                [BEYONDER_ENVELOPE]: true
            },
            [PANEL]: {
                [BEDROOM_FENCE]: true,
                [BEDROOM_DESK]: true
            }
        },
        cubes: BEDROOM_SPACE_KEY,
        sky: { season: SEASON_FUTURE }
    },
    {
        unitIndex: 13,
        description: `Bennett is sitting by himself, away from the lunch crowd. The two bullies have been throwing food at him, trying to rile him up, but to no avail. One looks angry, the other is suggesting that they should leave.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, stoic',
                    instance: STOIC
                },
                [BRAD]: {
                    description: 'front angle, gesturing at Andrew to leave',
                    instance: GESTURING
                },
                [ANDREW]: {
                    description: 'side angle, throwing rocks, angry',
                    instance: THROWING
                }
            },
            [BACKDROP]: {
                [VALLEY_CLOSER_BACKDROP]: true,
                [NEAR_BUILDINGS]: true
            },
            [CUTOUT]: {
                [LOCKER_BANK]: true,
                [TRASH_CAN__LOCKERS]: true,
                [BUSH_SINGLE__LOCKERS]: true,
                [BUSH_DOUBLE__LOCKERS]: true
            },
            [FIXTURE]: {
                [THROWN_FRUIT]: true,
                [BALLED_FOIL__LOCKERS]: true
            }
        },
        cubes: VAN_NUYS_LOCKERS_KEY,
        sky: { time: TIME_NOON, season: SEASON_WINTER }
    },
    {
        unitIndex: 17,
        description: `Bennett is in his secluded spot, watching the bullies flirt with a girl.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side, wistful',
                    instance: WISTFUL
                },
                [BRAD]: {
                    description: 'eating chips',
                    instance: SNACKING
                },
                [ANDREW]: {
                    description: 'playing guitar like an amateur',
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        description: 'back',
                        instance: POPULAR_GIRL
                    }
                }
            },
            [BACKDROP]: {
                [VALLEY_FURTHER_BACKDROP]: true,
                [NEAR_BUILDINGS]: true
            },
            [BUBBLE]: {
                [SKETCHBOOK__ESCAPE_POD]: true,
                [ESCAPE_POD_SKETCH]: true
            },
            [CARDBOARD]: {
                [VAN_NUYS_LOGO]: true
            },
            [CUTOUT]: {
                [TRASH_CAN__QUAD]: true,
                [BUSH_SINGLE__QUAD]: true,
                [BUSH_DOUBLE__QUAD]: true
            }
        },
        cubes: VAN_NUYS_QUAD_KEY,
        sky: { time: TIME_NOON, season: SEASON_WINTER }
    },
    {
        unitIndex: 18,
        description: `Bennett is sitting next to Christopher on a bench outside the principal's office. Through the glass window on the door, Bennett's mother is chewing out the principal.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'front, sitting, sheepish',
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    description: 'front, sitting, staring',
                    instance: STARING
                },
                [MOTHER]: {
                    description: 'side, angry, accusatory',
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        description: 'side, confused, defensive, apologetic',
                        instance: PRINCIPAL
                    }
                }
            },
            [CARDBOARD]: {
                [CORKBOARD]: true
            },
            [DOOR]: {
                [PRINCIPAL_DOOR]: true
            }
        },
        cubes: VAN_NUYS_HALLWAY_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_WINTER }
    }
]