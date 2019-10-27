import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../modules/Svg'

const propTypes = {
// From parent.
    // bookIndex: PropTypes.number.isRequired
}

const NavRoad = () => {
    return (
        <Svg
            {...{
                className: cx(
                    'NavRoad',
                    'abF'
                )
            }}
        >
            <rect
                className={cx(
                    'NavRoad__rect'
                )}
                {...{
                    x: 0,
                    y: 85,
                    width: 100,
                    height: 15
                }}
            />
        </Svg>
    )
}

NavRoad.propTypes = propTypes

export default memo(NavRoad)
