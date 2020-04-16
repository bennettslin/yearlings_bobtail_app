import {
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
import { EL_CERRITO_TREE } from '../../../constants/scene/things/cutouts'
import {
    FREEWAY_SIGN,
    CONDOM_WRAPPER_MIRIAM,
    USED_CONDOM_MIRIAM
} from '../../../constants/scene/things/fixtures'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from '../../../constants/scene/things/flats'
import {
    REATTA_EXTERIOR_FRONT,
    REATTA_EXTERIOR_REAR,
    REATTA_INTERIOR,
    REATTA_SEAT_BOTTOM__FRONT,
    REATTA_SEAT_BOTTOM__REAR,
    REATTA_SEAT_BACK,
    REATTA_SEAT_BACK_DOWN
} from '../../../constants/scene/things/panels'
import { PUPPET_REATTA } from '../../../constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [EL_CERRITO_TREE]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5
        }
    },
    [FIXTURE]: {
        [FREEWAY_SIGN]: {
            yIndex: 2,
            xPosition: 8.5,
            zOffset: -0.1,
            scaleFactor: 0.7
        },
        [CONDOM_WRAPPER_MIRIAM]: {
            yIndex: 5,
            xPosition: 1.25,
            zOffset: 0.11
        },
        [USED_CONDOM_MIRIAM]: {
            yIndex: 5,
            xPosition: 1.8,
            zOffset: 0.05
        }
    },
    [FLAT]: {
        [EL_CERRITO_FAR]: {
            xPosition: 9.8,
            scaleFactor: 0.47,
            trimBottom: 0.05
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            xPosition: 8.9,
            scaleFactor: 0.4
        }
    },
    [PANEL]: {
        [REATTA_INTERIOR]: {
            yIndex: 1,
            xPosition: 4.1,
            scaleFactor: 0.35
        },
        [REATTA_SEAT_BOTTOM__FRONT]: {
            yIndex: 5,
            xPosition: 2.07,
            zOffset: 0.79,
            scaleFactor: 0.4,
            layerYIndex: 4
        },
        [REATTA_SEAT_BOTTOM__REAR]: {
            yIndex: 5,
            xPosition: 2.07,
            zOffset: 0.79,
            scaleFactor: 0.4,
            layerYIndex: 3
        },
        [REATTA_SEAT_BACK]: {
            yIndex: 5,
            xPosition: 1.68,
            zOffset: 1.47,
            scaleFactor: 0.4,
            layerYIndex: 3
        },
        [REATTA_SEAT_BACK_DOWN]: {
            yIndex: 5,
            xPosition: 1.26,
            zOffset: 1.3,
            scaleFactor: 0.4,
            layerYIndex: 4
        },
        [REATTA_EXTERIOR_FRONT]: {
            yIndex: 5,
            xPosition: 5.51,
            zOffset: 1.5,
            scaleFactor: 0.35
        },
        [REATTA_EXTERIOR_REAR]: {
            yIndex: 5,
            xPosition: 1.87,
            zOffset: 0.24,
            scaleFactor: 0.35,
            layerYIndex: 4
        }
    }
}

export const THINGS_EL_CERRITO_REATTA = {
    [PUPPET]: {
        [PUPPET_REATTA]: {
            yIndex: 3,
            xPosition: 9.75,
            zOffset: -0.05,
            scaleFactor: 0.6
        }
    }
}
