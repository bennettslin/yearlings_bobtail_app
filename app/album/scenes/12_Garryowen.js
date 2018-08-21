import {
    SITA_APARTMENT_COUCH_KEY,
    BENNETT_BASEMENT_KEY,
    SHOW_STAGE_FRONT_KEY,
    VOLKSWAGEN_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'constants/sky'

import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR
} from 'scene/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, putting on jacket, cold, distant',
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
                        description: 'side, shivering, pleading',
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
        description: `Tristan and another crust punk are smashing a car window. Ana is laughing at them. Bennett is sorting through the meat packages in his jacket.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, tripping as meats fall out of pockets',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, eagerly aggressive, about to punch car',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, holding paper bottle, laughing',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, clutching at fist, laughing through pain',
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
        cubes: VOLKSWAGEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Bennett and Sita are on the couch. Bennett is drunk, with a guitar in his lap, writing a song. Sita is naked and has taken his right hand and placed it on her breast, but he is unresponsive`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'on couch, ignoring Sita, drunk',
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
                        description: 'side, naked, making Bennett touch her breast',
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
        cubes: BENNETT_BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Bennett has just finished playing a show. Tristan introduces his kid sister Miriam, who is dressed more preppie, while giving her a noogie. Ana is removing her bass, rolling her eyes, as Bennett is clearly smitten.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, sweaty, giddy',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, greeting Bennett',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, playfully giving Miriam a noogie',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, removing bass, rolling eyes',
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
        cubes: SHOW_STAGE_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Bennett is leaving Sita. She is crumbled on the floor, desperately begging him to stay.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing, cold, looking away',
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
                        description: 'crumbled on floor, begging, sobbing',
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
    }
]
