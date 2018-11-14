import {
    ACTORS,
    BACKDROPS,
    BUBBLES,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_PRESENT,
    SEASON_THOUGHT
} from '../../scene/sky'

import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD_BENNETT,
    BRAD_SASHA
} from '../../scene/actorKeys'

import { FEIGNING_FEAR } from '../../scene/instanceKeys/andrew'
import { TYING_TETHER } from '../../scene/instanceKeys/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../scene/instanceKeys/bradSasha'
import { PANICKED } from '../../scene/instanceKeys/preteenBennett'
import { INDIGNANT } from '../../scene/instanceKeys/sasha'

import {
    TAIWAN_MOUNTAINS_BACKDROP,
    SCHOOLBUS_THOUGHT_BACKDROP,
    VAN_NUYS_THOUGHT_BACKDROP
} from '../../scene/backdropKeys'

import {
    TOGETHER_SKETCHBOOK,
    APART_SKETCHBOOK
} from '../../scene/bubbleKeys'

import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    BACKPACK_JEWISH_BOY,
    TETHERBALL_POLE
} from '../../scene/fixtureKeys'

import {
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    VAN_NUYS_SCHOOLHOUSE_LEFT,
    VAN_NUYS_SCHOOLHOUSE_RIGHT
} from '../../scene/flatKeys'

import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR
} from '../../scene/furnitureKeys'

import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from '../../scene/panelKeys'

import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END
} from '../../scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        presences: {
            [BACKDROPS]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [FLATS]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PUPPETS]: {
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
            [BACKDROPS]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLES]: {
                [TOGETHER_SKETCHBOOK]: true
            },
            [FLATS]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PUPPETS]: {
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
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side seated, pretending to read, panicked',
                    instance: PANICKED
                },
                [BRAD_SASHA]: {
                    todo: true,
                    workedHours: 3,
                    compound: 2,
                    description: 'side seated, laughing, braids trailing',
                    instance: CHARMED_SCHOOLBUS
                }
            },
            [BACKDROPS]: {
                [SCHOOLBUS_THOUGHT_BACKDROP]: true
            },
            [FIXTURES]: {
                [BACKPACK_BENNETT]: true,
                [BACKPACK_SASHA]: true,
                [BACKPACK_JEWISH_BOY]: true
            },
            [FURNITURES]: {
                [SCHOOLBUS_SEAT_REAR]: true,
                [SCHOOLBUS_SEAT_FRONT]: true
            },
            [PANELS]: {
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
            [ACTORS]: {
                [BRAD_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    compound: 2,
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'indignant, yelling at bullies',
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    description: 'laughing, feigning fear of Sasha',
                    instance: FEIGNING_FEAR
                }
            },
            [BACKDROPS]: {
                [VAN_NUYS_THOUGHT_BACKDROP]: true
            },
            [FIXTURES]: {
                [TETHERBALL_POLE]: true
            },
            [FLATS]: {
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
            [BACKDROPS]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLES]: {
                [APART_SKETCHBOOK]: true
            },
            [FLATS]: {
                [TAIWAN_CLOUDS]: true,
                [TAIWAN_FOG]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PUPPETS]: {
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
