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
            xPosition: 10.5,
            zOffset: -0.075,
        },
    },
    [FIXTURE]: {
        [MANNEQUIN]: {
            yIndex: 5,
            xPosition: 0.25,
        },
    },
    [FLAT]: {
        [THEATRE_DRAPE_SIDE__LEFT]: {
            yIndex: 1,
            xPosition: 0,
        },
        [THEATRE_DRAPE_SIDE__RIGHT]: {
            yIndex: 1,
            xPosition: 11,
        },
        [THEATRE_DRAPE_TOP]: {
            yIndex: 1,
            zOffset: 6.5,
            layerYIndex: 0,
        },
        [THEATRE_LEG_SIDE__BACK_LEFT]: {
            yIndex: 2,
            xPosition: 0,
        },
        [THEATRE_LEG_SIDE__BACK_RIGHT]: {
            yIndex: 2,
            xPosition: 11,
        },
        [THEATRE_LEG_SIDE__FRONT_LEFT]: {
            yIndex: 3,
            xPosition: 0,
        },
        [THEATRE_LEG_SIDE__FRONT_RIGHT]: {
            yIndex: 3,
            xPosition: 11,
        },
        [THEATRE_LEG_TOP__BACK]: {
            yIndex: 2,
            zOffset: 6.5,
            layerYIndex: 1,
        },
        [THEATRE_LEG_TOP__FRONT]: {
            yIndex: 3,
            zOffset: 6.5,
            layerYIndex: 2,
        },
    },
}
