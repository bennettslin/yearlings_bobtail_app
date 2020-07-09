// This prevents popup interaction when slider is touched.
import React, { memo, useEffect, useState } from 'react'
import './style'

const TouchOverlay = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <div className="TouchOverlay" />
    )
}

export default memo(TouchOverlay)
