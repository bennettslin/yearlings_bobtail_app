import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from '../../../../../app/constants/scene/actors'
import { STATION_WAGON } from '../../../../../app/constants/scene/actors/songs'

export default {
    [BENNETT]: {
        [STATION_WAGON]: {
            yIndex: 3,
            xPosition: 3.3,
            zOffset: -1.02
        }
    },
    [TOMER]: {
        [STATION_WAGON]: {
            yIndex: 2,
            xPosition: 3.6
        }
    },
    [ANA]: {
        [STATION_WAGON]: {
            yIndex: 3,
            xPosition: 5.8,
            zOffset: -0.6
        }
    },
    [HOWIE]: {
        [STATION_WAGON]: {
            yIndex: 2,
            xPosition: 6.7,
            zOffset: -0.04,
            layerYIndex: 3
        }
    }
}
