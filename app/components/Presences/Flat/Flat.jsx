import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHousesBackdrop from './Flats/NohoHouses/NohoHousesBackdrop'
import NohoHouseLeft from './Flats/NohoHouses/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouses/NohoHouseRight'
import NohoSchoolBackdrop from './Flats/NohoSchool/NohoSchoolBackdrop'
import NohoSchoolhouse from './Flats/NohoSchool/NohoSchoolhouse'
import NurseOfficeBubble from './Flats/NohoSchool/NurseOfficeBubble'
import ValleyBackdrop from './Flats/Freeway/ValleyBackdrop'
import BedroomBackdrop from './Flats/Bedroom/BedroomBackdrop'
import BedroomSirenBackdrop from './Flats/Bedroom/BedroomSirenBackdrop'
import BedroomBusBackdrop from './Flats/Bedroom/BedroomBusBackdrop'
import CaptainBedDrawers from './Flats/Bedroom/CaptainBedDrawers'
import DogsSketchbook from './Flats/Bedroom/DogsSketchbook'
import SpaceStationSketchbook from './Flats/Bedroom/SpaceStationSketchbook'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_BACKDROP,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE,
    VALLEY_BACKDROP,
    BEDROOM_BACKDROP,
    BEDROOM_SIREN_BACKDROP,
    BEDROOM_BUS_BACKDROP,
    CAPTAIN_BED_DRAWERS,
    DOGS_SKETCHBOOK,
    SPACE_STATION_SKETCHBOOK
} from 'scene/flatKeys'

const FLATS_MAP = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOL_BACKDROP]: NohoSchoolBackdrop,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble,
    [VALLEY_BACKDROP]: ValleyBackdrop,
    [BEDROOM_BACKDROP]: BedroomBackdrop,
    [BEDROOM_SIREN_BACKDROP]: BedroomSirenBackdrop,
    [BEDROOM_BUS_BACKDROP]: BedroomBusBackdrop,
    [CAPTAIN_BED_DRAWERS]: CaptainBedDrawers,
    [DOGS_SKETCHBOOK]: DogsSketchbook,
    [SPACE_STATION_SKETCHBOOK]: SpaceStationSketchbook
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

const Flat = ({

    className,
    nameKey,

...other }) => {

    const FlatComponent =
        FLATS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FlatComponent {...other}
            className={cx(
                'Flat',
                className
            )}
        />
    )
}

Flat.propTypes = propTypes;

export default Flat
