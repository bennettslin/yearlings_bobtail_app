import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NorthHollywoodNeighbourhood from './Cutouts/NorthHollywoodNeighbourhood'
import NorthHollywoodHouseLeft from './Cutouts/NorthHollywoodHouseLeft'
import NorthHollywoodHouseRight from './Cutouts/NorthHollywoodHouseRight'

import {
    NORTH_HOLLYWOOD_NEIGHBOURHOOD,
    NORTH_HOLLYWOOD_HOUSE_LEFT,
    NORTH_HOLLYWOOD_HOUSE_RIGHT
} from 'constants/cutoutKeys'

const CUTOUTS_MAP = {
    [NORTH_HOLLYWOOD_NEIGHBOURHOOD]: NorthHollywoodNeighbourhood,
    [NORTH_HOLLYWOOD_HOUSE_LEFT]: NorthHollywoodHouseLeft,
    [NORTH_HOLLYWOOD_HOUSE_RIGHT]: NorthHollywoodHouseRight
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Cutout = ({

    nameKey,

...other }) => {

    const CutoutComponent =
        CUTOUTS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <CutoutComponent {...other}
            className={cx(
                // 'Cutout'
            )}
        />
    )
}

Cutout.propTypes = propTypes;

export default Cutout
