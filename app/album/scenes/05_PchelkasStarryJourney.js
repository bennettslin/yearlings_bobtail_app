import {
    BEDROOM_KEY,
    BEDROOM_OPEN_KEY,
    BEDROOM_DOGS_KEY,
    BEDROOM_SPACE_KEY,
    VAN_NUYS_HALLWAY_KEY,
    VAN_NUYS_LOCKERS_KEY,
    VAN_NUYS_QUAD_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_WINTER
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN
} from 'scene/actorKeys'

import {
    THROWING,
    NOODLING
} from 'scene/instanceKeys/andrew'

import {
    GESTURING,
    SNACKING
} from 'scene/instanceKeys/brad'

import {
    BLISSFUL,
    STARING
} from 'scene/instanceKeys/christopher'

import { ARGUING } from 'scene/instanceKeys/mother'

import {
    GUILT_RIDDEN,
    FEIGNING_SICK,
    ASLEEP,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from 'scene/instanceKeys/preteenBennett'

import { POPULAR_GIRL } from 'scene/instanceKeys/sasha'

import { PRINCIPAL } from 'scene/instanceKeys/tristan'

// import {
//     CAPTAIN_BED_LAMP
// } from 'scene/fixtureKeys'

// import {
//     BEDROOM_BACKDROP,
//     BEDROOM_BUS_BACKDROP,
//     CAPTAIN_BED_DRAWERS,
//     DOGS_SKETCHBOOK,
//     SPACE_STATION_SKETCHBOOK
// } from 'scene/flatKeys'

// import {
//     BEDROOM_BLINDS,
//     BEDROOM_BLINDS_OPEN,
//     CAPTAIN_BED_MATTRESS
// } from 'scene/furnitureKeys'

// import {
//     PCHELKA,
//     MUSHKA,
//     ROCKET
// } from 'scene/puppetKeys'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
module.exports = [
    {
        unitIndex: 1,
        description: `Bennett's room, but seemingly no one is there.`,
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying on stomach, drawing, guilty',
                    instance: GUILT_RIDDEN
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'w-sitting, blissful',
                    instance: BLISSFUL
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, sitting up in bed, feigning sick',
                    instance: FEIGNING_SICK
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'in bed, asleep, turned away',
                    instance: ASLEEP
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, sitting, shaken, scared',
                    instance: SHAKEN
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, stoic',
                    instance: STOIC
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, gesturing at friend to leave',
                    instance: GESTURING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, throwing rocks, angry',
                    instance: THROWING
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, wistful',
                    instance: WISTFUL
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    description: 'eating chips',
                    instance: SNACKING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    description: 'playing guitar like an amateur',
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        todo: true,
                        workedHours: 3,
                        description: 'back',
                        instance: POPULAR_GIRL
                    }
                }
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
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, sitting, sheepish',
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, sitting, staring',
                    instance: STARING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, angry, accusatory',
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, confused, defensive, apologetic',
                        instance: PRINCIPAL
                    }
                }
            }
        },
        cubes: VAN_NUYS_HALLWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
