import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PUPPETS
} from 'constants/scene'

import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_PRESENT,
    SEASON_PAST
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    SASHA,
    BRAD,
    ANDREW
} from 'scene/actorKeys'

import { FEIGNING_FEAR } from 'scene/instanceKeys/andrew'

import {
    JEWISH_BOY,
    TYING
} from 'scene/instanceKeys/brad'

import {
    PANICKED,
    TETHERED
} from 'scene/instanceKeys/preteenBennett'

import {
    CHARMED,
    INDIGNANT
} from 'scene/instanceKeys/sasha'

import {
    TAIWAN_MOUNTAINS_BACKDROP,
    SCHOOLBUS_THOUGHT_BACKDROP,
    VAN_NUYS_THOUGHT_BACKDROP
} from 'scene/backdropKeys'

import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from 'scene/cutoutKeys'

import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA
} from 'scene/fixtureKeys'

import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    VAN_NUYS_SCHOOLHOUSE,
    APART_SKETCHBOOK
} from 'scene/flatKeys'

import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR
} from 'scene/furnitureKeys'

import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_ANITA_BEGIN,
    PUPPET_MOTHER_BEGIN,
    PUPPET_FATHER_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_ANITA_MIDDLE,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_FATHER_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_ANITA_END,
    PUPPET_MOTHER_END,
    PUPPET_FATHER_END
} from 'scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        presences: {
            [BACKDROPS]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [FLATS]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true
            },
            [PUPPETS]: {
                [PUPPET_BENNETT_BEGIN]: true,
                [PUPPET_ANITA_BEGIN]: true,
                [PUPPET_MOTHER_BEGIN]: true,
                [PUPPET_FATHER_BEGIN]: true
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
            [FLATS]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true,
                [TOGETHER_SKETCHBOOK]: true
            },
            [PUPPETS]: {
                [PUPPET_BENNETT_MIDDLE]: true,
                [PUPPET_ANITA_MIDDLE]: true,
                [PUPPET_MOTHER_MIDDLE]: true,
                [PUPPET_FATHER_MIDDLE]: true
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
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side seated, laughing, braids trailing',
                    instance: CHARMED
                },
                [BRAD]: {
                    jewishBoy: {
                        todo: true,
                        workedHours: 3,
                        description: 'side seated, turned away, pointing to window',
                        instance: JEWISH_BOY
                    }
                }
            },
            [BACKDROPS]: {
                [SCHOOLBUS_THOUGHT_BACKDROP]: true
            },
            [CUTOUTS]: {
                [SCHOOLBUS_INTERIOR]: true,
                [SCHOOLBUS_EXTERIOR]: true
            },
            [FIXTURES]: {
                [BACKPACK_BENNETT]: true,
                [BACKPACK_SASHA]: true
            },
            [FURNITURES]: {
                [SCHOOLBUS_SEAT_REAR]: true,
                [SCHOOLBUS_SEAT_FRONT]: true
            }
        },
        cubes: SCHOOLBUS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PAST
        }
    },
    {
        unitIndex: 9,
        description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
        presences: {
            [ACTORS]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: TETHERED
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
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    description: 'laughing, tying up Bennett',
                    instance: TYING
                }
            },
            [BACKDROPS]: {
                [VAN_NUYS_THOUGHT_BACKDROP]: true
            },
            [FLATS]: {
                [VAN_NUYS_SCHOOLHOUSE]: true
            }
        },
        cubes: TETHERBALL_COURT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PAST
        }
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        presences: {
            [BACKDROPS]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [FLATS]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true,
                [APART_SKETCHBOOK]: true
            },
            [PUPPETS]: {
                [PUPPET_BENNETT_END]: true,
                [PUPPET_ANITA_END]: true,
                [PUPPET_MOTHER_END]: true,
                [PUPPET_FATHER_END]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PRESENT
        }
    }
]
