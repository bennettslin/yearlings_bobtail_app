import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Reading = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Reading'
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
                    'Reading'
                )}
            </text>
        </Svg>
    )
}

Reading.propTypes = propTypes;

export default Reading
