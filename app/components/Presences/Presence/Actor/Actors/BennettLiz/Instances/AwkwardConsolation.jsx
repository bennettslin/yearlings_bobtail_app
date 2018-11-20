import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AwkwardConsolation = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'AwkwardConsolation'
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
                    'AwkwardConsolation'
                )}
            </text>
        </Svg>
    )
}

AwkwardConsolation.propTypes = propTypes

export default AwkwardConsolation
