import {
    BENNETT_APARTMENT_COUCH_KEY,
    SHOW_STAGE_FRONT_KEY,
    REHEARSAL_SPACE_KEY,
    MOVIE_THEATRE_1_KEY,
    MOVIE_THEATRE_2_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'scene/sky'

import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    MIRIAM,
    STEPHANIE
} from 'scene/actorKeys'

import {
    SQUATTING
} from 'scene/actors/ana'

import {
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from 'scene/actors/bennett'

import {
    USHER_WAITING,
    USHER_LOOKING
} from 'scene/actors/howie'

import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from 'scene/actors/miriam'

import { BENNETT_KEYBOARD } from 'scene/actors/stephanie'

import { SHANE_BUYING } from 'scene/actors/tomer'

import {
    FLIRTING,
    EATING
} from 'scene/actors/songs'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'looking at Leonard Cohen poster',
                    instance: PONDERING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 2,
        description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting on couch, figuring out Rubiks Cube',
                    instance: RUBIKS_CUBE,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting on couch, reading a book',
                    instance: COUCH_READING,
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
                        description: 'sitting on floor, back turned, playing keyboard',
                        instance: BENNETT_KEYBOARD,
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
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'chatting with hipster, paying attention to Mara',
                    instance: DISTRACTED,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    description: 'wiping sweat, chatting with Mara, laughing',
                    instance: FLIRTING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'flirting with Jacob',
                    instance: FLIRTING,
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
                    description: 'squatting, back turned, putting bass back in case',
                    instance: SQUATTING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 3,
                        description: 'chatting with Bennett, gushing about music',
                        instance: SHANE_BUYING,
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
        cubes: SHOW_STAGE_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 7,
        description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, silently eating burger, uncomfortable',
                    instance: EATING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, eating burger, holding Mara\'s hand',
                    instance: EATING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, chatting',
                    instance: EATING,
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
                    description: 'sitting, eating fries, laughing',
                    instance: EATING,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: REHEARSAL_SPACE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, sulking with head down',
                    instance: HOPELESSLY_CRUSHED,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, holding baby, looking back at Bennett',
                        instance: INFANT_CURIOUS,
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
        cubes: MOVIE_THEATRE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 11,
        description: `Bennett is looking at the woman holding a baby who just passed by.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking back at baby',
                    instance: WONDERING_BABY,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking away',
                        instance: INFANT_NURSING,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 3,
                        description: 'checking watch',
                        instance: USHER_WAITING,
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
        cubes: MOVIE_THEATRE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 14,
        description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, inspired by sudden thought',
                    instance: MERRILY_DERANGED,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 3,
                        description: 'looking at Bennett',
                        instance: USHER_LOOKING,
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
        cubes: MOVIE_THEATRE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
