import NohoNeighbourhood from './NohoNeighbourhood'
import NohoHouseLeft from './NohoHouseLeft'
import NohoHouseRight from './NohoHouseRight'
import FireHydrant from './FireHydrant'

import {
    NOHO_NEIGHBOURHOOD,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    FIRE_HYDRANT
} from 'scene/cutoutKeys'

const CUTOUTS_NOHO_HOUSES = {
    [NOHO_NEIGHBOURHOOD]: NohoNeighbourhood,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [FIRE_HYDRANT]: FireHydrant
}

export {
    CUTOUTS_NOHO_HOUSES
}
