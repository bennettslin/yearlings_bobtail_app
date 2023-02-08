import {
    CUTOUT,
    FIXTURE,
    FLAT,
} from '../../../../../src/constants/scene/things'
import { STAGE_CUTOUT } from '../../../../../src/constants/scene/things/cutouts'
import { MANNEQUIN } from '../../../../../src/constants/scene/things/fixtures'
import {
    THEATRE_DRAPE_SIDE__LEFT,
    THEATRE_DRAPE_SIDE__RIGHT,
    THEATRE_DRAPE_TOP,
    THEATRE_LEG_SIDE__LEFT,
    THEATRE_LEG_SIDE__RIGHT,
    THEATRE_LEG_TOP,
} from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
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
            xPosition: -0.5,
        },
        [THEATRE_DRAPE_SIDE__RIGHT]: {
            yIndex: 1,
            xPosition: 11.5,
        },
        [THEATRE_DRAPE_TOP]: {
            yIndex: 1,
            zOffset: 6,
            layerYIndex: 0,
        },
        [THEATRE_LEG_SIDE__LEFT]: {
            yIndex: 2,
            xPosition: -0.5,
            flipHorizontal: true,
        },
        [THEATRE_LEG_SIDE__RIGHT]: {
            yIndex: 2,
            xPosition: 11.5,
            flipHorizontal: true,
        },
        [THEATRE_LEG_TOP]: {
            yIndex: 2,
            zOffset: 6.25,
            layerYIndex: 1,
            flipHorizontal: true,
        },
    },
}
