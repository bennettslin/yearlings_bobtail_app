import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PublicBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PublicBackdrop',
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
                    'PublicBackdrop'
                )}
            </text>
        </Svg>
    )
}

PublicBackdrop.propTypes = propTypes;

export default PublicBackdrop
