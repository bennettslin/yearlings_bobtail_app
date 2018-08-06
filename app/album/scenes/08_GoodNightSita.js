import {
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    GO_KART_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'constants/sky'

import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett and Sita are standing outside her gate at night. In a thought bubble, he is reaching out to Sita, who is reaching back.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, awkward, wanting to make a move'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, friendly, guarded'
                }
            }
        },
        cubes: SITA_APARTMENT_GATE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 5,
        description: `In a thought bubble, Bennett and Sita are at a museum, looking at the skeleton of an early human. Bennett is standing behind the display case, leaning in towards Sita.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, leaning towards Sita'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, hands behind back, guarded'
                }
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, jealous'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, warm, guard down'
                }
            },
            [KHARI]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, friendly'
            },
            [STEPHANIE]: {
                actor: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, rushing'
                }
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, in go-kart, leaning forward'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, in go-kart, relaxed'
                }
            }
        },
        cubes: GO_KART_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Having bid each other good night, Bennett is walking away, looking dejected. Sita is closing the gate from the inside, looking towards him with concern. In his thought bubble, she is inviting him in.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking away dejected, slumped over'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, closing gate, looking concerned'
                }
            }
        },
        cubes: SITA_APARTMENT_GATE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
