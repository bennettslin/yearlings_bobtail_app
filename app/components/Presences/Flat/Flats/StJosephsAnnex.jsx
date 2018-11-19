import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StJosephsAnnex = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StJosephsAnnex',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'StJosephsAnnex'
                )}
            </text>
        </Svg>
    )
}

StJosephsAnnex.propTypes = propTypes;

export default StJosephsAnnex
