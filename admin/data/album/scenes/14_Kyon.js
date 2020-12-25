import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../../app/constants/scene/things'
import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_DARK_KEY,
    LIZ_COUCH_PEAFOWL_KEY
} from '../../../../app/constants/scene/scenes'
import {
    TIME_DAWN,
    TIME_MORNING,
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    TIME_NIGHT,
    SEASON_AUTUMN,
    SEASON_NIGHT_MAGIC
} from '../../../../app/constants/scene/sky'
import {
    LIZ,
    KHARI
} from '../../../../app/constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from '../../../../app/constants/scene/actors/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../../../app/constants/scene/actors/liz'
import {
    DISTANT_HOUSES_BACKDROP__GATE,
    OAKLAND_SIDE
} from '../../../../app/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__TCHOTCHKES,
    BUBBLE_MEDIUM__TCHOTCHKES,
    BUBBLE_LARGE__TCHOTCHKES,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_BUSING,
    BUBBLE_SMALL__DISHROOM,
    BUBBLE_MEDIUM__DISHROOM,
    BUBBLE_LARGE__DISHROOM,
    LIZ_THOUGHT_DISHROOM,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    BUBBLE_SMALL__REUNION,
    BUBBLE_MEDIUM__REUNION,
    BUBBLE_LARGE__REUNION,
    LIZ_THOUGHT_REUNION
} from '../../../../app/constants/scene/things/bubbles'
import {
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE
} from '../../../../app/constants/scene/things/doors'
import { TCHOTCHKES } from '../../../../app/constants/scene/things/fixtures'
import { LIZ_COUCH__ROOM } from '../../../../app/constants/scene/things/panels'
import {
    OPAL_COUCH__ROOM,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN
} from '../../../../app/constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Sita is sitting on the couch in her living room, petting a cat.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, petting cat, sad',
                        instance: PETTING_SEATED
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_DAWN, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 2,
        description: `Sita is standing by the window, still depressed.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, standing, petting cat, exhausted',
                        instance: PETTING_STANDING
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_MORNING, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 4,
        description: `Sita is imagining how she met Bennett in three thought bubbles. In the first, she is breaking up with her ex over a cafeteria dinner. In the second, in tears over the incident, she busses her tray, leaving her lancing device behind. In the third, Bennett is hitting on her in the cafeteria, while she looks uncertain.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, pensive',
                        instance: SIFTING_TCHOTCHKES
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__TCHOTCHKES]: true,
                [BUBBLE_MEDIUM__TCHOTCHKES]: true,
                [BUBBLE_LARGE__TCHOTCHKES]: true,
                [LIZ_THOUGHT_DINING]: true,
                [LIZ_THOUGHT_BUSING]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [FIXTURE]: {
                [TCHOTCHKES]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            },
            [PUPPET]: {
                [OPAL_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_NOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 6,
        description: `Sita is still thinking. In the last thought bubble, Bennett is walking away, rejected by Sita. Sita has gotten up and opened the door. Sita's friend is in the doorway, having arrived with Chinese takeout.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side angle, glumly welcoming',
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    description: 'side, cheery in a low-key way',
                    instance: ARRIVED
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__DISHROOM]: true,
                [BUBBLE_MEDIUM__DISHROOM]: true,
                [BUBBLE_LARGE__DISHROOM]: true,
                [LIZ_THOUGHT_DISHROOM]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR_OPEN]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 8,
        description: `Sita and her friend are eating the food. In his speech bubble, Bennett is flirting with a fan, while Sita looks on jealous. In her speech bubble, she is going home with Bennett, triumphant.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, defensive',
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    description: 'side, seated, eating, judgmental',
                    instance: JUDGMENTAL
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [BUBBLE]: {
                [KHARI_SPEECH_ATTACK]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_SEAT_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 9,
        description: `Sita and her friend are eating the food. In his speech bubble, Bennett is flirting with a fan, while Sita looks on jealous. In her speech bubble, she is going home with Bennett, triumphant.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, defensive',
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    description: 'side, seated, eating, judgmental',
                    instance: JUDGMENTAL
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [BUBBLE]: {
                [LIZ_SPEECH_DEFENCE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_SEAT_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 10,
        description: `Sita's friend has left, looking back at her through the window. She is absorbed in her thoughts. In her thought bubble, she and Bennett have gotten back together, both in tears.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, exhausted',
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    description: 'back angle, concerned',
                    instance: CONCERNED
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 11,
        description: `Same scene. No thought bubble. The room is now completely dark.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, asleep',
                        instance: ASLEEP_COUCH
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__REUNION]: true,
                [BUBBLE_MEDIUM__REUNION]: true,
                [BUBBLE_LARGE__REUNION]: true,
                [LIZ_THOUGHT_REUNION]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            },
            [PUPPET]: {
                [OPAL_GAZING]: true
            }
        },
        cubes: LIZ_COUCH_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 12,
        description: `Same scene. Peacocks.`,
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        description: 'side, seated, asleep',
                        instance: ASLEEP_COUCH
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP__GATE]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            },
            [PUPPET]: {
                [PEACOCK]: true,
                [PEAHEN]: true
            }
        },
        cubes: LIZ_COUCH_PEAFOWL_KEY,
        sky: { season: SEASON_NIGHT_MAGIC }
    }
]
