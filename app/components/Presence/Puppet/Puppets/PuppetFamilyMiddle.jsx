import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetFamilyMiddle = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PuppetFamilyMiddle',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'PuppetFamilyMiddle'
                )}
            </text>
        </Svg>
    )
}

PuppetFamilyMiddle.propTypes = propTypes

export default PuppetFamilyMiddle
