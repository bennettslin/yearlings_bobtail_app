// Popup container for wiki section.
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wiki from '../../Wiki'
import Popup from '../../Popup'
import { updateWikiIndices } from '../../../redux/session/action'
import { mapIsWikiShown } from '../../../redux/wiki/selector'

const WikiPopup = () => {
    const
        dispatch = useDispatch(),
        [didMount, setDidMount] = useState(false),
        isWikiShown = useSelector(mapIsWikiShown)

    const handleCloseClick = () => {
        dispatch(updateWikiIndices())
    }

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <Popup
            mountOnEnter
            unmountOnExit
            shrinkAnimate
            displaysInOverlay
            isFullWidth
            isFullHeight
            {...{
                isVisible: isWikiShown,
                popupName: 'WikiPopup',
                handleCloseClick
            }}
        >
            <Wiki />
        </Popup>
    )
}

export default memo(WikiPopup)
