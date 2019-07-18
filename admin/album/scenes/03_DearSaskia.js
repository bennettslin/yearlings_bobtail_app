import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from 'constants/scene'

import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY
} from '../../constants/scene/scenes'

import {
    TIME_ANYTIME,
    SEASON_PRESENT,
    SEASON_THOUGHT
} from '../../scene/sky/keys'

import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD_BENNETT,
    BRAD_SASHA
} from '../../constants/scene/actors'

import { FEIGNING_FEAR } from '../../constants/scene/actors/instances/andrew'
import { TYING_TETHER } from '../../constants/scene/actors/instances/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../constants/scene/actors/instances/bradSasha'
import { PANICKED } from '../../constants/scene/actors/instances/preteenBennett'
import { INDIGNANT } from '../../constants/scene/actors/instances/sasha'

import {
    TAIWAN_MOUNTAINS_BACKDROP,
    SCHOOLBUS_THOUGHT_BACKDROP,
    VAN_NUYS_THOUGHT_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    TOGETHER_SKETCH,
    SKETCHBOOK__TOGETHER,
    APART_SKETCH,
    SKETCHBOOK__APART
} from '../../constants/scene/things/bubbles'

import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    BACKPACK_JEWISH_BOY
} from '../../constants/scene/things/fixtures'

import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT
} from '../../constants/scene/things/flats'

import {
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from '../../constants/scene/things/panels'

import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END
} from '../../constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PANEL]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_BEGIN]: true,
                [PUPPET_FAMILY_BEGIN]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PRESENT
        }
    },
    {
        unitIndex: 4,
        description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLE]: {
                [TOGETHER_SKETCH]: true,
                [SKETCHBOOK__TOGETHER]: true
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PANEL]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_MIDDLE]: true,
                [PUPPET_FAMILY_MIDDLE]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PRESENT
        }
    },
    {
        unitIndex: 6,
        description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated next to her who is wearing a yarmulke.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side seated, pretending to read, panicked',
                    instance: PANICKED
                },
                [BRAD_SASHA]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'side seated, laughing, braids trailing',
                    instance: CHARMED_SCHOOLBUS
                }
            },
            [BACKDROP]: {
                [SCHOOLBUS_THOUGHT_BACKDROP]: true
            },
            [FIXTURE]: {
                [BACKPACK_BENNETT]: true,
                [BACKPACK_SASHA]: true,
                [BACKPACK_JEWISH_BOY]: true
            },
            [PANEL]: {
                [SCHOOLBUS_INTERIOR]: true,
                [SCHOOLBUS_EXTERIOR]: true
            }
        },
        cubes: SCHOOLBUS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 9,
        description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
        presences: {
            [ACTOR]: {
                [BRAD_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'indignant, yelling at bullies',
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'laughing, feigning fear of Sasha',
                    instance: FEIGNING_FEAR
                }
            },
            [BACKDROP]: {
                [VAN_NUYS_THOUGHT_BACKDROP]: true
            },
            [FLAT]: {
                [VAN_NUYS_SCHOOLHOUSE_LEFT]: true,
                [VAN_NUYS_SCHOOLHOUSE_RIGHT]: true
            }
        },
        cubes: TETHERBALL_COURT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLE]: {
                [APART_SKETCH]: true,
                [SKETCHBOOK__APART]: true
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PANEL]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_END]: true,
                [PUPPET_FAMILY_END]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PRESENT
        }
    }
]
