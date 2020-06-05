// Popup container for wiki section.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wiki from '../../Wiki'
import Popup from '../../Popup'
import { resetWiki } from '../../../redux/session/action'
import { mapIsWikiShown } from '../../../redux/session/selectors'

const WikiPopup = () => {
    const
        dispatch = useDispatch(),
        isWikiShown = useSelector(mapIsWikiShown)

    const handleCloseClick = () => {
        dispatch(resetWiki())
    }

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
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

export default WikiPopup
