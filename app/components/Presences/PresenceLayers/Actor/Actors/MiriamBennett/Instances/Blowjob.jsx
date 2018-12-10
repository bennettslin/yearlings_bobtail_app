import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Blowjob = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Blowjob'
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
                    'Blowjob'
                )}
            </text>
        </Svg>
    )
}

Blowjob.propTypes = propTypes

export default Blowjob
