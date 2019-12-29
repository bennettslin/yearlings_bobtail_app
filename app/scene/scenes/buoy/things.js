import { CARDBOARD } from '../../../constants/scene/things'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT
} from '../../../constants/scene/things/cardboards'
import { ODIN__SHARED } from '../../sharedStyles/animals'
import { BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../sharedStyles/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2.5,
            scaleFactor: 0.2,
            zOffset: 2.5,
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT,
                ODIN__SHARED
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
