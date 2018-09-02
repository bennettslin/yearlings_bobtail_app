import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NohoHousesBackdrop from './Flats/NohoHouses/NohoHousesBackdrop'
import NohoHouseLeft from './Flats/NohoHouses/NohoHouseLeft'
import NohoHouseRight from './Flats/NohoHouses/NohoHouseRight'
import NohoSchoolBackdrop from './Flats/NohoSchool/NohoSchoolBackdrop'
import NohoSchoolhouse from './Flats/NohoSchool/NohoSchoolhouse'
import NurseOfficeBubble from './Flats/NohoSchool/NurseOfficeBubble'

import {
    NOHO_HOUSES_BACKDROP,
    NOHO_HOUSE_LEFT,
    NOHO_HOUSE_RIGHT,
    NOHO_SCHOOL_BACKDROP,
    NOHO_SCHOOLHOUSE,
    NURSE_OFFICE_BUBBLE
} from 'scene/flatKeys'

const FLATS_MAP = {
    [NOHO_HOUSES_BACKDROP]: NohoHousesBackdrop,
    [NOHO_HOUSE_LEFT]: NohoHouseLeft,
    [NOHO_HOUSE_RIGHT]: NohoHouseRight,
    [NOHO_SCHOOL_BACKDROP]: NohoSchoolBackdrop,
    [NOHO_SCHOOLHOUSE]: NohoSchoolhouse,
    [NURSE_OFFICE_BUBBLE]: NurseOfficeBubble
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
