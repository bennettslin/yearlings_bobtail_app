import {
    BACKDROP,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET
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
            arrangement: {
                xPosition: 2,
                xWidth: 6,
                zHeight: 6
            }
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
            arrangement: {
                xPosition: 4,
                xWidth: 9,
                zHeight: 4
            }
        },
        [REATTA_INTERIOR]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 9,
                zHeight: 4
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
