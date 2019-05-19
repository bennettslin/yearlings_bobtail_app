import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../keys'
import { BACKSTAGE } from '../../keys/instances/songs'
import { DOUBLE_ALBERT } from '../../keys/instances/khari'
import { FLAPPER } from '../../keys/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [BACKSTAGE]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
