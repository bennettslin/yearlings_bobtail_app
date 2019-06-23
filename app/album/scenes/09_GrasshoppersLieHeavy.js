import {
    ACTOR,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FURNITURE,
    PANEL
} from 'constants/scene'

import {
    DISHROOM_KEY,
    BENNETT_BED_KEY,
    BENNETT_BED_OPEN_KEY,
    WAITING_ROOM_KEY,
    WAITING_ROOM_OPEN_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    BENNETT_GATE_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_WINTER,
    SEASON_LOVE
} from '../../scene/sky/keys'

import {
    BENNETT,
    BENNETT_LIZ,
    LIZ,
    NESTOR,
    BENNETT_LIZ_REFLECTION
} from '../../scene/actors/keys'

import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP
} from '../../scene/actors/keys/instances/bennett'

import {
    JOGGER
} from '../../scene/actors/keys/instances/nestor'

import {
    DISHROOM_LANCET,
    DATE_ENDING,
    DATE_ENDED,
    GATE_CODE,
    RUMPLED_LINENS
} from '../../scene/actors/keys/instances/songs'

import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from '../../scene/actors/keys/instances/bennettLiz'

import {
    WAITING_ROOM_THOUGHTS
} from '../../scene/things/keys/bubbles'

import {
    CLIPBOARD,
    PAINTING
} from '../../scene/things/keys/cardboards'

import {
    TRAFFIC_LIGHT,
    APARTMENT_PLANT,
    CODE_BOX,
    WAITING_ROOM_PLANT
} from '../../scene/things/keys/cutouts'

import {
    CONVEYOR_BELT,
    GLASS_CART,
    TRAY_CART,
    GLASS_RACK,
    DISH_PILE,
    NUDE_DRAWINGS,
    VASELINE,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BLOODY_TOWEL,
    BLOODY_TOWEL_REFLECTION
} from '../../scene/things/keys/fixtures'

import {
    BENNETT_PILLOW,
    BENNETT_BLANKET,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION
} from '../../scene/things/keys/furniture'

import {
    DISHROOM_SINK,
    BENNETT_BED,
    LIZ_BED,
    WAITING_ARMCHAIR_BENNETT,
    WAITING_LEFT_ARMREST_BENNETT,
    WAITING_RIGHT_ARMREST_BENNETT,
    WAITING_ARMCHAIR_LIZ,
    WAITING_LEFT_ARMREST_LIZ,
    WAITING_RIGHT_ARMREST_LIZ
} from '../../scene/things/keys/panels'

/**
 * All of these scenes repeat twice.
 */
export default [
    {
        unitIndex: 1,
        description: `Bennett is in a cafeteria dishroom, reading a novel while dishes gradually pile up. He eyes a lancing device on a tray.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'back, reading book, pulling tray from belt.',
                    instance: DISHROOM_READING
                }
            },
            [FIXTURE]: {
                [CONVEYOR_BELT]: true,
                [GLASS_CART]: true,
                [TRAY_CART]: true,
                [GLASS_RACK]: true,
                [DISH_PILE]: true
            },
            [PANEL]: {
                [DISHROOM_SINK]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, handing lancet pen, exuberant',
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, taken aback, politely friendly',
                        instance: DISHROOM_LANCET
                    }
                }
            },
            [FIXTURE]: {
                [CONVEYOR_BELT]: true,
                [GLASS_CART]: true,
                [TRAY_CART]: true,
                [GLASS_RACK]: true,
                [DISH_PILE]: true
            },
            [PANEL]: {
                [DISHROOM_SINK]: true
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
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    duplicate: true,
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING
                    }
                }
            }
        },
        cubes: LIZ_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Grasshoppers scene 5`,
        cubes: LIZ_GATE_STREET_KEY,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    duplicate: true,
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED
                    }
                }
            },
            [CUTOUT]: {
                [TRAFFIC_LIGHT]: true
            }
        },
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side, walking, mopey',
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, jogging, spry',
                        instance: JOGGER
                    }
                }
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [CODE_BOX]: true
            }
        },
        cubes: BENNETT_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 10,
        description: `Same scene. As he begins to enter the front gate, he notices that Sita is standing several feet behind him.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'back, punching code, surprised',
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, hesitantly greeting',
                        instance: GATE_CODE
                    }
                }
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [CODE_BOX]: true
            }
        },
        cubes: BENNETT_GATE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 11,
        description: `Bennett's apartment is dark inside. Through a window, we see him opening the gate for Sita to pass through. She takes his arm.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'front, opening gate, silent, attentive',
                    instance: GINGERBREAD_PRISON
                }
            },
            [FIXTURE]: {
                [NUDE_DRAWINGS]: true,
                [VASELINE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW]: true,
                [BENNETT_BLANKET]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BENNETT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 12,
        description: `Same scene. Bennett and Sita have now entered the apartment. Bennett has turned on a light switch. On his bed is a jar of Vaseline, along with sketches to which he has clearly been masturbating.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, turning on light, smiling',
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'side, wincing, embarrassed smile',
                        instance: RUMPLED_LINENS
                    }
                }
            },
            [FIXTURE]: {
                [NUDE_DRAWINGS]: true,
                [VASELINE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW]: true,
                [BENNETT_BLANKET]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BENNETT_BED_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 13,
        description: `In an emergency room, Bennett is sitting in an armchair with his arm around Sita's purse. In his thought bubbles, he imagines the scenes of his burgeoning friendship with Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'sitting, eyes closed, falling asleep',
                    instance: WAITING_ROOM_ASLEEP
                }
            },
            [BUBBLE]: {
                [WAITING_ROOM_THOUGHTS]: true
            },
            [CARDBOARD]: {
                [CLIPBOARD]: true,
                [PAINTING]: true
            },
            [CUTOUT]: {
                [WAITING_ROOM_PLANT]: true
            },
            [PANEL]: {
                [WAITING_ARMCHAIR_BENNETT]: true,
                [WAITING_LEFT_ARMREST_BENNETT]: true,
                [WAITING_RIGHT_ARMREST_BENNETT]: true,
                [WAITING_ARMCHAIR_LIZ]: true,
                [WAITING_LEFT_ARMREST_LIZ]: true,
                [WAITING_RIGHT_ARMREST_LIZ]: true
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
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'sitting, abruptly woken',
                    instance: CHEEK_UNVEILED
                }
            },
            [CARDBOARD]: {
                [CLIPBOARD]: true,
                [PAINTING]: true
            },
            [CUTOUT]: {
                [WAITING_ROOM_PLANT]: true
            },
            [PANEL]: {
                [WAITING_ARMCHAIR_BENNETT]: true,
                [WAITING_LEFT_ARMREST_BENNETT]: true,
                [WAITING_RIGHT_ARMREST_BENNETT]: true,
                [WAITING_ARMCHAIR_LIZ]: true,
                [WAITING_LEFT_ARMREST_LIZ]: true,
                [WAITING_RIGHT_ARMREST_LIZ]: true
            }
        },
        cubes: WAITING_ROOM_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 16,
        description: `Bennett and Sita are both naked in bed. Sita is lying down, while Bennett hovers over her, a look of uncertainty on his face.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'side, standing beside bed, unsure',
                    instance: HARD_ON
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        description: 'reflection',
                        instance: HARD_ON_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_PILLOWS_PILE]: true,
                [LIZ_PILLOWS_PILE_REFLECTION]: true,
                [LIZ_BLANKET_PILE]: true,
                [LIZ_BLANKET_PILE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_LOVE
        }
    },
    {
        unitIndex: 17,
        description: `Same scene. `,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'side, about to stick it in',
                    instance: MISSIONARY
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        description: 'reflection',
                        instance: MISSIONARY_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_PILLOWS_PILE]: true,
                [LIZ_PILLOWS_PILE_REFLECTION]: true,
                [LIZ_BLANKET_PILE]: true,
                [LIZ_BLANKET_PILE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_LOVE
        }
    },
    {
        unitIndex: 19,
        description: `Same scene. Bennett and Sita are together in bed, having just had sex, a look that is a mixture of serenity and uncertainty on both their faces.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'lying down, warm, content, slightly worried',
                    instance: AFTERGLOW
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        description: 'reflection',
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [BLOODY_TOWEL]: true,
                [BLOODY_TOWEL_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_BLANKET_PILE]: true,
                [LIZ_BLANKET_PILE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_OPEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_LOVE
        }
    }
]
