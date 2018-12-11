import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GuitarCaseOpen = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'GuitarCaseOpen',
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
                    'GuitarCaseOpen'
                )}
            </text>
        </Svg>
    )
}

GuitarCaseOpen.propTypes = propTypes

export default GuitarCaseOpen
