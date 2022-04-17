import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    DISHROOM_KEY,
    BENNETT_BED_KEY,
    BENNETT_BED_DARK_KEY,
    WAITING_ROOM_KEY,
    LIZ_BED_KEY,
    LIZ_BED_LOVE_KEY,
    LIZ_BED_DARK_KEY,
    LIZ_GATE_KEY,
    LIZ_GATE_STREET_KEY,
    BENNETT_GATE_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    TIME_EVENING,
    TIME_NOON,
    TIME_NIGHT,
    SEASON_AUTUMN,
    SEASON_WINTER,
    SEASON_LOVE,
} from '../../../../src/constants/scene/sky'
import {
    BENNETT,
    BENNETT_LIZ,
    LIZ,
    NESTOR,
    BENNETT_LIZ_REFLECTION,
} from '../../../../src/constants/scene/actors'
import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP,
} from '../../../../src/constants/scene/actors/bennett'
import { JOGGER } from '../../../../src/constants/scene/actors/nestor'
import {
    DISHROOM_LANCET,
    DATE_ENDING,
    DATE_ENDED,
    GATE_CODE,
    RUMPLED_LINENS,
} from '../../../../src/constants/scene/actors/songs'
import {
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE__LEVEL,
} from '../../../../src/constants/scene/things/backdrops'
import {
    AFTERGLOW,
    AFTERGLOW_REFLECTION,
    CHEEK_UNVEILED,
    GINGERBREAD_PRISON,
    HARD_ON,
    HARD_ON_REFLECTION,
    MISSIONARY,
    MISSIONARY_REFLECTION,
} from '../../../../src/constants/scene/actors/bennettLiz'
import {
    BUBBLE_SMALL__WAITING,
    BUBBLE_MEDIUM__WAITING,
    BUBBLE_LARGE__WAITING,
    WAITING_THOUGHT_WALKING,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
} from '../../../../src/constants/scene/things/bubbles'
import {
    CLIPBOARD,
    CODE_BOX,
    CORKBOARD__DISHROOM,
    PAINTING,
} from '../../../../src/constants/scene/things/cardboards'
import {
    APARTMENT_PLANT,
    BOWL_PILE,
    BUSH_DOUBLE__BENNETT_GATE,
    BUSH_SINGLE__BENNETT_GATE,
    CACTUS_DOUBLE__LIZ_GATE,
    CACTUS_SINGLE__LIZ_ENDED,
    CACTUS_SINGLE__LIZ_ENDING,
    CARRIAGE_TRAY,
    CYPRESS_DOUBLE__LIZ_GATE,
    CYPRESS_SINGLE__LIZ_ENDED,
    CYPRESS_SINGLE__LIZ_ENDING,
    DISHROOM_DOLLY__GLASS,
    DISHROOM_DOLLY__TRAY,
    DISH_PILE,
    GLASS_RACK__DOLLY,
    GLASS_RACK__SINK,
    LAMPPOST__LIZ_GATE,
    RECYCLING_BIN__NEIGHBOUR,
    TRAFFIC_LIGHT_FRONT,
    TRAY_PILE,
    WAITING_ROOM_PLANT,
} from '../../../../src/constants/scene/things/cutouts'
import {
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_GATE_FRONT,
    BENNETT_GATE_SIDE_OPEN,
    BLINDS_INSIDE_OPEN,
    BLINDS_OUTSIDE__NEIGHBOUR,
    DISHROOM_DOOR,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
    NEIGHBOUR_DOOR,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
} from '../../../../src/constants/scene/things/doors'
import {
    CONDOM_LIZ,
    CONDOM_REFLECTION,
    CONDOM_WRAPPER_LIZ,
    CONDOM_WRAPPER_REFLECTION,
    LIGHT_SWITCH__OFF,
    LIGHT_SWITCH__ON,
    LINGERIE_DRAWING,
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    VASELINE,
} from '../../../../src/constants/scene/things/fixtures'
import {
    NEAR_BUILDINGS,
    PUBLIC_FAR__LIZ_GATE,
    PUBLIC_NEAR__LIZ_GATE,
} from '../../../../src/constants/scene/things/flats'
import {
    BENNETT_PILLOW__BED,
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
} from '../../../../src/constants/scene/things/furnitures'
import {
    BENNETT_BED,
    CONVEYOR_BELT__LANCET,
    CONVEYOR_BELT__READING,
    DISHROOM_SINK,
    LIZ_BED,
    LIZ_NIGHTSTAND,
    WAITING_ARMCHAIR__BENNETT,
    WAITING_ARMCHAIR__LIZ,
    WAITING_ARMREST__BENNETT_LEFT,
    WAITING_ARMREST__BENNETT_RIGHT,
    WAITING_ARMREST__LIZ_LEFT,
    WAITING_ARMREST__LIZ_RIGHT,
} from '../../../../src/constants/scene/things/panels'

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
                    instance: DISHROOM_READING,
                },
            },
            [CARDBOARD]: {
                [CORKBOARD__DISHROOM]: true,
            },
            [CUTOUT]: {
                [BOWL_PILE]: true,
                [DISH_PILE]: true,
                [TRAY_PILE]: true,
                [GLASS_RACK__SINK]: true,
                [GLASS_RACK__DOLLY]: true,
                [DISHROOM_DOLLY__TRAY]: true,
                [DISHROOM_DOLLY__GLASS]: true,
            },
            [DOOR]: {
                [DISHROOM_DOOR]: true,
            },
            [PANEL]: {
                [CONVEYOR_BELT__READING]: true,
                [DISHROOM_SINK]: true,
            },
        },
        cubes: DISHROOM_KEY,
        sky: { time: TIME_NOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 4,
        description: `Same scene. Sita is asking for the lancing device. Bennett hands it to her, but simultaneously is asking her out on a date.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, handing lancet pen, exuberant',
                    instance: DISHROOM_LANCET,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, taken aback, politely friendly',
                        instance: DISHROOM_LANCET,
                    },
                },
            },
            [CARDBOARD]: {
                [CORKBOARD__DISHROOM]: true,
            },
            [CUTOUT]: {
                [BOWL_PILE]: true,
                [CARRIAGE_TRAY]: true,
                [DISH_PILE]: true,
                [TRAY_PILE]: true,
                [GLASS_RACK__SINK]: true,
                [GLASS_RACK__DOLLY]: true,
                [DISHROOM_DOLLY__TRAY]: true,
                [DISHROOM_DOLLY__GLASS]: true,
            },
            [DOOR]: {
                [DISHROOM_DOOR]: true,
            },
            [PANEL]: {
                [CONVEYOR_BELT__LANCET]: true,
                [DISHROOM_SINK]: true,
            },
        },
        cubes: DISHROOM_KEY,
        sky: { time: TIME_NOON, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 6,
        description: `Grasshoppers scene 1`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, awkward, wanting to make a move',
                    instance: DATE_ENDING,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, friendly, guarded',
                        instance: DATE_ENDING,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [CYPRESS_DOUBLE__LIZ_GATE]: true,
                [CYPRESS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_SINGLE__LIZ_ENDING]: true,
                [CACTUS_DOUBLE__LIZ_GATE]: true,
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDING]: true,
                [LIZ_GATE_OUTSIDE]: true,
            },
        },
        cubes: LIZ_GATE_KEY,
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 7,
        description: `Grasshoppers scene 5`,
        cubes: LIZ_GATE_STREET_KEY,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking away dejected, slumped over',
                    instance: DATE_ENDED,
                },
                [LIZ]: {
                    sita: {
                        description: 'front, closing gate, looking concerned',
                        instance: DATE_ENDED,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true,
            },
            [CUTOUT]: {
                [CYPRESS_SINGLE__LIZ_ENDED]: true,
                [CACTUS_SINGLE__LIZ_ENDED]: true,
                [LAMPPOST__LIZ_GATE]: true,
                [TRAFFIC_LIGHT_FRONT]: true,
            },
            [DOOR]: {
                [LIZ_BLINDS_OUTSIDE__ENDED]: true,
                [LIZ_GATE_OUTSIDE_OPEN]: true,
            },
            [FLAT]: {
                [PUBLIC_FAR__LIZ_GATE]: true,
                [PUBLIC_NEAR__LIZ_GATE]: true,
            },
        },
        sky: { time: TIME_EVENING, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 8,
        description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, mopey',
                    instance: MOP_SOPPED,
                },
                [NESTOR]: {
                    jogger: {
                        description: 'side, jogging, spry',
                        instance: JOGGER,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CARDBOARD]: {
                [CODE_BOX]: true,
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [BUSH_SINGLE__BENNETT_GATE]: true,
                [BUSH_DOUBLE__BENNETT_GATE]: true,
            },
            [DOOR]: {
                [BENNETT_GATE_FRONT]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
            },
        },
        cubes: BENNETT_GATE_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 10,
        description: `Same scene. As he begins to enter the front gate, he notices that Sita is standing several feet behind him.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'back, punching code, surprised',
                    instance: GATE_CODE,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, hesitantly greeting',
                        instance: GATE_CODE,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CARDBOARD]: {
                [CODE_BOX]: true,
            },
            [CUTOUT]: {
                [APARTMENT_PLANT]: true,
                [BUSH_SINGLE__BENNETT_GATE]: true,
                [BUSH_DOUBLE__BENNETT_GATE]: true,
            },
            [DOOR]: {
                [BENNETT_GATE_FRONT]: true,
            },
            [FLAT]: {
                [NEAR_BUILDINGS]: true,
            },
        },
        cubes: BENNETT_GATE_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 11,
        description: `Bennett's apartment is dark inside. Through a window, we see him opening the gate for Sita to pass through. She takes his arm.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'front, opening gate, silent, attentive',
                    instance: GINGERBREAD_PRISON,
                },
            },
            [CUTOUT]: {
                [RECYCLING_BIN__NEIGHBOUR]: true,
            },
            [DOOR]: {
                [NEIGHBOUR_DOOR]: true,
                [BLINDS_OUTSIDE__NEIGHBOUR]: true,
                [BLINDS_INSIDE_OPEN]: true,
                [BENNETT_DOOR_INSIDE]: true,
                [BENNETT_GATE_SIDE_OPEN]: true,
            },
            [FIXTURE]: {
                [LIGHT_SWITCH__OFF]: true,
                [LINGERIE_DRAWING]: true,
                [VASELINE]: true,
            },
            [FURNITURE]: {
                [BENNETT_PILLOW__BED]: true,
            },
            [PANEL]: {
                [BENNETT_BED]: true,
            },
        },
        cubes: BENNETT_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 12,
        description: `Same scene. Bennett and Sita have now entered the apartment. Bennett has turned on a light switch. On his bed is a jar of Vaseline, along with sketches to which he has clearly been masturbating.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, turning on light, smiling',
                    instance: RUMPLED_LINENS,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, wincing, embarrassed smile',
                        instance: RUMPLED_LINENS,
                    },
                },
            },
            [CUTOUT]: {
                [RECYCLING_BIN__NEIGHBOUR]: true,
            },
            [DOOR]: {
                [NEIGHBOUR_DOOR]: true,
                [BLINDS_OUTSIDE__NEIGHBOUR]: true,
                [BLINDS_INSIDE_OPEN]: true,
                [BENNETT_DOOR_INSIDE_OPEN]: true,
            },
            [FIXTURE]: {
                [LIGHT_SWITCH__ON]: true,
                [LINGERIE_DRAWING]: true,
                [VASELINE]: true,
            },
            [FURNITURE]: {
                [BENNETT_PILLOW__BED]: true,
            },
            [PANEL]: {
                [BENNETT_BED]: true,
            },
        },
        cubes: BENNETT_BED_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 13,
        description: `In an emergency room, Bennett is sitting in an armchair with his arm around Sita's purse. In his thought bubbles, he imagines the scenes of his burgeoning friendship with Sita.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting, eyes closed, falling asleep',
                    instance: WAITING_ROOM_ASLEEP,
                },
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__WAITING]: true,
                [BUBBLE_MEDIUM__WAITING]: true,
                [BUBBLE_LARGE__WAITING]: true,
                [WAITING_THOUGHT_STUDYING]: true,
                [WAITING_THOUGHT_SINGING]: true,
                [WAITING_THOUGHT_WALKING]: true,
            },
            [CARDBOARD]: {
                [CLIPBOARD]: true,
                [PAINTING]: true,
            },
            [CUTOUT]: {
                [WAITING_ROOM_PLANT]: true,
            },
            [DOOR]: {
                [WAITING_ROOM_DOOR]: true,
            },
            [PANEL]: {
                [WAITING_ARMCHAIR__BENNETT]: true,
                [WAITING_ARMREST__BENNETT_LEFT]: true,
                [WAITING_ARMREST__BENNETT_RIGHT]: true,
                [WAITING_ARMCHAIR__LIZ]: true,
                [WAITING_ARMREST__LIZ_LEFT]: true,
                [WAITING_ARMREST__LIZ_RIGHT]: true,
            },
        },
        cubes: WAITING_ROOM_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 15,
        description: `Same scene. Sita has come to get her purse, and is waking Bennett up.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'sitting, abruptly woken',
                    instance: CHEEK_UNVEILED,
                },
            },
            [CARDBOARD]: {
                [CLIPBOARD]: true,
                [PAINTING]: true,
            },
            [CUTOUT]: {
                [WAITING_ROOM_PLANT]: true,
            },
            [DOOR]: {
                [WAITING_ROOM_DOOR_OPEN]: true,
            },
            [PANEL]: {
                [WAITING_ARMCHAIR__BENNETT]: true,
                [WAITING_ARMREST__BENNETT_LEFT]: true,
                [WAITING_ARMREST__BENNETT_RIGHT]: true,
                [WAITING_ARMCHAIR__LIZ]: true,
                [WAITING_ARMREST__LIZ_LEFT]: true,
                [WAITING_ARMREST__LIZ_RIGHT]: true,
            },
        },
        cubes: WAITING_ROOM_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 16,
        description: `Bennett and Sita are both naked in bed. Sita is lying down, while Bennett hovers over her, a look of uncertainty on his face.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side, standing beside bed, unsure',
                    instance: HARD_ON,
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: HARD_ON_REFLECTION,
                    },
                },
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true,
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true,
            },
            [PANEL]: {
                [LIZ_NIGHTSTAND]: true,
                [LIZ_BED]: true,
            },
        },
        cubes: LIZ_BED_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
    {
        unitIndex: 17,
        description: `Same scene. `,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side, about to stick it in',
                    instance: MISSIONARY,
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: MISSIONARY_REFLECTION,
                    },
                },
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true,
            },
            [FURNITURE]: {
                [LIZ_PILLOWS_PILE]: true,
                [LIZ_PILLOWS_PILE_REFLECTION]: true,
            },
            [PANEL]: {
                [LIZ_NIGHTSTAND]: true,
                [LIZ_BED]: true,
            },
        },
        cubes: LIZ_BED_LOVE_KEY,
        sky: { season: SEASON_LOVE },
    },
    {
        unitIndex: 20,
        description: `Same scene. Bennett and Sita are together in bed, having just had sex, a look that is a mixture of serenity and uncertainty on both their faces.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'lying down, warm, content, slightly worried',
                    instance: AFTERGLOW,
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: AFTERGLOW_REFLECTION,
                    },
                },
            },
            [FIXTURE]: {
                [LIZ_PHONE]: true,
                [LIZ_PHONE_REFLECTION]: true,
                [CONDOM_LIZ]: true,
                [CONDOM_REFLECTION]: true,
                [CONDOM_WRAPPER_LIZ]: true,
                [CONDOM_WRAPPER_REFLECTION]: true,
            },
            [FURNITURE]: {
                [LIZ_PILLOWS]: true,
                [LIZ_PILLOWS_REFLECTION]: true,
            },
            [PANEL]: {
                [LIZ_NIGHTSTAND]: true,
                [LIZ_BED]: true,
            },
        },
        cubes: LIZ_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_WINTER },
    },
]
