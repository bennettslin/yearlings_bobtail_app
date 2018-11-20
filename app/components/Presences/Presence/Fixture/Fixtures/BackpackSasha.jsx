import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BackpackSasha = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BackpackSasha',
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
                    'BackpackSasha'
                )}
            </text>
        </Svg>
    )
}

BackpackSasha.propTypes = propTypes

export default BackpackSasha
