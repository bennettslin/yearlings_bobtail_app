import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
} from 'constants/scene'
import { GOLDEN_GATE_BACKDROP } from 'constants/scene/things/backdrops'
import { EL_CERRITO_TREE } from 'constants/scene/things/cutouts'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from 'constants/scene/things/flats'
import {
    REATTA_EXTERIOR,
    REATTA_INTERIOR
} from 'constants/scene/things/panels'
import { PUPPET_REATTA } from 'constants/scene/things/puppets'
import { INTERIOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [GOLDEN_GATE_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 5
            }
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
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 2
            }
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 1
            }
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
            xPosition: 4,
            scaleFactor: 0.25,
            sharedStyle: INTERIOR_SHARED
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
