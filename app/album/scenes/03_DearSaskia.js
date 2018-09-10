import {
    ACTORS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES
} from 'constants/scene'

import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
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
    SCHOOLBUS_FRONT,
    SCHOOLBUS_BACK
} from 'scene/cutoutKeys'

import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA
} from 'scene/fixtureKeys'

import {
    TAIWAN_MOUNTAINS_FAR,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAINS_NEAR,
    TAIWAN_CLOUDS,
    TOGETHER_SKETCHBOOK,
    SCHOOLBUS_STREET_THOUGHT,
    VAN_NUYS_SCHOOL_THOUGHT,
    VAN_NUYS_SCHOOLHOUSE,
    APART_SKETCHBOOK
} from 'scene/flatKeys'

import {
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_BACK
} from 'scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        presences: {
            [FLATS]: {
                [TAIWAN_MOUNTAINS_FAR]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
        presences: {
            [FLATS]: {
                [TAIWAN_MOUNTAINS_FAR]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true,
                [TOGETHER_SKETCHBOOK]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
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
            [CUTOUTS]: {
                [SCHOOLBUS_BACK]: true,
                [SCHOOLBUS_FRONT]: true
            },
            [FIXTURES]: {
                [BACKPACK_BENNETT]: true,
                [BACKPACK_SASHA]: true
            },
            [FLATS]: {
                [SCHOOLBUS_STREET_THOUGHT]: true
            },
            [FURNITURES]: {
                [SCHOOLBUS_SEAT_BACK]: true,
                [SCHOOLBUS_SEAT_FRONT]: true
            }
        },
        cubes: SCHOOLBUS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
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
            [FLATS]: {
                [VAN_NUYS_SCHOOL_THOUGHT]: true,
                [VAN_NUYS_SCHOOLHOUSE]: true
            }
        },
        cubes: TETHERBALL_COURT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        presences: {
            [FLATS]: {
                [TAIWAN_MOUNTAINS_FAR]: true,
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAINS_NEAR]: true,
                [TAIWAN_CLOUDS]: true,
                [APART_SKETCHBOOK]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
