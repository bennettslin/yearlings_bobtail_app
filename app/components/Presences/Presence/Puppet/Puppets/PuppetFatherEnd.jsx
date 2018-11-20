import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetFatherEnd = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetFatherEnd',
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
                    'PuppetFatherEnd'
                )}
            </text>
        </Svg>
    )
}

PuppetFatherEnd.propTypes = propTypes;

export default PuppetFatherEnd
