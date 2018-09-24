import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetKhari = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetKhari',
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
                    'PuppetKhari'
                )}
            </text>
        </Svg>
    )
}

PuppetKhari.propTypes = propTypes;

export default PuppetKhari
