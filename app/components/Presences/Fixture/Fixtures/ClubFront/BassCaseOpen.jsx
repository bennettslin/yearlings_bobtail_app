import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BassCaseOpen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BassCaseOpen',
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
                    'BassCaseOpen'
                )}
            </text>
        </Svg>
    )
}

BassCaseOpen.propTypes = propTypes;

export default BassCaseOpen
