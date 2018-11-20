import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CampusAshamed = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CampusAshamed'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'CampusAshamed'
                )}
            </text>
        </Svg>
    )
}

CampusAshamed.propTypes = propTypes;

export default CampusAshamed
