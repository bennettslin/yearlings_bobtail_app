import {
    BENNETT,
    MARA,
    ANA,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/scene/actors'
import {
    MINGLING,
    WAITING
} from 'constants/scene/actors/instances/songs'
import { SIDELONG_HESITANCE } from 'constants/scene/actors/instances/bennett'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [SIDELONG_HESITANCE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MARA]: {
        [WAITING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [WAITING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [AMY]: {
        [MINGLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [MINGLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [WADE]: {
        [MINGLING]: {
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
