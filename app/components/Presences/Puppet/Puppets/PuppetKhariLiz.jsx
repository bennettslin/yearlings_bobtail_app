import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetKhariLiz = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetKhariLiz',
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
                    'PuppetKhariLiz'
                )}
            </text>
        </Svg>
    )
}

PuppetKhariLiz.propTypes = propTypes;

export default PuppetKhariLiz
