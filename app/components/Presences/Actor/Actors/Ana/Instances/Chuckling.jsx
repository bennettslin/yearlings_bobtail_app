import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Chuckling = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Chuckling'
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
                    'Chuckling'
                )}
            </text>
        </Svg>
    )
}

Chuckling.propTypes = propTypes

export default Chuckling
