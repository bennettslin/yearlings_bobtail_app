import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { FLATS_NOHO_HOUSES } from './Flats/NohoHouses/nohoHouses'
import { FLATS_NOHO_SCHOOL } from './Flats/NohoSchool/nohoSchool'

const FLATS_MAP = {
    ...FLATS_NOHO_HOUSES,
    ...FLATS_NOHO_SCHOOL
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
