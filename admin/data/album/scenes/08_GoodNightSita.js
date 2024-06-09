import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    BACKSTAGE_KEY,
    GO_KARTS_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    MUSEUM_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_SUMMER,
    TIME_AFTERNOON,
    TIME_EVENING,
} from '../../../../src/constants/scene/sky'
import {
    BENNETT,
    KHARI,
    LIZ,
    STEPHANIE,
} from '../../../../src/constants/scene/actors'
import { DOUBLE_ALBERT } from '../../../../src/constants/scene/actors/khari'
import { FLAPPER } from '../../../../src/constants/scene/actors/stephanie'
import {
    BACKSTAGE,
    DATE_ENDED,
    DATE_ENDING,
    GO_KARTS,
    MUSEUM,
} from '../../../../src/constants/scene/actors/songs'
import {
    DRIVING_BACKDROP,
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE__LEVEL,
    THEATRE_SEATS_BACKDROP,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_LARGE__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    BUBBLE_SMALL__GO_KART,
    THOUGHT_GO_KART,
} from '../../../../src/constants/scene/things/bubbles'
import {
    CACTUS_DOUBLE__LIZ_GATE,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_SINGLE__LIZ_ENDING,
    CAVEMAN_BONES,
    CYPRESS_DOUBLE__LIZ_GATE,
    CYPRESS_SINGLE__LIZ_ENDED,
    CYPRESS_SINGLE__LIZ_ENDING,
    LAMPPOST__LIZ_GATE,
    MUSEUM_DISPLAY,
    STAGE_CUTOUT,
    TRAFFIC_LIGHT_FRONT,
} from '../../../../src/constants/scene/things/cutouts'
import {
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
} from '../../../../src/constants/scene/things/doors'
import { MANNEQUIN } from '../../../../src/constants/scene/things/fixtures'
import {
    GO_KART_TRACK,
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE,
    THEATRE_DRAPE_SIDE__LEFT,
    THEATRE_DRAPE_SIDE__RIGHT,
    THEATRE_DRAPE_TOP,
    THEATRE_LEG_SIDE__LEFT,
    THEATRE_LEG_SIDE__RIGHT,
    THEATRE_LEG_TOP,
} from '../../../../src/constants/scene/things/flats'
import {
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT,
    GO_KART_SEAT__LEFT,
    GO_KART_SEAT__RIGHT,
} from '../../../../src/constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett and Sita are standing outside her gate at night. In a thought bubble, he is reaching out to Sita, who is reaching back.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [CYPRESS_DOUBLE__LIZ_GATE]: true,
                [CYPRESS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_DOUBLE__LIZ_GATE]: true,
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDING]: true,
                [LIZ_GATE_OUTSIDE]: true,
            },
        },
        cubes: LIZ_GATE_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER },
    },
    {
        unitIndex: 4,
        description: `In a thought bubble, Bennett and Sita are at a museum, looking at the skeleton of an early human. Bennett is standing behind the display case, leaning in towards Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, leaning towards Sita',
                    instance: MUSEUM,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, hands behind back, guarded',
                        instance: MUSEUM,
                    },
                },
            },
            [CUTOUT]: {
                [MUSEUM_DISPLAY]: true,
                [CAVEMAN_BONES]: true,
            },
        },
        cubes: MUSEUM_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SUMMER },
    },
    {
        unitIndex: 7,
        description: `In a thought bubble, Bennett and Sita are backstage after a play. While Sita and her friend are chatting away, Bennett looks away and is visibly uncomfortable.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, jealous',
                    instance: BACKSTAGE,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, warm, guard down',
                        instance: BACKSTAGE,
                    },
                },
                [KHARI]: {
                    description: 'side angle, friendly',
                    instance: DOUBLE_ALBERT,
                },
                [STEPHANIE]: {
                    actor: {
                        description: 'side, rushing',
                        instance: FLAPPER,
                    },
                },
            },
            [BACKDROP]: {
                [THEATRE_SEATS_BACKDROP]: true,
            },
            [CUTOUT]: {
                [STAGE_CUTOUT]: true,
            },
            [FIXTURE]: {
                [MANNEQUIN]: true,
            },
            [FLAT]: {
                [THEATRE_DRAPE_SIDE__LEFT]: true,
                [THEATRE_DRAPE_SIDE__RIGHT]: true,
                [THEATRE_DRAPE_TOP]: true,
                [THEATRE_LEG_SIDE__LEFT]: true,
                [THEATRE_LEG_SIDE__RIGHT]: true,
                [THEATRE_LEG_TOP]: true,
            },
        },
        cubes: BACKSTAGE_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER },
    },
    {
        unitIndex: 11,
        description: `In a thought bubble, Bennett and Sita are at a motorsports course, riding in separate go-karts.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, in go-kart, leaning forward',
                    instance: GO_KARTS,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, in go-kart, relaxed',
                        instance: GO_KARTS,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
                [DRIVING_BACKDROP]: true,
            },
            [FLAT]: {
                [GO_KART_TRACK]: true,
            },
            [PANEL]: {
                [GO_KART_SEAT__LEFT]: true,
                [GO_KART_SEAT__RIGHT]: true,
                [GO_KART_EXTERIOR__LEFT]: true,
                [GO_KART_EXTERIOR__RIGHT]: true,
            },
        },
        cubes: GO_KARTS_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SUMMER },
    },
    {
        unitIndex: 14,
        description: `Having bid each other good night, Bennett is walking away, looking dejected. Sita is closing the gate from the inside, looking towards him with concern. In his thought bubble, she is inviting him in.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED,
                },
                [LIZ]: {
                    sita: {
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true,
            },
            [BUBBLE]: {
                [THOUGHT_GO_KART]: true,
                [BUBBLE_SMALL__GO_KART]: true,
                [BUBBLE_MEDIUM__GO_KART]: true,
                [BUBBLE_LARGE__GO_KART]: true,
            },
            [CUTOUT]: {
                [CYPRESS_SINGLE__LIZ_ENDED]: true,
                [CACTUS_SINGLE__LIZ_ENDED]: true,
                [LAMPPOST__LIZ_GATE]: true,
                [TRAFFIC_LIGHT_FRONT]: true,
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDED]: true,
                [LIZ_GATE_OUTSIDE_OPEN]: true,
            },
            [FLAT]: {
                [PUBLIC_FAR__LIZ_GATE]: true,
                [PUBLIC_NEAR__LIZ_GATE]: true,
            },
        },
        cubes: LIZ_GATE_STREET_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER },
    },
]
