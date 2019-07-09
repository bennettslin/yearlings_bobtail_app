import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

import {
    BEDROOM_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY,
    VAN_NUYS_HALLWAY_KEY,
    VAN_NUYS_LOCKERS_KEY,
    VAN_NUYS_QUAD_KEY
} from '../../constants/scene/scenes'

import {
    TIME_ANYTIME,
    SEASON_WINTER
} from '../../scene/sky/keys'

import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN,
    CHRISTOPHER_BENNETT
} from '../../constants/scene/actors'

import {
    THROWING,
    NOODLING
} from '../../constants/scene/actors/instances/andrew'

import {
    GESTURING,
    SNACKING
} from '../../constants/scene/actors/instances/brad'

import {
    STARING
} from '../../constants/scene/actors/instances/christopher'

import {
    BLISSFUL_GUILTY
} from '../../constants/scene/actors/instances/christopherBennett'

import { ARGUING } from '../../constants/scene/actors/instances/mother'

import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from '../../constants/scene/actors/instances/preteenBennett'

import { POPULAR_GIRL } from '../../constants/scene/actors/instances/sasha'

import { ASLEEP } from '../../constants/scene/actors/instances/songs'

import { PRINCIPAL } from '../../constants/scene/actors/instances/tristan'

import {
    VAN_NUYS_SCHOOL_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    DOGS_SKETCH,
    ESCAPE_POD_SKETCH
} from '../../constants/scene/things/bubbles'

import {
    BLOOM_COUNTY_POSTER,
    VAN_NUYS_LOGO,
    CORKBOARD
} from '../../constants/scene/things/cardboards'

import {
    LOCKER_BANK,
    TRASH_CAN__LOCKERS,
    TRASH_CAN__QUAD,
    VAN_NUYS_PLANT__LOCKERS,
    VAN_NUYS_PLANT__QUAD
} from '../../constants/scene/things/cutouts'

import {
    CAPTAIN_BED_LAMP,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE,
    THROWN_FRUIT
} from '../../constants/scene/things/fixtures'

import { BEDROOM_BUS } from '../../constants/scene/things/flats'

import {
    CAPTAIN_BED_PILLOW,
    CAPTAIN_BED_BLANKET
} from '../../constants/scene/things/furniture'

import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from '../../constants/scene/things/panels'

import {
    PCHELKA_MUSHKA_ROCKET,
    EARTH,
    SPACE_COLONY
} from '../../constants/scene/things/puppets'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
export default [
    {
        unitIndex: 1,
        description: `Bennett's room, but seemingly no one is there.`,
        presences: {
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [FURNITURE]: {
                [CAPTAIN_BED_PILLOW]: true,
                [CAPTAIN_BED_BLANKET]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 2,
        description: `Bennett and Christopher are under his bunk bed. Christopher is injured, but happily playing. Bennett looks guilty. There is a drawing of the two as dogs.`,
        presences: {
            [ACTOR]: {
                [CHRISTOPHER_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'w-sitting, blissful',
                    instance: BLISSFUL_GUILTY
                }
            },
            [BUBBLE]: {
                [DOGS_SKETCH]: true
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [FIXTURE]: {
                [CAPTAIN_BED_LAMP]: true,
                [BENNETT_LETTERS]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [BEDROOM_FENCE]: true
            }
        },
        cubes: BEDROOM_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 6,
        description: `Bennett is at home in bed, pretending to be sick. He is stuffing money from red pouches into a postage envelope. In the window, the schoolbus is driving off, leaving him behind. The bullies are visible through the schoolbus windows, laughing at him.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, sitting up in bed, feigning sick',
                    instance: FEIGNING_SICK
                }
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [FIXTURE]: {
                [RED_ENVELOPE_MONEY]: true
            },
            [FLAT]: {
                [BEDROOM_BUS]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [CAPTAIN_BED]: true
            }
        },
        cubes: BEDROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 9,
        description: `Bennett is in bed sleeping. In his dream bubble, he imagines two dogs pulling a rocket.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'in bed, asleep, turned away',
                    instance: ASLEEP
                }
            },
            [CARDBOARD]: {
                [BLOOM_COUNTY_POSTER]: true
            },
            [PANEL]: {
                [CAPTAIN_BED]: true,
                [BEDROOM_FENCE]: true
            },
            [PUPPET]: {
                [PCHELKA_MUSHKA_ROCKET]: true
            }
        },
        cubes: BEDROOM_DOGS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 10,
        description: `Bennett is at his desk, reading a letter and crying. In his thought bubble, he is standing alone on Earth, looking up into space.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, sitting, shaken, scared',
                    instance: SHAKEN
                }
            },
            [FIXTURE]: {
                [BEYONDER_ENVELOPE]: true
            },
            [PANEL]: {
                [BEDROOM_DESK]: true,
                [BEDROOM_FENCE]: true
            },
            [PUPPET]: {
                [EARTH]: true,
                [SPACE_COLONY]: true
            }
        },
        cubes: BEDROOM_SPACE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 13,
        description: `Bennett is sitting by himself, away from the lunch crowd. The two bullies have been throwing food at him, trying to rile him up, but to no avail. One looks angry, the other is suggesting that they should leave.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, stoic',
                    instance: STOIC
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front angle, gesturing at Andrew to leave',
                    instance: GESTURING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, throwing rocks, angry',
                    instance: THROWING
                }
            },
            [BACKDROP]: {
                [VAN_NUYS_SCHOOL_BACKDROP]: true
            },
            [CUTOUT]: {
                [LOCKER_BANK]: true,
                [TRASH_CAN__LOCKERS]: true,
                [VAN_NUYS_PLANT__LOCKERS]: true
            },
            [FIXTURE]: {
                [THROWN_FRUIT]: true
            }
        },
        cubes: VAN_NUYS_LOCKERS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 17,
        description: `Bennett is in his secluded spot, watching the bullies flirt with a girl.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, wistful',
                    instance: WISTFUL
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'eating chips',
                    instance: SNACKING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'playing guitar like an amateur',
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'back',
                        instance: POPULAR_GIRL
                    }
                }
            },
            [BACKDROP]: {
                [VAN_NUYS_SCHOOL_BACKDROP]: true
            },
            [BUBBLE]: {
                [ESCAPE_POD_SKETCH]: true
            },
            [CARDBOARD]: {
                [VAN_NUYS_LOGO]: true
            },
            [CUTOUT]: {
                [TRASH_CAN__QUAD]: true,
                [VAN_NUYS_PLANT__QUAD]: true
            }
        },
        cubes: VAN_NUYS_QUAD_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 18,
        description: `Bennett is sitting next to Christopher on a bench outside the principal's office. Through the glass window on the door, Bennett's mother is chewing out the principal.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, sitting, sheepish',
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, sitting, staring',
                    instance: STARING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, angry, accusatory',
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'side, confused, defensive, apologetic',
                        instance: PRINCIPAL
                    }
                }
            },
            [CARDBOARD]: {
                [CORKBOARD]: true
            }
        },
        cubes: VAN_NUYS_HALLWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
