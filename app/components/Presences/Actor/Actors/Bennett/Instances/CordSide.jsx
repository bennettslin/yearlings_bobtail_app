import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CordSide = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CordSide'
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
                    'CordSide'
                )}
            </text>
        </Svg>
    )
}

CordSide.propTypes = propTypes;

export default CordSide
