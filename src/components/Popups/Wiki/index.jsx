// Popup container for wiki section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Wiki from '../../Wiki'
import Popup from '../../Popup'
import { updateWikiIndices } from '../../../redux/selected/action'
import { mapIsWikiShown } from '../../../redux/wiki/selector'

const WikiPopup = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        isWikiShown = useSelector(mapIsWikiShown)

    const handleCloseClick = () => {
        dispatch(updateWikiIndices())
    }

    return didMount && (
        <Popup
            mountOnEnter
            unmountOnExit
            isFullPopup
            shrinkAnimate
            displaysInOverlay
            noOverflowHidden
            {...{
                isVisible: isWikiShown,
                popupName: 'WikiPopup',
                handleCloseClick,
            }}
        >
            <Wiki />
        </Popup>
    )
}

WikiPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(WikiPopup))
