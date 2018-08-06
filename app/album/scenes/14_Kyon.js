import { SITA_APARTMENT_COUCH_KEY } from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'constants/sky'

import {
    LIZ,
    KHARI
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Sita is sitting on the couch in her living room, petting a cat.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, petting cat, sad',
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
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 2,
        description: `Sita is standing by the window, still depressed.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, petting cat, sad',
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
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Sita is imagining how she met Bennett in three thought bubbles. In the first, she is breaking up with her ex over a cafeteria dinner. In the second, in tears over the incident, she busses her tray, leaving her lancing device behind. In the third, Bennett is hitting on her in the cafeteria, while she looks uncertain.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, pensive',
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
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Sita is still thinking. In the last thought bubble, Bennett is walking away, rejected by Sita. Sita has gotten up and opened the door. Sita's friend is in the doorway, having arrived with Chinese takeout.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, glumly welcoming',
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
                    description: 'side, cheery in a low-key way',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Sita and her friend are eating the food. In his speech bubble, Bennett is flirting with a fan, while Sita looks on jealous. In her speech bubble, she is going home with Bennett, triumphant.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, defensive',
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
                    description: 'side, seated, eating, judgmental',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Sita's friend has left, looking back at her through the window. She is absorbed in her thoughts. In her thought bubble, she and Bennett have gotten back together, both in tears.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, exhausted',
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
                    description: 'back angle, concerned',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `Same scene. No thought bubble. The room is now completely dark.`,
        presences: {
            actors: {
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, seated, asleep',
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
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 12,
        description: `Same scene. Peacocks.`,
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
