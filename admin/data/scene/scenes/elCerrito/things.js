import {
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import { TREE__EL_CERRITO } from '../../../../../src/constants/scene/things/cutouts'
import {
    FREEWAY_SIGN,
    CONDOM_MIRIAM,
    CONDOM_WRAPPER_MIRIAM,
    HAWAIIAN_DOLL,
} from '../../../../../src/constants/scene/things/fixtures'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR,
} from '../../../../../src/constants/scene/things/flats'
import {
    REATTA_EXTERIOR_FRONT,
    REATTA_EXTERIOR_REAR,
    REATTA_INTERIOR,
    REATTA_SEAT_BOTTOM,
    REATTA_SEAT_BACK,
    REATTA_SEAT_BACK_DOWN,
} from '../../../../../src/constants/scene/things/panels'
import { PUPPET_REATTA } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [TREE__EL_CERRITO]: {
            yIndex: 1,
            xPosition: 1,
        },
    },
    [FIXTURE]: {
        [FREEWAY_SIGN]: {
            yIndex: 2,
            xPosition: 8.5,
            zOffset: -0.1,
        },
        [CONDOM_MIRIAM]: {
            yIndex: 5,
            xPosition: 1.8,
            zOffset: 0.05,
        },
        [CONDOM_WRAPPER_MIRIAM]: {
            yIndex: 5,
            xPosition: 1.25,
            zOffset: 0.11,
        },
        [HAWAIIAN_DOLL]: {
            yIndex: 4,
            xPosition: 4.15,
            zOffset: 1.7,
        },
    },
    [FLAT]: {
        [EL_CERRITO_FAR]: {
            xPosition: 9.8,
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            xPosition: 8.9,
        },
    },
    [PANEL]: {
        [REATTA_INTERIOR]: {
            yIndex: 1,
            xPosition: 4.1,
        },
        [REATTA_SEAT_BOTTOM]: {
            yIndex: 5,
            xPosition: 2.07,
            zOffset: 0.79,
            layerYIndex: 3,
        },
        [REATTA_SEAT_BACK]: {
            yIndex: 5,
            xPosition: 1.68,
            zOffset: 1.47,
            layerYIndex: 3,
            counterpart: REATTA_SEAT_BACK_DOWN,
        },
        [REATTA_SEAT_BACK_DOWN]: {
            yIndex: 5,
            xPosition: 1.26,
            zOffset: 1.3,
            layerYIndex: 3,
            counterpart: REATTA_SEAT_BACK,
        },
        [REATTA_EXTERIOR_FRONT]: {
            yIndex: 5,
            xPosition: 5.51,
            zOffset: 1.5,
        },
        [REATTA_EXTERIOR_REAR]: {
            yIndex: 5,
            xPosition: 1.87,
            zOffset: 0.24,
            layerYIndex: 4,
        },
    },
}

export const THINGS_EL_CERRITO_REATTA = {
    [PUPPET]: {
        [PUPPET_REATTA]: {
            yIndex: 3,
            xPosition: 9.75,
            zOffset: -0.05,
        },
    },
}
