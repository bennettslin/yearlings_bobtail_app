import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../Popups/AnnotationPopup'
import ScorePopup from '../Popups/ScorePopup'
import TitlePopup from '../Popups/TitlePopup'
import WikiPopup from '../Popups/WikiPopup'

const popupOverlaidPropTypes = {
    audioHandlers: PropTypes.object.isRequired,
    annotationPopupHandlers: PropTypes.object.isRequired,
    titlePopupHandlers: PropTypes.object.isRequired,
    scorePopupHandlers: PropTypes.object.isRequired,
    wikiPopupHandlers: PropTypes.object.isRequired
}

const PopupOverlaid = ({

    // audioHandlers,
    annotationPopupHandlers,
    titlePopupHandlers,
    scorePopupHandlers,
    wikiPopupHandlers

}) => (
    <div className={cx(
        'PopupOverlaid',
        'absoluteFullContainer'
    )}>
        <AnnotationPopup {...annotationPopupHandlers} />
        <TitlePopup {...titlePopupHandlers} />
        <ScorePopup {...scorePopupHandlers} />
        <WikiPopup {...wikiPopupHandlers} />
    </div>
)

PopupOverlaid.propTypes = popupOverlaidPropTypes

export default PopupOverlaid
