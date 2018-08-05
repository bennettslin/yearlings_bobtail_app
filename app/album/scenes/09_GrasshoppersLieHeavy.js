import {
    DISHROOM_KEY,
    BENNETT_APARTMENT_BED_KEY,
    WAITING_ROOM_KEY,
    SITA_APARTMENT_BED_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    BENNETT_APARTMENT_GATE_KEY
} from '../../constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_WINTER
} from '../../constants/sky'

import {
    BENNETT,
    LIZ,
    NESTOR,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from '../../constants/actorKeys'

/**
 * All of these scenes repeat twice.
 */
module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is in a cafeteria dishroom, reading a novel while dishes gradually pile up. He eyes a lancing device on a tray.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'back, reading book, pulling tray from belt.'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, handing lancet pen, exuberant'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, taken aback, politely friendly'
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
        description: 'Grasshoppers scene 1',
        cubes: SITA_APARTMENT_GATE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: 'Grasshoppers scene 5',
        cubes: SITA_APARTMENT_GATE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking, mopey'
            },
            [NESTOR]: {
                jogger: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, jogging, spry'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'back, punching code, surprised'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, hesitantly greeting'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, opening gate, silent, attentive'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, chatting, more comfortable'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, turning on light, smiling'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, surprised, embarrassed smile'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, eyes closed, falling asleep'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, abruptly woken'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, reaching for purse, cheeky'
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, standing beside bed, unsure'
            },
            [BENNETT_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, sitting on bed, irreverently reassuring'
                }
            },
            [LIZ_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, about to stick it in'
            },
            [BENNETT_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, spread open'
                }
            },
            [LIZ_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
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
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'lying down, warm, content, slightly worried'
            },
            [BENNETT_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
                }
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying down, warm, content, slightly worried'
                }
            },
            [LIZ_REFLECTION]: {
                reflection: {
                    todo: true,
                    workedHours: 3,
                    description: 'reflection'
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
