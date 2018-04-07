import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AudioPopup from '../Popups/AudioPopup'
import AnnotationPopup from '../Popups/AnnotationPopup'
import ScorePopup from '../Popups/ScorePopup'
import TitlePopup from '../Popups/TitlePopup'
import WikiPopup from '../Popups/WikiPopup'

const popupOverlaidPropTypes = {
    audioSectionHandlers: PropTypes.object.isRequired,
    annotationPopupHandlers: PropTypes.object.isRequired,
    titlePopupHandlers: PropTypes.object.isRequired,
    scorePopupHandlers: PropTypes.object.isRequired,
    wikiPopupHandlers: PropTypes.object.isRequired
}

const PopupOverlaid = ({

    audioSectionHandlers,
    annotationPopupHandlers,
    titlePopupHandlers,
    scorePopupHandlers,
    wikiPopupHandlers

}) => (
    <div className={cx(
        'popupOverlaid__container',
        'absoluteFullContainer'
    )}>
        <div className={cx(
            'AudioPopup-block',
            'popupOverlaid__child'
        )}>
            <AudioPopup {...audioSectionHandlers} />
        </div>
        <div className={cx(
            'main-popup-block',
            'popupOverlaid__child'
        )}>
            <AnnotationPopup {...annotationPopupHandlers}
                isOverlayAnnotation
            />
            <TitlePopup {...titlePopupHandlers} />
            <ScorePopup {...scorePopupHandlers} />
            <WikiPopup {...wikiPopupHandlers} />
        </div>
    </div>
)

PopupOverlaid.propTypes = popupOverlaidPropTypes

export default PopupOverlaid
