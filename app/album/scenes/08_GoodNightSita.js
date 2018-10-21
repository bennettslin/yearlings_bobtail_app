import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES,
    PANELS
} from 'constants/scene'

import {
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    GO_KARTS_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky'

import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../scene/actorKeys'

import { DOUBLE_ALBERT } from '../../scene/instanceKeys/khari'

import { FLAPPER } from '../../scene/instanceKeys/stephanie'

import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from '../../scene/instanceKeys/songs'

import {
    GO_KART_THOUGHT_BACKDROP
} from '../../scene/backdropKeys'

import {
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT
} from '../../scene/cutoutKeys'

import {
    CAVEMAN_BONES,
    PUSH_BROOM,
    ARRANGEMENT_PUSH_BROOM_BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from '../../scene/fixtureKeys'

import {
    MUSEUM_DISPLAY
} from '../../scene/flatKeys'

import {
    LIZ_BLINDS,
    ARRANGEMENT_LIZ_BLINDS,
    ARRANGEMENT_LIZ_BLINDS_STREET,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN
} from '../../scene/doorKeys'

import {
    GO_KART_SEAT_LEFT,
    GO_KART_SEAT_RIGHT
} from '../../scene/furnitureKeys'

import {
    GO_KART_EXTERIOR,
    ARRANGEMENT_GO_KART_LEFT,
    ARRANGEMENT_GO_KART_RIGHT
} from '../../scene/panelKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett and Sita are standing outside her gate at night. In a thought bubble, he is reaching out to Sita, who is reaching back.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS]: ARRANGEMENT_LIZ_BLINDS,
                [LIZ_GATE_OUTSIDE]: true
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, leaning towards Sita',
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, hands behind back, guarded',
                        instance: MUSEUM
                    }
                }
            },
            [FIXTURES]: {
                [CAVEMAN_BONES]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, jealous',
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, warm, guard down',
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, friendly',
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, rushing',
                        instance: FLAPPER
                    }
                }
            },
            [CUTOUTS]: {
                [SANDBAGS]: true,
                [STAGE_LIGHTS]: true
            },
            [FIXTURES]: {
                [PUSH_BROOM]: ARRANGEMENT_PUSH_BROOM_BACKSTAGE,
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, in go-kart, leaning forward',
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, in go-kart, relaxed',
                        instance: GO_KARTS
                    }
                }
            },
            [BACKDROPS]: {
                [GO_KART_THOUGHT_BACKDROP]: true
            },
            [FURNITURES]: {
                [GO_KART_SEAT_LEFT]: true,
                [GO_KART_SEAT_RIGHT]: true
            },
            [PANELS]: {
                [GO_KART_EXTERIOR]: [
                    ARRANGEMENT_GO_KART_LEFT,
                    ARRANGEMENT_GO_KART_RIGHT
                ]
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED
                    }
                }
            },
            [CUTOUTS]: {
                [TRAFFIC_LIGHT]: true
            },
            [DOORS]: {
                [LIZ_BLINDS]: ARRANGEMENT_LIZ_BLINDS_STREET,
                [LIZ_GATE_OUTSIDE_OPEN]: true
            }
        },
        cubes: LIZ_GATE_STREET_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
