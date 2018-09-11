import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CeilingMirror = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CeilingMirror',
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
                    'CeilingMirror'
                )}
            </text>
        </Svg>
    )
}

CeilingMirror.propTypes = propTypes;

export default CeilingMirror
