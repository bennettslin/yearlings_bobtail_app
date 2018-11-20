import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PuppetMotherBegin = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PuppetMotherBegin',
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
                    'PuppetMotherBegin'
                )}
            </text>
        </Svg>
    )
}

PuppetMotherBegin.propTypes = propTypes;

export default PuppetMotherBegin
