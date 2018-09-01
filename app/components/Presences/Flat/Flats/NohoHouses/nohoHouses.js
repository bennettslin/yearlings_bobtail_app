import NohoNeighbourhood from './NohoNeighbourhood'
import NohoHouseLeft from './NohoHouseLeft'
import NohoHouseRight from './NohoHouseRight'

import {
    NOHO_NEIGHBOURHOOD,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT
} from 'scene/flatKeys'

const FLATS_NOHO_HOUSES = {
    [NOHO_NEIGHBOURHOOD]: NohoNeighbourhood,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight
}

export {
    FLATS_NOHO_HOUSES
}
