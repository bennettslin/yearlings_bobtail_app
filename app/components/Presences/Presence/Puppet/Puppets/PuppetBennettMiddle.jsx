import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetBennettMiddle = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetBennettMiddle',
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
                    'PuppetBennettMiddle'
                )}
            </text>
        </Svg>
    )
}

PuppetBennettMiddle.propTypes = propTypes

export default PuppetBennettMiddle
