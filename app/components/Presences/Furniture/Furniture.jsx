import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BedroomDesk from './Furnitures/Bedroom/BedroomDesk'
import CaptainBedMattress from './Furnitures/Bedroom/CaptainBedMattress'
import SchoolbusSeatFront from './Furnitures/Schoolbus/SchoolbusSeatFront'
import SchoolbusSeatRear from './Furnitures/Schoolbus/SchoolbusSeatRear'
import BuoyFloat from './Furnitures/Buoy/BuoyFloat'
import BennettCushions from './Furnitures/BennettCouch/BennettCushions'
import GoKartSeatLeft from './Furnitures/GoKarts/GoKartSeatLeft'
import GoKartSeatRight from './Furnitures/GoKarts/GoKartSeatRight'
import GoKartDashboardLeft from './Furnitures/GoKarts/GoKartDashboardLeft'
import GoKartDashboardRight from './Furnitures/GoKarts/GoKartDashboardRight'
import LightSwitch from './Furnitures/BennettBed/LightSwitch'
import BennettMattress from './Furnitures/BennettBed/BennettMattress'
import BennettPillows from './Furnitures/BennettBed/BennettPillows'
import ArmchairLeft from './Furnitures/WaitingRoom/ArmchairLeft'
import ArmchairRight from './Furnitures/WaitingRoom/ArmchairRight'
import LizMattress from './Furnitures/LizBed/LizMattress'
import LizPillows from './Furnitures/LizBed/LizPillows'
import LizMattressReflection from './Furnitures/LizBed/LizMattressReflection'
import LizPillowsReflection from './Furnitures/LizBed/LizPillowsReflection'
import SaturnSeatFront from './Furnitures/StationWagon/SaturnSeatFront'
import SaturnSeatRear from './Furnitures/StationWagon/SaturnSeatRear'
import SaturnDashboard from './Furnitures/StationWagon/SaturnDashboard'
import AtticCushions from './Furnitures/Attic/AtticCushions'
import LizCushions from './Furnitures/LizCouch/LizCushions'
import MiriamCushions from './Furnitures/SnowglobesPresent/MiriamCushions'
import ReattaSeat from './Furnitures/ElCerrito/ReattaSeat'
import ReattaSeatLowered from './Furnitures/ElCerrito/ReattaSeatLowered'
import ReattaDashboard from './Furnitures/ElCerrito/ReattaDashboard'
import HospitalMattress from './Furnitures/Deathbed/HospitalMattress'

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
