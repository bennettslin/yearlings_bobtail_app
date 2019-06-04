import PropTypes from 'prop-types'

import BedroomDesk from './Furnitures/BedroomDesk'
import CaptainBedPillowBlanket from './Furnitures/CaptainBedPillowBlanket'
import BennettCushions from './Furnitures/BennettCushions'
import BennettPillowsBlanket from './Furnitures/BennettPillowsBlanket'
import LizPillows from './Furnitures/LizPillows'
import LizPillowsReflection from './Furnitures/LizPillowsReflection'
import AtticCushions from './Furnitures/AtticCushions'
import LizCushions from './Furnitures/LizCushions'
import MiriamCushions from './Furnitures/MiriamCushions'
import HospitalPillow from './Furnitures/HospitalPillow'
import HospitalPillowLowered from './Furnitures/HospitalPillowLowered'

import {
    BEDROOM_DESK,
    CAPTAIN_BED_PILLOW_BLANKET,
    BENNETT_CUSHIONS,
    BENNETT_PILLOWS_BLANKET,
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
    ATTIC_CUSHIONS,
    LIZ_CUSHIONS,
    LIZ_CUSHIONS_THOUGHT,
    MIRIAM_CUSHIONS,
    HOSPITAL_PILLOW,
    HOSPITAL_PILLOW_LOWERED
} from 'scene/things/keys/furniture'

export const propTypes = {
    [BEDROOM_DESK]: PropTypes.bool,
    [CAPTAIN_BED_PILLOW_BLANKET]: PropTypes.bool,
    [BENNETT_CUSHIONS]: PropTypes.bool,
    [BENNETT_PILLOWS_BLANKET]: PropTypes.bool,
    [LIZ_PILLOWS]: PropTypes.bool,
    [LIZ_PILLOWS_REFLECTION]: PropTypes.bool,
    [ATTIC_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS_THOUGHT]: PropTypes.bool,
    [MIRIAM_CUSHIONS]: PropTypes.bool,
    [HOSPITAL_PILLOW]: PropTypes.bool,
    [HOSPITAL_PILLOW_LOWERED]: PropTypes.bool
}

export default {
    [BEDROOM_DESK]: BedroomDesk,
    [CAPTAIN_BED_PILLOW_BLANKET]: CaptainBedPillowBlanket,
    [BENNETT_CUSHIONS]: BennettCushions,
    [BENNETT_PILLOWS_BLANKET]: BennettPillowsBlanket,
    [LIZ_PILLOWS]: LizPillows,
    [LIZ_PILLOWS_REFLECTION]: LizPillowsReflection,
    [ATTIC_CUSHIONS]: AtticCushions,
    [LIZ_CUSHIONS]: LizCushions,
    [LIZ_CUSHIONS_THOUGHT]: LizCushions,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [HOSPITAL_PILLOW]: HospitalPillow,
    [HOSPITAL_PILLOW_LOWERED]: HospitalPillowLowered
}
