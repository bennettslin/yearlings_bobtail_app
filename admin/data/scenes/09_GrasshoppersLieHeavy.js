import { ACTOR } from '../../../app/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../../app/constants/scene/things'
import {
    DISHROOM_KEY,
    BENNETT_BED_KEY,
    BENNETT_BED_DARK_KEY,
    WAITING_ROOM_KEY,
    LIZ_BED_KEY,
    LIZ_BED_OPEN_KEY,
    LIZ_BED_DARK_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    BENNETT_GATE_KEY
} from '../../../app/constants/scene/scenes'
import {
    TIME_EVENING,
    TIME_NOON,
    TIME_NIGHT,
    SEASON_AUTUMN,
    SEASON_WINTER,
    SEASON_LOVE
} from '../../../app/scene/sky/keys'
import {
    BENNETT,
    BENNETT_LIZ,
    LIZ,
    NESTOR,
    BENNETT_LIZ_REFLECTION
} from '../../../app/constants/scene/actors'
import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP
} from '../../../app/constants/scene/actors/bennett'
import { JOGGER } from '../../../app/constants/scene/actors/nestor'
import {
    DISHROOM_LANCET,
    DATE_ENDING,
    DATE_ENDED,
    GATE_CODE,
    RUMPLED_LINENS
} from '../../../app/constants/scene/actors/songs'
import {
    NEAR_BUILDINGS,
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE
} from '../../../app/constants/scene/things/backdrops'
import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from '../../../app/constants/scene/actors/bennettLiz'
import {
    BUBBLE_SMALL__WAITING,
    BUBBLE_MEDIUM__WAITING,
    BUBBLE_LARGE__WAITING,
    WAITING_THOUGHT_WALKING,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING
} from '../../../app/constants/scene/things/bubbles'
import {
    CODE_BOX,
    CLIPBOARD,
    PAINTING
} from '../../../app/constants/scene/things/cardboards'
import {
    DISH_PILE,
    TRAY_PILE,
    GLASS_RACK__SINK,
    GLASS_RACK__DOLLY,
    DISHROOM_DOLLY__TRAY,
    DISHROOM_DOLLY__GLASS,
    CYPRESS_TREE,
    CACTUS_SINGLE__LIZ_ENDING,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_DOUBLE__LIZ_GATE,
    LAMPPOST__LIZ_GATE,
    TRAFFIC_LIGHT,
    APARTMENT_PLANT,
    BUSH_SINGLE__BENNETT_GATE,
    BUSH_DOUBLE__BENNETT_GATE,
    RECYCLABLES__NEIGHBOUR,
    WAITING_ROOM_PLANT
} from '../../../app/constants/scene/things/cutouts'
import {
    DISHROOM_DOOR,
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
    NEIGHBOUR_DOOR,
    BLINDS_OUTSIDE__NEIGHBOUR,
    BLINDS_INSIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
    BENNETT_GATE_FRONT,
    BENNETT_GATE_SIDE_OPEN
} from '../../../app/constants/scene/things/doors'
import {
    LIGHT_SWITCH__OFF,
    LIGHT_SWITCH__ON,
    LINGERIE_DRAWING,
    VASELINE,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    CONDOM_WRAPPER_LIZ,
    CONDOM_WRAPPER_REFLECTION,
    USED_CONDOM_LIZ,
    USED_CONDOM_REFLECTION
} from '../../../app/constants/scene/things/fixtures'
import {
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE
} from '../../../app/constants/scene/things/flats'
import {
    BENNETT_PILLOW__BED,
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION
} from '../../../app/constants/scene/things/furnitures'
import {
    CONVEYOR_BELT,
    DISHROOM_SINK,
    BENNETT_BED,
    LIZ_BED,
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT
} from '../../../app/constants/scene/things/panels'

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
                    description: 'back, reading book, pulling tray from belt.',
                    instance: DISHROOM_READING
                }
            },
            [CUTOUT]: {
                [DISH_PILE]: true,
                [TRAY_PILE]: true,
                [GLASS_RACK__SINK]: true,
                [GLASS_RACK__DOLLY]: true,
                [DISHROOM_DOLLY__TRAY]: true,
                [DISHROOM_DOLLY__GLASS]: true
            },
            [DOOR]: {
                [DISHROOM_DOOR]: true
            },
            [PANEL]: {
                [CONVEYOR_BELT]: true,
                [DISHROOM_SINK]: true
            }
        },
        cubes: DISHROOM_KEY,
        sky: { time: TIME_NOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 4,
        description: `Same scene. Sita is asking for the lancing device. Bennett hands it to her, but simultaneously is asking her out on a date.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, handing lancet pen, exuberant',
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
                        description: 'side, taken aback, politely friendly',
                        instance: DISHROOM_LANCET
                    }
                }
            },
            [CUTOUT]: {
                [DISH_PILE]: true,
                [TRAY_PILE]: true,
                [GLASS_RACK__SINK]: true,
                [GLASS_RACK__DOLLY]: true,
                [DISHROOM_DOLLY__TRAY]: true,
                [DISHROOM_DOLLY__GLASS]: true
            },
            [DOOR]: {
                [DISHROOM_DOOR]: true
            },
            [PANEL]: {
                [CONVEYOR_BELT]: true,
                [DISHROOM_SINK]: true
            }
        },
        cubes: DISHROOM_KEY,
        sky: { time: TIME_NOON, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 6,
        description: `Grasshoppers scene 1`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [CUTOUT]: {
                [CYPRESS_TREE]: true,
                [CACTUS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_DOUBLE__LIZ_GATE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDING]: true,
                [LIZ_GATE_OUTSIDE]: true
            }
        },
        cubes: LIZ_GATE_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 7,
        description: `Grasshoppers scene 5`,
        cubes: LIZ_GATE_STREET_KEY,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true
            },
            [CUTOUT]: {
                [CACTUS_SINGLE__LIZ_ENDED]: true,
                [LAMPPOST__LIZ_GATE]: true,
                [TRAFFIC_LIGHT]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDED]: true,
                [LIZ_GATE_OUTSIDE_OPEN]: true
            },
            [FLAT]: {
                [PUBLIC_FAR__LIZ_GATE]: true,
                [PUBLIC_NEAR__LIZ_GATE]: true
            }
        },
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 8,
        description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, mopey',
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
                        description: 'side, jogging, spry',
                        instance: JOGGER
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true,
                [NEAR_BUILDINGS]: true
            },
            [CARDBOARD]: {
                [CODE_BOX]: true
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [BUSH_SINGLE__BENNETT_GATE]: true,
                [BUSH_DOUBLE__BENNETT_GATE]: true
            },
            [DOOR]: {
                [BENNETT_GATE_FRONT]: true
            }
        },
        cubes: BENNETT_GATE_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 10,
        description: `Same scene. As he begins to enter the front gate, he notices that Sita is standing several feet behind him.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'back, punching code, surprised',
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
                        description: 'side, hesitantly greeting',
                        instance: GATE_CODE
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true,
                [NEAR_BUILDINGS]: true
            },
            [CARDBOARD]: {
                [CODE_BOX]: true
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [BUSH_SINGLE__BENNETT_GATE]: true,
                [BUSH_DOUBLE__BENNETT_GATE]: true
            },
            [DOOR]: {
                [BENNETT_GATE_FRONT]: true
            }
        },
        cubes: BENNETT_GATE_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 11,
        description: `Bennett's apartment is dark inside. Through a window, we see him opening the gate for Sita to pass through. She takes his arm.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'front, opening gate, silent, attentive',
                    instance: GINGERBREAD_PRISON
                }
            },
            [CUTOUT]: {
                [RECYCLABLES__NEIGHBOUR]: true
            },
            [DOOR]: {
                [NEIGHBOUR_DOOR]: true,
                [BLINDS_OUTSIDE__NEIGHBOUR]: true,
                [BLINDS_INSIDE_OPEN]: true,
                [BENNETT_DOOR_INSIDE]: true,
                [BENNETT_GATE_SIDE_OPEN]: true
            },
            [FIXTURE]: {
                [LIGHT_SWITCH__OFF]: true,
                [LINGERIE_DRAWING]: true,
                [VASELINE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW__BED]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BENNETT_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 12,
        description: `Same scene. Bennett and Sita have now entered the apartment. Bennett has turned on a light switch. On his bed is a jar of Vaseline, along with sketches to which he has clearly been masturbating.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, turning on light, smiling',
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
                        description: 'side, wincing, embarrassed smile',
                        instance: RUMPLED_LINENS
                    }
                }
            },
            [CUTOUT]: {
                [RECYCLABLES__NEIGHBOUR]: true
            },
            [DOOR]: {
                [NEIGHBOUR_DOOR]: true,
                [BLINDS_OUTSIDE__NEIGHBOUR]: true,
                [BLINDS_INSIDE_OPEN]: true,
                [BENNETT_DOOR_INSIDE_OPEN]: true
            },
            [FIXTURE]: {
                [LIGHT_SWITCH__ON]: true,
                [LINGERIE_DRAWING]: true,
                [VASELINE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW__BED]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BENNETT_BED_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 13,
        description: `In an emergency room, Bennett is sitting in an armchair with his arm around Sita's purse. In his thought bubbles, he imagines the scenes of his burgeoning friendship with Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting, eyes closed, falling asleep',
                    instance: WAITING_ROOM_ASLEEP
                }
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__WAITING]: true,
                [BUBBLE_MEDIUM__WAITING]: true,
                [BUBBLE_LARGE__WAITING]: true,
                [WAITING_THOUGHT_WALKING]: true,
                [WAITING_THOUGHT_SINGING]: true,
                [WAITING_THOUGHT_STUDYING]: true
            },
            [CARDBOARD]: {
                [CLIPBOARD]: true,
                [PAINTING]: true
            },
            [CUTOUT]: {
                [WAITING_ROOM_PLANT]: true
            },
            [DOOR]: {
                [WAITING_ROOM_DOOR]: true
            },
            [PANEL]: {
                [WAITING_ARMCHAIR__BENNETT]: true,
                [WAITING_ARMREST__BENNETT_LEFT]: true,
                [WAITING_ARMREST__BENNETT_RIGHT]: true,
                [WAITING_ARMCHAIR__LIZ]: true,
                [WAITING_ARMREST__LIZ_LEFT]: true,
                [WAITING_ARMREST__LIZ_RIGHT]: true
            }
        },
        cubes: WAITING_ROOM_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 15,
        description: `Same scene. Sita has come to get her purse, and is waking Bennett up.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
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
            [DOOR]: {
                [WAITING_ROOM_DOOR_OPEN]: true
            },
            [PANEL]: {
                [WAITING_ARMCHAIR__BENNETT]: true,
                [WAITING_ARMREST__BENNETT_LEFT]: true,
                [WAITING_ARMREST__BENNETT_RIGHT]: true,
                [WAITING_ARMCHAIR__LIZ]: true,
                [WAITING_ARMREST__LIZ_LEFT]: true,
                [WAITING_ARMREST__LIZ_RIGHT]: true
            }
        },
        cubes: WAITING_ROOM_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 16,
        description: `Bennett and Sita are both naked in bed. Sita is lying down, while Bennett hovers over her, a look of uncertainty on his face.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side, standing beside bed, unsure',
                    instance: HARD_ON
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: HARD_ON_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    },
    {
        unitIndex: 17,
        description: `Same scene. `,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side, about to stick it in',
                    instance: MISSIONARY
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: MISSIONARY_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_PILLOWS_PILE]: true,
                [LIZ_PILLOWS_PILE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_OPEN_KEY,
        sky: { season: SEASON_LOVE }
    },
    {
        unitIndex: 19,
        description: `Same scene. Bennett and Sita are together in bed, having just had sex, a look that is a mixture of serenity and uncertainty on both their faces.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'lying down, warm, content, slightly worried',
                    instance: AFTERGLOW
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true,
                [USED_CONDOM_LIZ]: true,
                [USED_CONDOM_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true
            }
        },
        cubes: LIZ_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER }
    }
]