import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UcBerkeleyBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'UcBerkeleyBackdrop',
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
                    'UcBerkeleyBackdrop'
                )}
            </text>
        </Svg>
    )
}

UcBerkeleyBackdrop.propTypes = propTypes;

export default UcBerkeleyBackdrop
