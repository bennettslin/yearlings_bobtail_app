import { CARDBOARD } from '../../../constants/scene'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT
} from '../../../constants/scene/things/cardboards'
import {
    PEOPLE_ALL__SHARED,
    PEOPLE_BENNETT__SHARED,
    PEOPLE_ODIN__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2.5,
            scaleFactor: 0.2,
            zOffset: 2.5,
            sharedStyle: [
                PEOPLE_ALL__SHARED,
                PEOPLE_BENNETT__SHARED,
                PEOPLE_ODIN__SHARED
            ]
        },
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1,
            zOffset: 0.5,
            scaleFactor: 0.2
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 4,
            zOffset: 1,
            scaleFactor: 0.2
        }
    }
}

export default ARRANGEMENTS_THINGS
