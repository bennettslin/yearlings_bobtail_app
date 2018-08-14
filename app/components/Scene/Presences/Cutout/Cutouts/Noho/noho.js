import NohoNeighbourhood from './NohoNeighbourhood'
import NohoHouseLeft from './NohoHouseLeft'
import NohoHouseRight from './NohoHouseRight'
import NohoSchoolNeighbourhood from './NohoSchoolNeighbourhood'
import NohoSchoolhouse from './NohoSchoolhouse'
import NurseOfficeBubble from './NurseOfficeBubble'

import {
    NOHO_NEIGHBOURHOOD,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_NEIGHBOURHOOD,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE
} from 'constants/cutoutKeys'

const CUTOUTS_NOHO = {
    [NOHO_NEIGHBOURHOOD]: NohoNeighbourhood,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOL_NEIGHBOURHOOD]: NohoSchoolNeighbourhood,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble
}

export {
    CUTOUTS_NOHO
}
