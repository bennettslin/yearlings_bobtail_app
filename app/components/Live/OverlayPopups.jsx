import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../Popups/Annotation'
import ScorePopup from '../Popups/Score'
import TitlePopup from '../Popups/Title'
import WikiPopup from '../Popups/Wiki'

const popupOverlaidPropTypes = {
    annotationPopupHandlers: PropTypes.object.isRequired,
    titlePopupHandlers: PropTypes.object.isRequired,
    scorePopupHandlers: PropTypes.object.isRequired,
    wikiPopupHandlers: PropTypes.object.isRequired
}

const OverlayPopups = ({

    annotationPopupHandlers,
    titlePopupHandlers,
    scorePopupHandlers,
    wikiPopupHandlers

}) => (
    <div className={cx(
        'OverlayPopups',
        'topHeight__overlayPopups',
        'topHeight__overlayPopups__desktop',
        'topHeight__overlayPopups__mobile',
        'absoluteFullContainer'
    )}>
        <AnnotationPopup {...annotationPopupHandlers} />
        <TitlePopup {...titlePopupHandlers} />
        <ScorePopup {...scorePopupHandlers} />
        <WikiPopup {...wikiPopupHandlers} />
    </div>
)

OverlayPopups.propTypes = popupOverlaidPropTypes

export default OverlayPopups
