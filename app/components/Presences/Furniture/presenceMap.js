import PropTypes from 'prop-types'

import BedroomDesk from './Furnitures/BedroomDesk'
import CaptainBedMattress from './Furnitures/CaptainBedMattress'
import SchoolbusSeatFront from './Furnitures/SchoolbusSeatFront'
import SchoolbusSeatRear from './Furnitures/SchoolbusSeatRear'
import BuoyFloat from './Furnitures/BuoyFloat'
import BennettCushions from './Furnitures/BennettCushions'
import GoKartSeatLeft from './Furnitures/GoKartSeatLeft'
import GoKartSeatRight from './Furnitures/GoKartSeatRight'
import LightSwitch from './Furnitures/LightSwitch'
import BennettMattress from './Furnitures/BennettMattress'
import BennettPillows from './Furnitures/BennettPillows'
import ArmchairLeft from './Furnitures/ArmchairLeft'
import ArmchairRight from './Furnitures/ArmchairRight'
import LizMattress from './Furnitures/LizMattress'
import LizPillows from './Furnitures/LizPillows'
import LizMattressReflection from './Furnitures/LizMattressReflection'
import LizPillowsReflection from './Furnitures/LizPillowsReflection'
import SaturnSeatFront from './Furnitures/SaturnSeatFront'
import SaturnSeatRear from './Furnitures/SaturnSeatRear'
import AtticCushions from './Furnitures/AtticCushions'
import LizCushions from './Furnitures/LizCushions'
import MiriamCushions from './Furnitures/MiriamCushions'
import ReattaSeat from './Furnitures/ReattaSeat'
import ReattaSeatLowered from './Furnitures/ReattaSeatLowered'
import HospitalMattress from './Furnitures/HospitalMattress'
import HospitalMattressLowered from './Furnitures/HospitalMattressLowered'

import {
    BEDROOM_DESK,
    CAPTAIN_BED_MATTRESS,
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR,
    BUOY_FLOAT,
    BENNETT_CUSHIONS,
    GO_KART_SEAT_LEFT,
    GO_KART_SEAT_RIGHT,
    LIGHT_SWITCH,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS,
    ARMCHAIR_LEFT,
    ARMCHAIR_RIGHT,
    LIZ_MATTRESS,
    LIZ_PILLOWS,
    LIZ_MATTRESS_REFLECTION,
    LIZ_PILLOWS_REFLECTION,
    SATURN_SEAT_FRONT,
    SATURN_SEAT_REAR,
    ATTIC_CUSHIONS,
    LIZ_CUSHIONS,
    LIZ_CUSHIONS_THOUGHT,
    MIRIAM_CUSHIONS,
    REATTA_SEAT,
    REATTA_SEAT_LOWERED,
    HOSPITAL_MATTRESS,
    HOSPITAL_MATTRESS_LOWERED
} from 'scene/furnitureKeys'

const propTypes = {
    [BEDROOM_DESK]: PropTypes.bool,
    [CAPTAIN_BED_MATTRESS]: PropTypes.bool,
    [SCHOOLBUS_SEAT_FRONT]: PropTypes.bool,
    [SCHOOLBUS_SEAT_REAR]: PropTypes.bool,
    [BUOY_FLOAT]: PropTypes.bool,
    [BENNETT_CUSHIONS]: PropTypes.bool,
    [GO_KART_SEAT_LEFT]: PropTypes.bool,
    [GO_KART_SEAT_RIGHT]: PropTypes.bool,
    [LIGHT_SWITCH]: PropTypes.bool,
    [BENNETT_MATTRESS]: PropTypes.bool,
    [BENNETT_PILLOWS]: PropTypes.bool,
    [ARMCHAIR_LEFT]: PropTypes.bool,
    [ARMCHAIR_RIGHT]: PropTypes.bool,
    [LIZ_MATTRESS]: PropTypes.bool,
    [LIZ_PILLOWS]: PropTypes.bool,
    [LIZ_MATTRESS_REFLECTION]: PropTypes.bool,
    [LIZ_PILLOWS_REFLECTION]: PropTypes.bool,
    [SATURN_SEAT_FRONT]: PropTypes.bool,
    [SATURN_SEAT_REAR]: PropTypes.bool,
    [ATTIC_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS_THOUGHT]: PropTypes.bool,
    [MIRIAM_CUSHIONS]: PropTypes.bool,
    [REATTA_SEAT]: PropTypes.bool,
    [REATTA_SEAT_LOWERED]: PropTypes.bool,
    [HOSPITAL_MATTRESS]: PropTypes.bool,
    [HOSPITAL_MATTRESS_LOWERED]: PropTypes.bool
}

export { propTypes }

export default {
    [BEDROOM_DESK]: BedroomDesk,
    [CAPTAIN_BED_MATTRESS]: CaptainBedMattress,
    [SCHOOLBUS_SEAT_FRONT]: SchoolbusSeatFront,
    [SCHOOLBUS_SEAT_REAR]: SchoolbusSeatRear,
    [BUOY_FLOAT]: BuoyFloat,
    [BENNETT_CUSHIONS]: BennettCushions,
    [GO_KART_SEAT_LEFT]: GoKartSeatLeft,
    [GO_KART_SEAT_RIGHT]: GoKartSeatRight,
    [LIGHT_SWITCH]: LightSwitch,
    [BENNETT_MATTRESS]: BennettMattress,
    [BENNETT_PILLOWS]: BennettPillows,
    [ARMCHAIR_LEFT]: ArmchairLeft,
    [ARMCHAIR_RIGHT]: ArmchairRight,
    [LIZ_MATTRESS]: LizMattress,
    [LIZ_PILLOWS]: LizPillows,
    [LIZ_MATTRESS_REFLECTION]: LizMattressReflection,
    [LIZ_PILLOWS_REFLECTION]: LizPillowsReflection,
    [SATURN_SEAT_FRONT]: SaturnSeatFront,
    [SATURN_SEAT_REAR]: SaturnSeatRear,
    [ATTIC_CUSHIONS]: AtticCushions,
    [LIZ_CUSHIONS]: LizCushions,
    [LIZ_CUSHIONS_THOUGHT]: LizCushions,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [REATTA_SEAT]: ReattaSeat,
    [REATTA_SEAT_LOWERED]: ReattaSeatLowered,
    [HOSPITAL_MATTRESS]: HospitalMattress,
    [HOSPITAL_MATTRESS_LOWERED]: HospitalMattressLowered
}
