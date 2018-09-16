import {
    ACTORS,
    // CUTOUTS,
    // FIXTURES,
    // FLATS,
    DOORS,
    FURNITURES,
    PUPPETS
} from 'constants/scene'

import { LIZ_COUCH_KEY } from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    LIZ,
    KHARI
} from 'scene/actorKeys'

import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from 'scene/instanceKeys/khari'

import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from 'scene/instanceKeys/liz'

import {
    LIZ_BLINDS_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN
} from 'scene/doorKeys'

import {
    LIZ_CUSHIONS
} from 'scene/furnitureKeys'

import {
    OPAL_LAP,
    OPAL_WINDOW,
    OPAL_COUCH,
    PEAHEN,
    PEACOCK
} from 'scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Sita is sitting on the couch in her living room, petting a cat.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, petting cat, sad',
                        instance: PETTING_SEATED
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_LAP]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 2,
        description: `Sita is standing by the window, still depressed.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, petting cat, sad',
                        instance: PETTING_STANDING
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_WINDOW]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Sita is imagining how she met Bennett in three thought bubbles. In the first, she is breaking up with her ex over a cafeteria dinner. In the second, in tears over the incident, she busses her tray, leaving her lancing device behind. In the third, Bennett is hitting on her in the cafeteria, while she looks uncertain.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, pensive',
                        instance: SIFTING_TCHOTCHKES
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Sita is still thinking. In the last thought bubble, Bennett is walking away, rejected by Sita. Sita has gotten up and opened the door. Sita's friend is in the doorway, having arrived with Chinese takeout.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, glumly welcoming',
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, cheery in a low-key way',
                    instance: ARRIVED
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR_OPEN]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Sita and her friend are eating the food. In his speech bubble, Bennett is flirting with a fan, while Sita looks on jealous. In her speech bubble, she is going home with Bennett, triumphant.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, defensive',
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, seated, eating, judgmental',
                    instance: JUDGMENTAL
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Sita's friend has left, looking back at her through the window. She is absorbed in her thoughts. In her thought bubble, she and Bennett have gotten back together, both in tears.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, exhausted',
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back angle, concerned',
                    instance: CONCERNED
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `Same scene. No thought bubble. The room is now completely dark.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, asleep',
                        instance: ASLEEP_COUCH
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_WINDOW]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 12,
        description: `Same scene. Peacocks.`,
        presences: {
            [DOORS]: {
                [LIZ_BLINDS_OPEN]: true,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [PEAHEN]: true,
                [PEACOCK]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
