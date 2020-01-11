import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from '../../../constants/scene/actors'
import { STATION_WAGON } from '../../../constants/scene/actors/songs'

export default {
    [BENNETT]: {
        [STATION_WAGON]: {
            yIndex: 3,
            xPosition: 3.5,
            zOffset: 0.5
        }
    },
    [ANA]: {
        [STATION_WAGON]: {
            yIndex: 3,
            xPosition: 6.5,
            zOffset: 0.5
        }
    },
    [HOWIE]: {
        [STATION_WAGON]: {
            yIndex: 2,
            xPosition: 6.5,
            zOffset: 0.5
        }
    },
    [TOMER]: {
        [STATION_WAGON]: {
            yIndex: 2,
            xPosition: 3.5,
            zOffset: 0.5
        }
    }
}
