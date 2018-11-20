import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PettingSeated = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'PettingSeated'
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
                    'PettingSeated'
                )}
            </text>
        </Svg>
    )
}

PettingSeated.propTypes = propTypes

export default PettingSeated
