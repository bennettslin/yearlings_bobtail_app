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
    USED_CONDOM_MIRIAM
} from '../../../constants/scene/things/fixtures'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from '../../../constants/scene/things/flats'
import {
    REATTA_EXTERIOR,
    REATTA_INTERIOR,
    REATTA_SEAT,
    REATTA_SEAT_DOWN
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
        [USED_CONDOM_MIRIAM]: {
            yIndex: 4,
            xPosition: 3
        }
    },
    [FLAT]: {
        [EL_CERRITO_FAR]: {
            xPosition: 10.1,
            scaleFactor: 0.47,
            trimBottom: 0.05
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            xPosition: 8.75,
            scaleFactor: 0.4
        }
    },
    [PANEL]: {
        [REATTA_INTERIOR]: {
            yIndex: 1,
            xPosition: 4.1,
            scaleFactor: 0.35
        },
        [REATTA_SEAT]: {
            yIndex: 5,
            xPosition: 2,
            zOffset: 0.85,
            scaleFactor: 0.4
        },
        [REATTA_SEAT_DOWN]: {
            yIndex: 5,
            xPosition: 1.66,
            zOffset: 0.85,
            scaleFactor: 0.4
        },
        [REATTA_EXTERIOR]: {
            yIndex: 5,
            xPosition: 4.3,
            scaleFactor: 0.35
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
