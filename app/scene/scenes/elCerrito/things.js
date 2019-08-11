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
    REATTA_SEAT
} from '../../../constants/scene/things/panels'
import { PUPPET_REATTA } from '../../../constants/scene/things/puppets'
import { INTERIOR_SHARED } from '../../shared'

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
        [REATTA_EXTERIOR]: {
            yIndex: 5,
            xPosition: 4,
            scaleFactor: 0.25
        },
        [REATTA_INTERIOR]: {
            yIndex: 2,
            xPosition: 4.5,
            scaleFactor: 0.25,
            sharedStyle: INTERIOR_SHARED
        },
        [REATTA_SEAT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 10,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_EL_CERRITO_REATTA = {
    [PUPPET]: {
        [PUPPET_REATTA]: {
            yIndex: 3,
            arrangement: {
                xPosition: 10,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
