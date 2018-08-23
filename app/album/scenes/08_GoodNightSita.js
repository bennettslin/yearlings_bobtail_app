import {
    MUSEUM_KEY,
    BACKSTAGE_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    GO_KART_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from 'scene/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett and Sita are standing outside her gate at night. In a thought bubble, he is reaching out to Sita, who is reaching back.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, awkward, wanting to make a move',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, friendly, guarded',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, leaning towards Sita',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, hands behind back, guarded',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, jealous',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, warm, guard down',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, friendly',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [STEPHANIE]: {
                    actor: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, rushing',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, in go-kart, leaning forward',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, in go-kart, relaxed',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
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
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking away dejected, slumped over',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, closing gate, looking concerned',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
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
