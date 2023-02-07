import {
    CUTOUT,
    FIXTURE,
    FLAT,
} from '../../../../../src/constants/scene/things'
import {
    SANDBAGS,
    STAGE_CUTOUT,
} from '../../../../../src/constants/scene/things/cutouts'
import { MANNEQUIN } from '../../../../../src/constants/scene/things/fixtures'
import {
    THEATRE_DRAPE_SIDE__LEFT,
    THEATRE_DRAPE_SIDE__RIGHT,
    THEATRE_DRAPE_TOP,
    THEATRE_LEG_SIDE__BACK_LEFT,
    THEATRE_LEG_SIDE__BACK_RIGHT,
    THEATRE_LEG_SIDE__FRONT_LEFT,
    THEATRE_LEG_SIDE__FRONT_RIGHT,
    THEATRE_LEG_TOP__BACK,
    THEATRE_LEG_TOP__FRONT,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 1,
            xPosition: 2.8,
        },
        [STAGE_CUTOUT]: {
            yIndex: 5,
            xPosition: 10,
        },
    },
    [FIXTURE]: {
        [MANNEQUIN]: {
            yIndex: 5,
            xPosition: 0.5,
        },
    },
    [FLAT]: {
        [THEATRE_DRAPE_SIDE__LEFT]: {
            yIndex: 0,
            xPosition: 0,
        },
        [THEATRE_DRAPE_SIDE__RIGHT]: {
            yIndex: 0,
            xPosition: 11,
        },
        [THEATRE_DRAPE_TOP]: {
            yIndex: 0,
            zOffset: 7,
            layerYIndex: -1,
        },
        [THEATRE_LEG_SIDE__BACK_LEFT]: {
            yIndex: 4,
            xPosition: 0,
        },
        [THEATRE_LEG_SIDE__BACK_RIGHT]: {
            yIndex: 4,
            xPosition: 11,
        },
        [THEATRE_LEG_SIDE__FRONT_LEFT]: {
            yIndex: 2,
            xPosition: 0,
        },
        [THEATRE_LEG_SIDE__FRONT_RIGHT]: {
            yIndex: 2,
            xPosition: 11,
        },
        [THEATRE_LEG_TOP__BACK]: {
            yIndex: 4,
            zOffset: 7,
            layerYIndex: 3,
        },
        [THEATRE_LEG_TOP__FRONT]: {
            yIndex: 2,
            zOffset: 7,
            layerYIndex: 1,
        },
    },
}
