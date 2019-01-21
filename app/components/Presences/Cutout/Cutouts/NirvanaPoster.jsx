import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const NirvanaPoster = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'NirvanaPoster',
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
                    'NirvanaPoster'
                )}
            </text>
        </Svg>
    )
}

NirvanaPoster.propTypes = propTypes

export default NirvanaPoster
