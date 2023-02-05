import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET,
} from '../../../../src/constants/scene/things'
import {
    PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_COURT_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_PRESENT,
    SEASON_THOUGHT,
} from '../../../../src/constants/scene/sky'
import {
    ANDREW,
    BRAD_BENNETT,
    BRAD_SASHA,
    PRETEEN_BENNETT,
    SASHA,
} from '../../../../src/constants/scene/actors'
import { FEIGNING_FEAR } from '../../../../src/constants/scene/actors/andrew'
import { TYING_TETHER } from '../../../../src/constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../../../src/constants/scene/actors/bradSasha'
import { PANICKED } from '../../../../src/constants/scene/actors/preteenBennett'
import { INDIGNANT } from '../../../../src/constants/scene/actors/sasha'
import {
    TAIWAN_MOUNTAINS_BACKDROP,
    THOUGHT_LARGE__LEFT,
    THOUGHT_LARGE__RIGHT,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_LARGE__SCHOOLBUS,
    BUBBLE_LARGE__RIGHT,
    BUBBLE_MEDIUM__SCHOOLBUS,
    BUBBLE_MEDIUM__RIGHT,
    BUBBLE_SMALL__SCHOOLBUS,
    BUBBLE_SMALL__RIGHT,
    SKETCHBOOK__APART,
    SKETCHBOOK__TOGETHER,
    SKETCH_APART,
    SKETCH_TOGETHER,
} from '../../../../src/constants/scene/things/bubbles'
import {
    CAMPUS_TREE_DOUBLE__TETHERBALL,
    CAMPUS_TREE_SINGLE__TETHERBALL,
} from '../../../../src/constants/scene/things/cutouts'
import { BACKPACK_BENNETT } from '../../../../src/constants/scene/things/fixtures'
import {
    DISTANT_HOUSES,
    DRIVING_HOUSE_LEFT,
    DRIVING_HOUSE__RIGHT,
    NEAR_BUILDINGS,
    SCHOOL_BUNGALOW,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
} from '../../../../src/constants/scene/things/flats'
import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR,
    SCHOOLBUS_SEAT__LEFT,
    SCHOOLBUS_SEAT__RIGHT,
    TAIWAN_BRIDGE,
    TAIWAN_HAZE__CLOUD,
    TAIWAN_HAZE__FOG,
} from '../../../../src/constants/scene/things/panels'
import {
    PUPPET_ANITA_BEGIN,
    PUPPET_ANITA_END,
    PUPPET_ANITA_MIDDLE,
    PUPPET_BENNETT_BEGIN,
    PUPPET_BENNETT_END,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_CHRISTOPHER_END,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_BEGIN,
    PUPPET_FATHER_END,
    PUPPET_FATHER_MIDDLE,
    PUPPET_MOTHER_BEGIN,
    PUPPET_MOTHER_END,
    PUPPET_MOTHER_MIDDLE,
} from '../../../../src/constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true,
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true,
            },
            [PANEL]: {
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true,
            },
            [PUPPET]: {
                [PUPPET_BENNETT_BEGIN]: true,
                [PUPPET_ANITA_BEGIN]: true,
                [PUPPET_CHRISTOPHER_BEGIN]: true,
                [PUPPET_FATHER_BEGIN]: true,
                [PUPPET_MOTHER_BEGIN]: true,
            },
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT },
    },
    {
        unitIndex: 4,
        description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true,
            },
            [BUBBLE]: {
                [SKETCHBOOK__TOGETHER]: true,
                [SKETCH_TOGETHER]: true,
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true,
            },
            [PANEL]: {
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true,
            },
            [PUPPET]: {
                [PUPPET_BENNETT_MIDDLE]: true,
                [PUPPET_ANITA_MIDDLE]: true,
                [PUPPET_CHRISTOPHER_MIDDLE]: true,
                [PUPPET_FATHER_MIDDLE]: true,
                [PUPPET_MOTHER_MIDDLE]: true,
            },
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT },
    },
    {
        unitIndex: 6,
        description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated next to her who is wearing a yarmulke.`,
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    description: 'side seated, pretending to read, panicked',
                    instance: PANICKED,
                },
                [BRAD_SASHA]: {
                    description: 'side seated, laughing, braids trailing',
                    instance: CHARMED_SCHOOLBUS,
                },
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__LEFT]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__SCHOOLBUS]: true,
                [BUBBLE_MEDIUM__SCHOOLBUS]: true,
                [BUBBLE_LARGE__SCHOOLBUS]: true,
            },
            [FIXTURE]: {
                [BACKPACK_BENNETT]: true,
            },
            [FLAT]: {
                [DISTANT_HOUSES]: true,
                [DRIVING_HOUSE_LEFT]: true,
                [DRIVING_HOUSE__RIGHT]: true,
            },
            [PANEL]: {
                [SCHOOLBUS_INTERIOR]: true,
                [SCHOOLBUS_SEAT__LEFT]: true,
                [SCHOOLBUS_SEAT__RIGHT]: true,
                [SCHOOLBUS_EXTERIOR]: true,
            },
        },
        cubes: SCHOOLBUS_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 9,
        description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
        presences: {
            [ACTOR]: {
                [BRAD_BENNETT]: {
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: TYING_TETHER,
                },
                [SASHA]: {
                    description: 'indignant, yelling at bullies',
                    instance: INDIGNANT,
                },
                [ANDREW]: {
                    description: 'laughing, feigning fear of Sasha',
                    instance: FEIGNING_FEAR,
                },
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__RIGHT]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__RIGHT]: true,
                [BUBBLE_MEDIUM__RIGHT]: true,
                [BUBBLE_LARGE__RIGHT]: true,
            },
            [CUTOUT]: {
                [CAMPUS_TREE_SINGLE__TETHERBALL]: true,
                [CAMPUS_TREE_DOUBLE__TETHERBALL]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
                [SCHOOL_BUNGALOW]: true,
            },
        },
        cubes: TETHERBALL_COURT_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        presences: {
            [BACKDROP]: {
                [TAIWAN_MOUNTAINS_BACKDROP]: true,
            },
            [BUBBLE]: {
                [SKETCHBOOK__APART]: true,
                [SKETCH_APART]: true,
            },
            [FLAT]: {
                [TAIWAN_MOUNTAINS_BRIDGED]: true,
                [TAIWAN_MOUNTAIN_LEFT]: true,
                [TAIWAN_MOUNTAIN_RIGHT]: true,
            },
            [PANEL]: {
                [TAIWAN_BRIDGE]: true,
                [TAIWAN_HAZE__CLOUD]: true,
                [TAIWAN_HAZE__FOG]: true,
            },
            [PUPPET]: {
                [PUPPET_BENNETT_END]: true,
                [PUPPET_ANITA_END]: true,
                [PUPPET_CHRISTOPHER_END]: true,
                [PUPPET_FATHER_END]: true,
                [PUPPET_MOTHER_END]: true,
            },
        },
        cubes: PUPPET_SHOW_KEY,
        sky: { season: SEASON_PRESENT },
    },
]
