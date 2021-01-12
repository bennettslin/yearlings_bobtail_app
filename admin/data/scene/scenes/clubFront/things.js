import {
    CUTOUT,
    FIXTURE,
} from '../../../../../app/constants/scene/things'
import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    CASH_BOX,
    DRUMKIT,
} from '../../../../../app/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [MONITOR_FRONT__LEFT]: {
            yIndex: 4,
            xPosition: 2,
        },
        [MONITOR_FRONT__RIGHT]: {
            yIndex: 4,
            xPosition: 9,
            flipHorizontal: true,
        },
        [WALL_SPEAKER_FRONT__LEFT]: {
            yIndex: 1,
            xPosition: 1.5,
            zOffset: 4.5,
        },
        [WALL_SPEAKER_FRONT__RIGHT]: {
            yIndex: 1,
            xPosition: 9.5,
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
