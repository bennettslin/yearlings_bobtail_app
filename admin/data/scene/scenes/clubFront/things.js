import {
    CUTOUT,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    CLUB_CURTAIN,
    CLUB_FLOOD_LIGHTS,
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER__FRONT_LEFT,
    WALL_SPEAKER__FRONT_RIGHT,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    CASH_BOX,
    DRUMKIT,
} from '../../../../../src/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [CLUB_CURTAIN]: {
            yIndex: 0,
        },
        [CLUB_FLOOD_LIGHTS]: {
            yIndex: 0,
            zOffset: 6,
        },
        [MONITOR_FRONT__LEFT]: {
            yIndex: 4,
            xPosition: 2,
        },
        [MONITOR_FRONT__RIGHT]: {
            yIndex: 4,
            xPosition: 9,
            flipHorizontal: true,
        },
        [WALL_SPEAKER__FRONT_LEFT]: {
            yIndex: 4,
            xPosition: 1.25,
            zOffset: 4.5,
        },
        [WALL_SPEAKER__FRONT_RIGHT]: {
            yIndex: 4,
            xPosition: 9.75,
            zOffset: 4.5,
            flipHorizontal: true,
        },
    },
    [FIXTURE]: {
        [DRUMKIT]: {
            yIndex: 1,
            zOffset: -0.1,
            layerYIndex: 2,
        },
    },
}

export const THINGS_CLUB_FRONT_M = {
    [FIXTURE]: {
        [CASH_BOX]: {
            yIndex: 5,
            xPosition: 2.8,
            zOffset: -0.25,
        },
    },
}
