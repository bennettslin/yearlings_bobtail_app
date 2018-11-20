import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AbbeyRoad = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'AbbeyRoad'
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
                    'AbbeyRoad'
                )}
            </text>
        </Svg>
    )
}

AbbeyRoad.propTypes = propTypes;

export default AbbeyRoad
