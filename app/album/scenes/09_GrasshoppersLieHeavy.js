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
} from 'scene/sky'

import {
    BENNETT,
    LIZ,
    NESTOR,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from 'scene/actorKeys'

import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_THOUGHTS
} from 'scene/instanceKeys/bennett'

import {
    JOGGER
} from 'scene/instanceKeys/nestor'

import {
    DISHROOM_LANCET,
    GATE_CODE,
    GINGERBREAD_PRISON,
    RUMPLED_LINENS,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from 'scene/instanceKeys/songs'

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
                    instance: DISHROOM_READING
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
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, taken aback, politely friendly',
                        instance: DISHROOM_LANCET
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
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, jogging, spry',
                        instance: JOGGER
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
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, hesitantly greeting',
                        instance: GATE_CODE
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
                    instance: GINGERBREAD_PRISON
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, chatting, more comfortable',
                        instance: GINGERBREAD_PRISON
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
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, surprised, embarrassed smile',
                        instance: RUMPLED_LINENS
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
                    instance: WAITING_ROOM_THOUGHTS
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
                    instance: CHEEK_UNVEILED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, reaching for purse, cheeky',
                        instance: CHEEK_UNVEILED
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
                    instance: HARD_ON
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: HARD_ON_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, sitting on bed, irreverently reassuring',
                        instance: HARD_ON
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: HARD_ON_REFLECTION
                    }
                }
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
                    instance: MISSIONARY
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: MISSIONARY_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, spread open',
                        instance: MISSIONARY
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: MISSIONARY_REFLECTION
                    }
                }
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
                    instance: AFTERGLOW
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: AFTERGLOW_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'lying down, warm, content, slightly worried',
                        instance: AFTERGLOW
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: AFTERGLOW_REFLECTION
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
