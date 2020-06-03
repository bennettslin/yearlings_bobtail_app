// Popup container for wiki section.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wiki from '../../Wiki'
import Popup from '../../Popup'
import { resetWiki } from '../../../redux/session/action'
import { mapSelectedWikiIndex } from '../../../redux/session/selectors'

const WikiPopup = () => {
    const
        dispatch = useDispatch(),
        selectedWikiIndex = useSelector(mapSelectedWikiIndex)

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
                isVisible: Boolean(selectedWikiIndex),
                popupName: 'WikiPopup',
                handleCloseClick
            }}
        >
            <Wiki />
        </Popup>
    )
}

export default WikiPopup
