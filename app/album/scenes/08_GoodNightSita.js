import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL
} from '../../constants/scene/things'
import {
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    GO_KARTS_KEY
} from '../../constants/scene/scenes'
import {
    TIME_EVENING,
    TIME_AFTERNOON,
    SEASON_AUTUMN
} from '../../scene/sky/keys'
import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../constants/scene/actors'
import { DOUBLE_ALBERT } from '../../constants/scene/actors/khari'
import { FLAPPER } from '../../constants/scene/actors/stephanie'
import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from '../../constants/scene/actors/songs'
import {
    DISTANT_BUILDINGS_BACKDROP,
    DRIVING_BACKDROP,
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE
} from '../../constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    BUBBLE_LARGE__GO_KART,
    GO_KART_THOUGHT
} from '../../constants/scene/things/bubbles'
import {
    CACTUS_SINGLE__LIZ_ENDING,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_DOUBLE__LIZ_GATE,
    CYPRESS_TREE,
    LAMPPOST__LIZ_GATE,
    MUSEUM_DISPLAY,
    CAVEMAN_BONES,
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT
} from '../../constants/scene/things/cutouts'
import {
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN
} from '../../constants/scene/things/doors'
import {
    PUSH_BROOM__BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from '../../constants/scene/things/fixtures'
import {
    GO_KART_TRACK,
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE
} from '../../constants/scene/things/flats'
import {
    GO_KART_SEAT__LEFT,
    GO_KART_SEAT__RIGHT,
    GO_KART_EXTERIOR__LEFT,
    GO_KART_EXTERIOR__RIGHT
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett and Sita are standing outside her gate at night. In a thought bubble, he is reaching out to Sita, who is reaching back.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [CUTOUT]: {
                [CYPRESS_TREE]: true,
                [CACTUS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_DOUBLE__LIZ_GATE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDING]: true,
                [LIZ_GATE_OUTSIDE]: true
            }
        },
        cubes: LIZ_GATE_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 4,
        description: `In a thought bubble, Bennett and Sita are at a museum, looking at the skeleton of an early human. Bennett is standing behind the display case, leaning in towards Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, leaning towards Sita',
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
                        description: 'side, hands behind back, guarded',
                        instance: MUSEUM
                    }
                }
            },
            [CUTOUT]: {
                [MUSEUM_DISPLAY]: true,
                [CAVEMAN_BONES]: true
            }
        },
        cubes: MUSEUM_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 7,
        description: `In a thought bubble, Bennett and Sita are backstage after a play. While Sita and her friend are chatting away, Bennett looks away and is visibly uncomfortable.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, jealous',
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        description: 'side, warm, guard down',
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    description: 'side angle, friendly',
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        description: 'side, rushing',
                        instance: FLAPPER
                    }
                }
            },
            [CUTOUT]: {
                [SANDBAGS]: true,
                [STAGE_LIGHTS]: true
            },
            [FIXTURE]: {
                [PUSH_BROOM__BACKSTAGE]: true,
                [STEPLADDER]: true,
                [MANNEQUIN]: true
            }
        },
        cubes: BACKSTAGE_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 11,
        description: `In a thought bubble, Bennett and Sita are at a motorsports course, riding in separate go-karts.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, in go-kart, leaning forward',
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
                        description: 'side, in go-kart, relaxed',
                        instance: GO_KARTS
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_BUILDINGS_BACKDROP]: true,
                [DRIVING_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [FLAT]: {
                [GO_KART_TRACK]: true
            },
            [PANEL]: {
                [GO_KART_SEAT__LEFT]: true,
                [GO_KART_SEAT__RIGHT]: true,
                [GO_KART_EXTERIOR__LEFT]: true,
                [GO_KART_EXTERIOR__RIGHT]: true
            }
        },
        cubes: GO_KARTS_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 14,
        description: `Having bid each other good night, Bennett is walking away, looking dejected. Sita is closing the gate from the inside, looking towards him with concern. In his thought bubble, she is inviting him in.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true
            },
            [BUBBLE]: {
                [GO_KART_THOUGHT]: true,
                [BUBBLE_SMALL__GO_KART]: true,
                [BUBBLE_MEDIUM__GO_KART]: true,
                [BUBBLE_LARGE__GO_KART]: true
            },
            [CUTOUT]: {
                [CACTUS_SINGLE__LIZ_ENDED]: true,
                [LAMPPOST__LIZ_GATE]: true,
                [TRAFFIC_LIGHT]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDED]: true,
                [LIZ_GATE_OUTSIDE_OPEN]: true
            },
            [FLAT]: {
                [PUBLIC_FAR__LIZ_GATE]: true,
                [PUBLIC_NEAR__LIZ_GATE]: true
            }
        },
        cubes: LIZ_GATE_STREET_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN }
    }
]
