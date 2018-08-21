import {
    DISHROOM_KEY,
    BENNETT_APARTMENT_BED_KEY,
    WAITING_ROOM_KEY,
    SITA_APARTMENT_BED_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    BENNETT_APARTMENT_GATE_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_WINTER
} from 'constants/sky'

import {
    BENNETT,
    LIZ,
    NESTOR,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from 'scene/actorKeys'

/**
 * All of these scenes repeat twice.
 */
module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is in a cafeteria dishroom, reading a novel while dishes gradually pile up. He eyes a lancing device on a tray.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, reading book, pulling tray from belt.',
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
        cubes: DISHROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Same scene. Sita is asking for the lancing device. Bennett hands it to her, but simultaneously is asking her out on a date.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, handing lancet pen, exuberant',
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
                        description: 'side, taken aback, politely friendly',
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
        cubes: DISHROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 6,
        description: `Grasshoppers scene 1`,
        cubes: SITA_APARTMENT_GATE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Grasshoppers scene 5`,
        cubes: SITA_APARTMENT_GATE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, mopey',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, jogging, spry',
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
        cubes: BENNETT_APARTMENT_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 10,
        description: `Same scene. As he begins to enter the front gate, he notices that Sita is standing several feet behind him.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, punching code, surprised',
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
                        description: 'side, hesitantly greeting',
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
        cubes: BENNETT_APARTMENT_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 11,
        description: `Bennett's apartment is dark inside. Through a window, we see him opening the gate for Sita to pass through. She takes his arm.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, opening gate, silent, attentive',
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
                        description: 'front, chatting, more comfortable',
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
        cubes: BENNETT_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 12,
        description: `Same scene. Bennett and Sita have now entered the apartment. Bennett has turned on a light switch. On his bed is a jar of Vaseline, along with sketches to which he has clearly been masturbating.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, turning on light, smiling',
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
                        description: 'side, surprised, embarrassed smile',
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
        cubes: BENNETT_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 13,
        description: `In an emergency room, Bennett is sitting in an armchair with his arm around Sita's purse. In his thought bubbles, he imagines the scenes of his burgeoning friendship with Sita.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, eyes closed, falling asleep',
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
        cubes: WAITING_ROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 15,
        description: `Same scene. Sita has come to get her purse, and is waking Bennett up.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, abruptly woken',
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
                        description: 'side, reaching for purse, cheeky',
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
        cubes: WAITING_ROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 16,
        description: `Bennett and Sita are both naked in bed. Sita is lying down, while Bennett hovers over her, a look of uncertainty on his face.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, standing beside bed, unsure',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, sitting on bed, irreverently reassuring',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
            }
        },
        cubes: SITA_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 17,
        description: `Same scene. `,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, about to stick it in',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, spread open',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
            }
        },
        cubes: SITA_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 19,
        description: `Same scene. Bennett and Sita are together in bed, having just had sex, a look that is a mixture of serenity and uncertainty on both their faces.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying down, warm, content, slightly worried',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'lying down, warm, content, slightly worried',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
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
        cubes: SITA_APARTMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
