import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SeaSerpents = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SeaSerpents',
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
                    'SeaSerpents'
                )}
            </text>
        </Svg>
    )
}

SeaSerpents.propTypes = propTypes;

export default SeaSerpents
