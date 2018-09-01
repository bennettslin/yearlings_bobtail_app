import {
    SITA_APARTMENT_COUCH_THOUGHT_KEY,
    OAKLAND_STREET_SIDE_KEY,
    OAKLAND_STREET_FRONT_1_KEY,
    OAKLAND_STREET_FRONT_2_KEY,
    OAKLAND_STREET_FRONT_3_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    YOUNG_BENNETT,
    BENNETT,
    ANITA,
    ESTHER,
    WILLY,
    LIZ,
    AMY,
    STEPHANIE
} from 'scene/actorKeys'

import { OFFICER } from 'scene/actors/amy'

import {
    CORD_SIDE,
    AWKWARD_CONSOLATION,
    CORD_REAR,
    HORSING,
    DRYING_TEARS
} from 'scene/actors/bennett'

import { RETURNING_CORD } from 'scene/actors/liz'

import {
    BENNETT_DEFIANT,
    BENNETT_HORSING,
    BENNETT_SORROWFUL
} from 'scene/actors/stephanie'

import { CROSSING_GUARD } from 'scene/actors/willy'

import { YOUNG_CHILD } from 'scene/actors/songs'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is walking down street.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, cradling bracelet, blank',
                    instance: CORD_SIDE,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: OAKLAND_STREET_SIDE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are at her apartment, breaking up. Sita is a wreck, turning away from Bennett as she returns the gold bracelet to him. He is trying to console her, but in a mechanical way.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, disingenuously consoling',
                    instance: AWKWARD_CONSOLATION,
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
                        description: 'side angle, returning bracelet, fighting tears',
                        instance: RETURNING_CORD,
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
        cubes: SITA_APARTMENT_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Bennett and Garry are walking along down the street. (Garry is the one wearing the jacket.) Garry is shaking his fist at the twin streetlights. Bennett turns around to face the audience, a look of uncertainty on his face. He is caressing the gold bracelet in his hand.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, cradling bracelet, blank',
                    instance: CORD_REAR,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, shaking fist at sky',
                        instance: BENNETT_DEFIANT,
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
        cubes: OAKLAND_STREET_FRONT_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Bennett and Garry are yucking it up, in a panicked and delirious kind of way. Bennett is yodelling, Garry is playing the banjo, saluting a female cop on a horse. The cop waves back.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, playful, waving',
                    instance: HORSING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, playful',
                        instance: BENNETT_HORSING,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [AMY]: {
                    officer: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, facing back, waving',
                        instance: OFFICER,
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
        cubes: OAKLAND_STREET_FRONT_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Garry is now facing the audience, his hand over his face, crying, and holding the gold bracelet over a group of kids crossing the street with a crossing guard. Bennett is trying to console him, as he faces forward.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, consoling',
                    instance: DRYING_TEARS,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, head in hands, holding bracelet',
                        instance: BENNETT_SORROWFUL,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking',
                        instance: YOUNG_CHILD,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking',
                        instance: YOUNG_CHILD,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, turned, looking at Bennetts',
                        instance: YOUNG_CHILD,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, holding up stop sign',
                        instance: CROSSING_GUARD,
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
        cubes: OAKLAND_STREET_FRONT_3_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
