import {
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
import { GOLDEN_GATE_BACKDROP } from '../../../constants/scene/things/backdrops'
import { EL_CERRITO_TREE } from '../../../constants/scene/things/cutouts'
import { FREEWAY_SIGN } from '../../../constants/scene/things/fixtures'
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
import { BENNETT, MIRIAM } from '../../../constants/scene/actors'
import { FREEWAY_SIGN__SHARED } from '../../sharedStyles/outdoor'
import { ALL_PEOPLE__SHARED } from '../../sharedStyles/people'
import {
    FOLIAGE__SHARED
} from '../../sharedStyles/plants'
import {
    INTERIOR__SHARED,
    REATTA__SHARED
} from '../../sharedStyles/vehicles'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [GOLDEN_GATE_BACKDROP]: {
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
    [FIXTURE]: {
        [FREEWAY_SIGN]: {
            yIndex: 2,
            xPosition: 8.5,
            zOffset: -0.1,
            scaleFactor: 0.7,
            sharedStyle: FREEWAY_SIGN__SHARED
        }
    },
    [FLAT]: {
        [EL_CERRITO_FAR]: {
            xPosition: 10.1,
            scaleFactor: 0.47,
            trimBottom: 0.05,
            sharedStyle: FOLIAGE__SHARED
        },
        [EL_CERRITO_NEAR]: {
            yIndex: 5,
            xPosition: 8.75,
            scaleFactor: 0.4,
            sharedStyle: FOLIAGE__SHARED
        }
    },
    [PANEL]: {
        [REATTA_INTERIOR]: {
            yIndex: 1,
            xPosition: 4.1,
            scaleFactor: 0.35,
            sharedStyle: INTERIOR__SHARED
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
            sharedStyle: REATTA__SHARED
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
                REATTA__SHARED,
                ALL_PEOPLE__SHARED,
                BENNETT,
                MIRIAM
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
