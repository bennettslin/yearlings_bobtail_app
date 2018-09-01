import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SelflessConcern = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SelflessConcern'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'SelflessConcern'
                )}
            </text>
        </Svg>
    )
}

SelflessConcern.propTypes = propTypes;

export default SelflessConcern
