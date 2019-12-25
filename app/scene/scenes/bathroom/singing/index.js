import {
    YOUNG_BENNETT,
    ANITA
} from 'constants/scene/actors'
import { CHEERING } from 'constants/scene/actors/anita'
import { SINGING } from 'constants/scene/actors/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [SINGING]: {
            yIndex: 3,
            xPosition: 6,
            zOffset: 0.25
        }
    },
    [ANITA]: {
        [CHEERING]: {
            yIndex: 5,
            xPosition: 4.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
