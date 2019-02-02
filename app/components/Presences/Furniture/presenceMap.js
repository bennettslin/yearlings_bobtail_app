import PropTypes from 'prop-types'

import BedroomDesk from './Furnitures/BedroomDesk'
import CaptainBedPillow from './Furnitures/CaptainBedPillow'
import BuoyFloat from './Furnitures/BuoyFloat'
import BennettCushions from './Furnitures/BennettCushions'
import LightSwitch from './Furnitures/LightSwitch'
import BennettPillows from './Furnitures/BennettPillows'
import LizPillows from './Furnitures/LizPillows'
import LizPillowsReflection from './Furnitures/LizPillowsReflection'
import AtticCushions from './Furnitures/AtticCushions'
import LizCushions from './Furnitures/LizCushions'
import MiriamCushions from './Furnitures/MiriamCushions'
import HospitalPillow from './Furnitures/HospitalPillow'
import HospitalPillowLowered from './Furnitures/HospitalPillowLowered'

import {
    BEDROOM_DESK,
    CAPTAIN_BED_PILLOW,
    BUOY_FLOAT,
    BENNETT_CUSHIONS,
    LIGHT_SWITCH,
    BENNETT_PILLOWS,
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
    ATTIC_CUSHIONS,
    LIZ_CUSHIONS,
    LIZ_CUSHIONS_THOUGHT,
    MIRIAM_CUSHIONS,
    HOSPITAL_PILLOW,
    HOSPITAL_PILLOW_LOWERED
} from 'scene/furnitureKeys'

export const propTypes = {
    [BEDROOM_DESK]: PropTypes.bool,
    [CAPTAIN_BED_PILLOW]: PropTypes.bool,
    [BUOY_FLOAT]: PropTypes.bool,
    [BENNETT_CUSHIONS]: PropTypes.bool,
    [LIGHT_SWITCH]: PropTypes.bool,
    [BENNETT_PILLOWS]: PropTypes.bool,
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
    [CAPTAIN_BED_PILLOW]: CaptainBedPillow,
    [BUOY_FLOAT]: BuoyFloat,
    [BENNETT_CUSHIONS]: BennettCushions,
    [LIGHT_SWITCH]: LightSwitch,
    [BENNETT_PILLOWS]: BennettPillows,
    [LIZ_PILLOWS]: LizPillows,
    [LIZ_PILLOWS_REFLECTION]: LizPillowsReflection,
    [ATTIC_CUSHIONS]: AtticCushions,
    [LIZ_CUSHIONS]: LizCushions,
    [LIZ_CUSHIONS_THOUGHT]: LizCushions,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [HOSPITAL_PILLOW]: HospitalPillow,
    [HOSPITAL_PILLOW_LOWERED]: HospitalPillowLowered
}
