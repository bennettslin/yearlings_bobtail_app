import NohoHousesBackdrop from './NohoHousesBackdrop'
import NohoHouseLeft from './NohoHouseLeft'
import NohoHouseRight from './NohoHouseRight'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT
} from 'scene/flatKeys'

const FLATS_NOHO_HOUSES = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight
}

export {
    FLATS_NOHO_HOUSES
}
