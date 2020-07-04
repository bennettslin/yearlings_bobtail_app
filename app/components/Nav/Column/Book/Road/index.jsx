import React, { memo } from 'react'
import cx from 'classnames'
import './style'

const NavRoad = () => (
    <div
        {...{
            className: cx(
                'NavRoad',
                'abF'
            )
        }}
    />
)

export default memo(NavRoad)
