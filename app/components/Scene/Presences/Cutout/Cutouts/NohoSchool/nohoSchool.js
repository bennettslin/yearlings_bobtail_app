import NohoSchoolNeighbourhood from './NohoSchoolNeighbourhood'
import NohoSchoolhouse from './NohoSchoolhouse'
import PlaygroundSlide from './PlaygroundSlide'
import NurseOfficeBubble from './NurseOfficeBubble'

import {
    NOHO_SCHOOL_NEIGHBOURHOOD,
    NOHO_SCHOOLHOUSE,
    PLAYGROUND_SLIDE,
    NURSE_OFFICE_BUBBLE
} from 'scene/cutoutKeys'

const CUTOUTS_NOHO_SCHOOL = {
    [NOHO_SCHOOL_NEIGHBOURHOOD]: NohoSchoolNeighbourhood,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [PLAYGROUND_SLIDE]: PlaygroundSlide,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble
}

export {
    CUTOUTS_NOHO_SCHOOL
}
