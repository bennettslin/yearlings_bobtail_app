import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'

import {
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    GO_KARTS_KEY
} from '../../constants/scene/scenes'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky/keys'

import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../constants/scene/actors'

import { DOUBLE_ALBERT } from '../../constants/scene/actors/instances/khari'

import { FLAPPER } from '../../constants/scene/actors/instances/stephanie'

import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from '../../constants/scene/actors/instances/songs'

import {
    GO_KART_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    GO_KART_THOUGHT
} from '../../constants/scene/things/bubbles'

import {
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT
} from '../../constants/scene/things/cutouts'

import {
    CAVEMAN_BONES,
    PUSH_BROOM__BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from '../../constants/scene/things/fixtures'

import {
    MUSEUM_DISPLAY
} from '../../constants/scene/things/flats'

import {
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
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING
                    }
                }
            }
        },
        cubes: LIZ_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 5,
        description: `In a thought bubble, Bennett and Sita are at a museum, looking at the skeleton of an early human. Bennett is standing behind the display case, leaning in towards Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, leaning towards Sita',
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, hands behind back, guarded',
                        instance: MUSEUM
                    }
                }
            },
            [FIXTURE]: {
                [CAVEMAN_BONES]: true
            },
            [FLAT]: {
                [MUSEUM_DISPLAY]: true
            }
        },
        cubes: MUSEUM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `In a thought bubble, Bennett and Sita are backstage after a play. While Sita and her friend are chatting away, Bennett looks away and is visibly uncomfortable.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, jealous',
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, warm, guard down',
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, friendly',
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        todo: true,
                        workedHours: 4.25,
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
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `In a thought bubble, Bennett and Sita are at a motorsports course, riding in separate go-karts.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, in go-kart, leaning forward',
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, in go-kart, relaxed',
                        instance: GO_KARTS
                    }
                }
            },
            [BACKDROP]: {
                [GO_KART_BACKDROP]: true
            },
            [PANEL]: {
                [GO_KART_EXTERIOR__LEFT]: true,
                [GO_KART_EXTERIOR__RIGHT]: true
            }
        },
        cubes: GO_KARTS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Having bid each other good night, Bennett is walking away, looking dejected. Sita is closing the gate from the inside, looking towards him with concern. In his thought bubble, she is inviting him in.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED
                    }
                }
            },
            [BUBBLE]: {
                [GO_KART_THOUGHT]: true
            },
            [CUTOUT]: {
                [TRAFFIC_LIGHT]: true
            }
        },
        cubes: LIZ_GATE_STREET_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
