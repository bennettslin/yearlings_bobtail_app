import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
// From parent.
    // bookIndex: PropTypes.number.isRequired
}

const NavRoad = () => {
    return (
        <div
            {...{
                className: cx(
                    'NavRoad',
                    'abF'
                )
            }}
        />
    )
}

NavRoad.propTypes = propTypes

export default memo(NavRoad)
