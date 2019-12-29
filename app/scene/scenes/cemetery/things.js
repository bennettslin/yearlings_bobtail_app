import {
    BACKDROP,
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import { LOS_ANGELES_BACKDROP } from '../../../constants/scene/things/backdrops'
import { GRAVESTONE } from '../../../constants/scene/things/cutouts'
import {
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT
} from '../../../constants/scene/things/flats'
import { PALM_TREE__SHARED } from '../../shared/plants'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [LOS_ANGELES_BACKDROP]: {
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CUTOUT]: {
        [GRAVESTONE]: {
            yIndex: 5,
            xPosition: 5.5,
            scaleFactor: 0.35
        }
    },
    [FLAT]: {
        [CEMETERY_HILLS_LEFT]: {
            yIndex: 1,
            xPosition: -1.25,
            scaleFactor: 0.4,
            trimBottom: 0.2,
            alignLeft: true,
            sharedStyle: PALM_TREE__SHARED
        },
        [CEMETERY_HILLS_RIGHT]: {
            yIndex: 2,
            xPosition: 12,
            scaleFactor: 0.4,
            trimBottom: 0.2,
            alignRight: true,
            sharedStyle: PALM_TREE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
