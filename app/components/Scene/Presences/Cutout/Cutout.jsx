import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NorthHollywoodNeighbourhood from './Cutouts/NorthHollywood/NorthHollywoodNeighbourhood'
import NorthHollywoodHouseLeft from './Cutouts/NorthHollywood/NorthHollywoodHouseLeft'
import NorthHollywoodHouseRight from './Cutouts/NorthHollywood/NorthHollywoodHouseRight'
import ElementarySchoolNeighbourhood from './Cutouts/NorthHollywood/ElementarySchoolNeighbourhood'
import ElementarySchoolClassroom from './Cutouts/NorthHollywood/ElementarySchoolClassroom'

import {
    NORTH_HOLLYWOOD_NEIGHBOURHOOD,
    NORTH_HOLLYWOOD_HOUSE_LEFT,
    NORTH_HOLLYWOOD_HOUSE_RIGHT,
    ELEMENTARY_SCHOOL_NEIGHBOURHOOD,
    ELEMENTARY_SCHOOL_CLASSROOM
} from 'constants/cutoutKeys'

const CUTOUTS_MAP = {
    [NORTH_HOLLYWOOD_NEIGHBOURHOOD]: NorthHollywoodNeighbourhood,
    [NORTH_HOLLYWOOD_HOUSE_LEFT]: NorthHollywoodHouseLeft,
    [NORTH_HOLLYWOOD_HOUSE_RIGHT]: NorthHollywoodHouseRight,
    [ELEMENTARY_SCHOOL_NEIGHBOURHOOD]: ElementarySchoolNeighbourhood,
    [ELEMENTARY_SCHOOL_CLASSROOM]: ElementarySchoolClassroom
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

const Cutout = ({

    className,
    nameKey,

...other }) => {

    const CutoutComponent =
        CUTOUTS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <CutoutComponent {...other}
            className={cx(
                'Cutout',
                className
            )}
        />
    )
}

Cutout.propTypes = propTypes;

export default Cutout
