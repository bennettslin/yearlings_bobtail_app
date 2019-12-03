import { ACTOR } from '../../constants/scene'
import {
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../constants/scene/things'
import {
    LIZ_COUCH_KEY,
    LIZ_COUCH_SEAT_KEY,
    LIZ_COUCH_DARK_KEY
} from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky/keys'
import {
    LIZ,
    KHARI
} from '../../constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from '../../constants/scene/actors/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../constants/scene/actors/liz'
import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT
} from '../../constants/scene/things/bubbles'
import {
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE
} from '../../constants/scene/things/doors'
import { TCHOTCHKES } from '../../constants/scene/things/fixtures'
import { LIZ_COUCH } from '../../constants/scene/things/panels'
import {
    OPAL_COUCH,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN
} from '../../constants/scene/things/puppets'

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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [FIXTURE]: {
                [TCHOTCHKES]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PUPPET]: {
                [OPAL_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 7,
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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR_OPEN]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [BUBBLE]: {
                [KHARI_ATTACK_SPEECH]: true,
                [LIZ_DEFENCE_SPEECH]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_SEAT_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [BUBBLE]: {
                [BUBBLE_SMALL__LIZ]: true,
                [BUBBLE_MEDIUM__LIZ]: true,
                [BUBBLE_LARGE__LIZ]: true,
                [LIZ_THOUGHT]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PUPPET]: {
                [OPAL_GAZING]: true
            }
        },
        cubes: LIZ_COUCH_DARK_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
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
            [DOOR]: {
                [LIZ_BLINDS_INSIDE_OPEN]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PUPPET]: {
                [PEACOCK]: true,
                [PEAHEN]: true
            }
        },
        cubes: LIZ_COUCH_DARK_KEY,
        sky: { time: TIME_ANYTIME, season: SEASON_AUTUMN }
    }
]
