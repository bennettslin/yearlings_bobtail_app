import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const ElliottSmithPoster = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'ElliottSmithPoster',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'ElliottSmithPoster'
                )}
            </text>
        </Svg>
    )
}

ElliottSmithPoster.propTypes = propTypes

export default ElliottSmithPoster
