import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Tchotchkes = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Tchotchkes',
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
                    'Tchotchkes'
                )}
            </text>
        </Svg>
    )
}

Tchotchkes.propTypes = propTypes;

export default Tchotchkes
