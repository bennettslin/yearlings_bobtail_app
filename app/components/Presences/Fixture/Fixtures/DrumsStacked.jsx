import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DrumsStacked = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'DrumsStacked',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'DrumsStacked'
                )}
            </text>
        </Svg>
    )
}

DrumsStacked.propTypes = propTypes

export default DrumsStacked
