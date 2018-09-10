import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetAnitaBegin = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetAnitaBegin',
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
                    'PuppetAnitaBegin'
                )}
            </text>
        </Svg>
    )
}

PuppetAnitaBegin.propTypes = propTypes;

export default PuppetAnitaBegin
