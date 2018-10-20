import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BedroomDesk from './Furnitures/BedroomDesk'
import CaptainBedMattress from './Furnitures/CaptainBedMattress'
import SchoolbusSeatFront from './Furnitures/SchoolbusSeatFront'
import SchoolbusSeatRear from './Furnitures/SchoolbusSeatRear'
import BuoyFloat from './Furnitures/BuoyFloat'
import BennettCushions from './Furnitures/BennettCushions'
import GoKartSeatLeft from './Furnitures/GoKartSeatLeft'
import GoKartSeatRight from './Furnitures/GoKartSeatRight'
import GoKartDashboardLeft from './Furnitures/GoKartDashboardLeft'
import GoKartDashboardRight from './Furnitures/GoKartDashboardRight'
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
import SaturnDashboard from './Furnitures/SaturnDashboard'
import AtticCushions from './Furnitures/AtticCushions'
import LizCushions from './Furnitures/LizCushions'
import MiriamCushions from './Furnitures/MiriamCushions'
import ReattaSeat from './Furnitures/ReattaSeat'
import ReattaSeatLowered from './Furnitures/ReattaSeatLowered'
import ReattaDashboard from './Furnitures/ReattaDashboard'
import HospitalMattress from './Furnitures/HospitalMattress'

import {
    BEDROOM_DESK,
    CAPTAIN_BED_MATTRESS,
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR,
    BUOY_FLOAT,
    BENNETT_CUSHIONS,
    GO_KART_SEAT_LEFT,
    GO_KART_SEAT_RIGHT,
    GO_KART_DASHBOARD_LEFT,
    GO_KART_DASHBOARD_RIGHT,
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
    SATURN_DASHBOARD,
    ATTIC_CUSHIONS,
    LIZ_CUSHIONS,
    MIRIAM_CUSHIONS,
    REATTA_SEAT,
    REATTA_SEAT_LOWERED,
    REATTA_DASHBOARD,
    HOSPITAL_MATTRESS
} from 'scene/furnitureKeys'

const FURNITURES_MAP = {
    [BEDROOM_DESK]: BedroomDesk,
    [CAPTAIN_BED_MATTRESS]: CaptainBedMattress,
    [SCHOOLBUS_SEAT_FRONT]: SchoolbusSeatFront,
    [SCHOOLBUS_SEAT_REAR]: SchoolbusSeatRear,
    [BUOY_FLOAT]: BuoyFloat,
    [BENNETT_CUSHIONS]: BennettCushions,
    [GO_KART_SEAT_LEFT]: GoKartSeatLeft,
    [GO_KART_SEAT_RIGHT]: GoKartSeatRight,
    [GO_KART_DASHBOARD_LEFT]: GoKartDashboardLeft,
    [GO_KART_DASHBOARD_RIGHT]: GoKartDashboardRight,
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
    [SATURN_DASHBOARD]: SaturnDashboard,
    [ATTIC_CUSHIONS]: AtticCushions,
    [LIZ_CUSHIONS]: LizCushions,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [REATTA_SEAT]: ReattaSeat,
    [REATTA_SEAT_LOWERED]: ReattaSeatLowered,
    [REATTA_DASHBOARD]: ReattaDashboard,
    [HOSPITAL_MATTRESS]: HospitalMattress
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Furniture = ({

    className,
    nameKey,

...other }) => {

    const FurnitureComponent =
        FURNITURES_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FurnitureComponent {...other}
            className={cx(
                'Furniture',
                className
            )}
        />
    )
}

Furniture.propTypes = propTypes;

export default Furniture
