import {
    BACKDROPS,
    CUTOUTS,
    FLATS,
    PANELS,
    PUPPETS
} from 'constants/scene'
import { GOLDEN_GATE_BACKDROP } from '../../keys/backdrops'
import { EL_CERRITO_TREE } from '../../keys/cutouts'
import {
    EL_CERRITO_FAR,
    EL_CERRITO_NEAR
} from '../../keys/flats'
import {
    REATTA_EXTERIOR,
    REATTA_INTERIOR
} from '../../keys/panels'
import { PUPPET_REATTA } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [GOLDEN_GATE_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 5
            }
        }
    },
    [CUTOUTS]: {
        [EL_CERRITO_TREE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 2,
                xWidth: 6,
                zHeight: 6
            }
        }
    },
    [FLATS]: {
        [EL_CERRITO_FAR]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
                xWidth: 5,
                zHeight: 2
            }
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            arrangement: {
                xFloat: 9,
                xWidth: 5,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [REATTA_EXTERIOR]: {
            yIndex: 5,
            arrangement: {
                xFloat: 4,
                xWidth: 9,
                zHeight: 4
            }
        },
        [REATTA_INTERIOR]: {
            yIndex: 2,
            arrangement: {
                xFloat: 4,
                xWidth: 9,
                zHeight: 4
            }
        }
    },
    [PUPPETS]: {
        [PUPPET_REATTA]: {
            yIndex: 3,
            arrangement: {
                xFloat: 10,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
