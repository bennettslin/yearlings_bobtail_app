import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BassCaseUpright = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BassCaseUpright',
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
                    'BassCaseUpright'
                )}
            </text>
        </Svg>
    )
}

BassCaseUpright.propTypes = propTypes

export default BassCaseUpright
