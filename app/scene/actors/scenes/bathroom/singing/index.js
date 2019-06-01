import {
    YOUNG_BENNETT,
    ANITA
} from '../../../keys'
import { CHEERING } from '../../../keys/instances/anita'
import { SINGING } from '../../../keys/instances/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [SINGING]: {
            yIndex: 3,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 3
            }
        }
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 4.5,
                xWidth: 1.5,
                zHeight: 2.75
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
