import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetBennettEnd = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetBennettEnd',
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
                    'PuppetBennettEnd'
                )}
            </text>
        </Svg>
    )
}

PuppetBennettEnd.propTypes = propTypes;

export default PuppetBennettEnd
