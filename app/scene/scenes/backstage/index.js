import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../../constants/scene/actors'
import { BACKSTAGE } from '../../../constants/scene/actors/instances/songs'
import { DOUBLE_ALBERT } from '../../../constants/scene/actors/instances/khari'
import { FLAPPER } from '../../../constants/scene/actors/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [BACKSTAGE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
