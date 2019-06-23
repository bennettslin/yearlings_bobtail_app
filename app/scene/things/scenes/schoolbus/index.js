import {
    BACKDROP,
    FIXTURE,
    PANEL
} from 'constants/scene'
import { SCHOOLBUS_THOUGHT_BACKDROP } from '../../keys/backdrops'
import {
    BACKPACK_BENNETT,
    BACKPACK_SASHA,
    BACKPACK_JEWISH_BOY
} from '../../keys/fixtures'
import {
    SCHOOLBUS_EXTERIOR,
    SCHOOLBUS_INTERIOR
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SCHOOLBUS_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 7
            }
        }
    },
    [FIXTURE]: {
        [BACKPACK_BENNETT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BACKPACK_SASHA]: {
            yIndex: 2,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BACKPACK_JEWISH_BOY]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PANEL]: {
        [SCHOOLBUS_INTERIOR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 6
            }
        },
        [SCHOOLBUS_EXTERIOR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
