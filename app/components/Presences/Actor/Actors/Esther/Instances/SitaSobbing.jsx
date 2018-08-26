import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SitaSobbing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SitaSobbing'
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
                    'SitaSobbing'
                )}
            </text>
        </Svg>
    )
}

SitaSobbing.propTypes = propTypes;

export default SitaSobbing
