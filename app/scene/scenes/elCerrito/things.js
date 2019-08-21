import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene'
import { GOLDEN_GATE_BACKDROP } from '../../../constants/scene/things/backdrops'
import { EL_CERRITO_TREE } from '../../../constants/scene/things/cutouts'
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
import {
    INTERIOR_SHARED,
    REATTA_SHARED
} from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_MIRIAM_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [GOLDEN_GATE_BACKDROP]: {
            yIndex: -1,
            xPosition: 5.5,
            scaleFactor: 0.675,
            trimBottom: 0.25
        }
    },
    [CUTOUT]: {
        [EL_CERRITO_TREE]: {
            yIndex: 1,
            xPosition: 2,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [EL_CERRITO_FAR]: {
            yIndex: -1,
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
            scaleFactor: 0.35,
            sharedStyle: INTERIOR_SHARED
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
            xPosition: 4.1,
            scaleFactor: 0.35,
            sharedStyle: REATTA_SHARED
        }
    }
}

export const THINGS_EL_CERRITO_REATTA = {
    [PUPPET]: {
        [PUPPET_REATTA]: {
            yIndex: 3,
            xPosition: 9.5,
            zOffset: -0.025,
            scaleFactor: 0.6,
            sharedStyle: [
                REATTA_SHARED,
                PEOPLE_ALL_SHARED,
                PEOPLE_BENNETT_SHARED,
                PEOPLE_MIRIAM_SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
