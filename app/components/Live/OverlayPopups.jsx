import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../Popups/AnnotationPopup'
import ScorePopup from '../Popups/ScorePopup'
import TitlePopup from '../Popups/TitlePopup'
import WikiPopup from '../Popups/WikiPopup'

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
        'topHeight__mainColumn__desktop',
        'topHeight__mainColumn__mobile',
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
