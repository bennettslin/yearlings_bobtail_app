import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetFamilyBegin = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetFamilyBegin',
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
                    'PuppetFamilyBegin'
                )}
            </text>
        </Svg>
    )
}

PuppetFamilyBegin.propTypes = propTypes;

export default PuppetFamilyBegin
