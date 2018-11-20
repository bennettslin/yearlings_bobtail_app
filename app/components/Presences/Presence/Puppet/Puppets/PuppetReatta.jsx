import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetReatta = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PuppetReatta',
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
                    'PuppetReatta'
                )}
            </text>
        </Svg>
    )
}

PuppetReatta.propTypes = propTypes

export default PuppetReatta
