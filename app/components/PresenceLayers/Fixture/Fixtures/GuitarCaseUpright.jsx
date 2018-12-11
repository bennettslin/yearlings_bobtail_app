import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GuitarCaseUpright = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'GuitarCaseUpright',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'GuitarCaseUpright'
                )}
            </text>
        </Svg>
    )
}

GuitarCaseUpright.propTypes = propTypes

export default GuitarCaseUpright
