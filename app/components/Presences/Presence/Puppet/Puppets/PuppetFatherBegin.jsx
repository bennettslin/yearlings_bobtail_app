import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetFatherBegin = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetFatherBegin',
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
                    'PuppetFatherBegin'
                )}
            </text>
        </Svg>
    )
}

PuppetFatherBegin.propTypes = propTypes

export default PuppetFatherBegin
