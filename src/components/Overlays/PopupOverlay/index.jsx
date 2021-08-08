import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import { mapIsOverlayShown } from '../../../redux/overlay/selector'
import './style'

const PopupOverlay = ({ didMount }) => {
    const isOverlayShown = useSelector(mapIsOverlayShown)

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
                    enterDone: 'PopupOverlay__shown',
                },
            }}
        >
            <div className="PopupOverlay" />
        </CSSTransition>
    )
}

PopupOverlay.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(PopupOverlay))
