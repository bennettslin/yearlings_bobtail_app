import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from '../../../../app/constants/scene/things'
import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY
} from '../../../../app/constants/scene/scenes'
import {
    SEASON_PRESENT,
    SEASON_THOUGHT
} from '../../../../app/constants/scene/sky'
import {
    PRETEEN_BENNETT,
    SASHA,
    ANDREW,
    BRAD_BENNETT,
    BRAD_SASHA
} from '../../../../app/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../app/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../app/constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../../../app/constants/scene/actors/bradSasha'
import { PANICKED } from '../../../../app/constants/scene/actors/preteenBennett'
import { INDIGNANT } from '../../../../app/constants/scene/actors/sasha'
import {
    THOUGHT_LARGE__LEFT,
    THOUGHT_LARGE__RIGHT,
    DISTANT_HOUSES_BACKDROP,
    TAIWAN_MOUNTAINS_BACKDROP,
    NEAR_BUILDINGS
} from '../../../../app/constants/scene/things/backdrops'
import {
    SKETCH_TOGETHER,
    SKETCHBOOK__TOGETHER,
    BUBBLE_SMALL__LEFT,
    BUBBLE_MEDIUM__LEFT,
    BUBBLE_LARGE__LEFT,
    BUBBLE_SMALL__RIGHT,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_LARGE__RIGHT,
    SKETCH_APART,
    SKETCHBOOK__APART
} from '../../../../app/constants/scene/things/bubbles'
import {
    CAMPUS_TREE_SINGLE__TETHERBALL,
    CAMPUS_TREE_DOUBLE__TETHERBALL
} from '../../../../app/constants/scene/things/cutouts'
import { BACKPACK_BENNETT } from '../../../../app/constants/scene/things/fixtures'
import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE__RIGHT,
    SCHOOL_BUNGALOW
} from '../../../../app/constants/scene/things/flats'
import {
    TAIWAN_BRIDGE,
    TAIWAN_HAZE__CLOUD,
    TAIWAN_HAZE__FOG,
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT
} from '../../../../app/constants/scene/things/panels'
import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_ANITA_BEGIN,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_FATHER_BEGIN,
    PUPPET_MOTHER_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_ANITA_MIDDLE,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_MIDDLE,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_ANITA_END,
    PUPPET_CHRISTOPHER_END,
    PUPPET_FATHER_END,
    PUPPET_MOTHER_END
} from '../../../../app/constants/scene/things/puppets'

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
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_BEGIN]: true,
                [PUPPET_ANITA_BEGIN]: true,
                [PUPPET_CHRISTOPHER_BEGIN]: true,
                [PUPPET_FATHER_BEGIN]: true,
                [PUPPET_MOTHER_BEGIN]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT }
    },
    {
        unitIndex: 4,
        description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLE]: {
                [SKETCHBOOK__TOGETHER]: true,
                [SKETCH_TOGETHER]: true
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PANEL]: {
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_MIDDLE]: true,
                [PUPPET_ANITA_MIDDLE]: true,
                [PUPPET_CHRISTOPHER_MIDDLE]: true,
                [PUPPET_FATHER_MIDDLE]: true,
                [PUPPET_MOTHER_MIDDLE]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT }
    },
    {
        unitIndex: 6,
        description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated next to her who is wearing a yarmulke.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side seated, pretending to read, panicked',
                    instance: PANICKED
                },
                [BRAD_SASHA]: {
                    description: 'side seated, laughing, braids trailing',
                    instance: CHARMED_SCHOOLBUS
                }
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__LEFT]: true,
                [DISTANT_HOUSES_BACKDROP]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__LEFT]: true,
                [BUBBLE_MEDIUM__LEFT]: true,
                [BUBBLE_LARGE__LEFT]: true
            },
            [FIXTURE]: {
                [BACKPACK_BENNETT]: true
            },
            [FLAT]: {
                [DRIVING_HOUSE_LEFT]: true,
                [DRIVING_HOUSE__RIGHT]: true
            },
            [PANEL]: {
                [SCHOOLBUS_INTERIOR]: true,
                [SCHOOLBUS_EXTERIOR]: true,
                [SCHOOLBUS_SEAT__LEFT]: true,
                [SCHOOLBUS_SEAT__RIGHT]: true
            }
        },
        cubes: SCHOOLBUS_KEY,
        sky: { season: SEASON_THOUGHT }
    },
    {
        unitIndex: 9,
        description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
        presences: {
            [ACTOR]: {
                [BRAD_BENNETT]: {
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: TYING_TETHER
                },
                [SASHA]: {
                    description: 'indignant, yelling at bullies',
                    instance: INDIGNANT
                },
                [ANDREW]: {
                    description: 'laughing, feigning fear of Sasha',
                    instance: FEIGNING_FEAR
                }
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__RIGHT]: true,
                [NEAR_BUILDINGS]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__RIGHT]: true,
                [BUBBLE_MEDIUM__RIGHT]: true,
                [BUBBLE_LARGE__RIGHT]: true
            },
            [CUTOUT]: {
                [CAMPUS_TREE_SINGLE__TETHERBALL]: true,
                [CAMPUS_TREE_DOUBLE__TETHERBALL]: true
            },
            [FLAT]: {
                [SCHOOL_BUNGALOW]: true
            }
        },
        cubes: TETHERBALL_COURT_KEY,
        sky: { season: SEASON_THOUGHT }
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true
            },
            [BUBBLE]: {
                [SKETCHBOOK__APART]: true,
                [SKETCH_APART]: true
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true
            },
            [PANEL]: {
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true
            },
            [PUPPET]: {
                [PUPPET_BENNETT_END]: true,
                [PUPPET_ANITA_END]: true,
                [PUPPET_CHRISTOPHER_END]: true,
                [PUPPET_FATHER_END]: true,
                [PUPPET_MOTHER_END]: true
            }
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT }
    }
]
