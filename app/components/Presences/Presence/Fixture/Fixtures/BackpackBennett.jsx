import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BackpackBennett = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BackpackBennett',
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
                    'BackpackBennett'
                )}
            </text>
        </Svg>
    )
}

BackpackBennett.propTypes = propTypes

export default BackpackBennett
