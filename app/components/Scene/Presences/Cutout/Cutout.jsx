import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { CUTOUTS_NOHO_HOUSES } from './Cutouts/NohoHouses/nohoHouses'
import { CUTOUTS_NOHO_SCHOOL } from './Cutouts/NohoSchool/nohoSchool'

const CUTOUTS_MAP = {
    ...CUTOUTS_NOHO_HOUSES,
    ...CUTOUTS_NOHO_SCHOOL
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
