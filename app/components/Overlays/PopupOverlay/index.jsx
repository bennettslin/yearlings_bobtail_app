import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import { mapIsOverlayShown } from '../../../redux/overlay/selector'
import './style'

const PopupOverlay = () => {
    const
        isOverlayShown = useSelector(mapIsOverlayShown),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: isOverlayShown,
                timeout: 200,
                classNames: {
                    enterActive: 'PopupOverlay__shown',
                    enterDone: 'PopupOverlay__shown'
                }
            }}
        >
            <div className="PopupOverlay" />
        </CSSTransition>
    )
}

export default memo(PopupOverlay)
