import {
    ACTORS,
    BUBBLES,
    FIXTURES,
    FURNITURES,
    PUPPETS
} from 'constants/scene'

import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_OPEN_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_GATE_OPEN_KEY,
    LIZ_COUCH_PEAFOWL_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky/keys'

import {
    LIZ,
    KHARI
} from '../../scene/actors/keys'

import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from '../../scene/actors/keys/instances/khari'

import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../scene/actors/keys/instances/liz'

import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT
} from '../../scene/things/keys/bubbles'

import {
    TCHOTCHKES
} from '../../scene/things/keys/fixtures'

import {
    LIZ_CUSHIONS
} from '../../scene/things/keys/furniture'

import {
    OPAL_LAP,
    OPAL_GAZING,
    OPAL_COUCH,
    OPAL_LICKING,
    PEAHEN,
    PEACOCK
} from '../../scene/things/keys/puppets'

export default [
    {
        unitIndex: 1,
        description: `Sita is sitting on the couch in her living room, petting a cat.`,
        presences: {
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, seated, petting cat, sad',
                        instance: PETTING_SEATED
                    }
                }
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
                        workedHours: 3.75,
                        description: 'side, standing, petting cat, exhausted',
                        instance: PETTING_STANDING
                    }
                }
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_LICKING]: true
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
                        workedHours: 3.75,
                        description: 'side, seated, pensive',
                        instance: SIFTING_TCHOTCHKES
                    }
                }
            },
            [FIXTURES]: {
                [TCHOTCHKES]: true
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
                        workedHours: 3.75,
                        description: 'side angle, glumly welcoming',
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, cheery in a low-key way',
                    instance: ARRIVED
                }
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_OPEN_KEY,
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
                        workedHours: 3.75,
                        description: 'side, seated, defensive',
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, seated, eating, judgmental',
                    instance: JUDGMENTAL
                }
            },
            [BUBBLES]: {
                [KHARI_ATTACK_SPEECH]: true,
                [LIZ_DEFENCE_SPEECH]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_SEAT_KEY,
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
                        workedHours: 3.75,
                        description: 'side, seated, exhausted',
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'back angle, concerned',
                    instance: CONCERNED
                }
            },
            [BUBBLES]: {
                [LIZ_THOUGHT]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_GATE_OPEN_KEY,
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
                        workedHours: 3.75,
                        description: 'side, seated, asleep',
                        instance: ASLEEP_COUCH
                    }
                }
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [OPAL_GAZING]: true
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
            [ACTORS]: {
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        description: 'side, seated, asleep',
                        instance: ASLEEP_COUCH
                    }
                }
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            },
            [PUPPETS]: {
                [PEAHEN]: true,
                [PEACOCK]: true
            }
        },
        cubes: LIZ_COUCH_PEAFOWL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
