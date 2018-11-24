import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../../Popups/Annotation'
import ScorePopup from '../../Popups/Score'
import TitlePopup from '../../Popups/Title'
import WikiPopup from '../../Popups/Wiki'

const propTypes = {
    annotationPopupHandlers: PropTypes.object.isRequired,
    scorePopupHandlers: PropTypes.object.isRequired,
    wikiPopupHandlers: PropTypes.object.isRequired
}

const OverlayPopups = ({

    annotationPopupHandlers,
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
        <TitlePopup />
        <ScorePopup {...scorePopupHandlers} />
        <WikiPopup {...wikiPopupHandlers} />
    </div>
)

OverlayPopups.propTypes = propTypes

export default OverlayPopups
