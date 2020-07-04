// This prevents popup interaction when slider is touched.
import React, { memo } from 'react'
import './style'

const TouchOverlay = () => (
    <div className="TouchOverlay" />
)

export default memo(TouchOverlay)
