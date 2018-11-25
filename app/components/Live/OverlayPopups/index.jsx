import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../../Popups/Annotation'
import ScorePopup from '../../Popups/Score'
import TitlePopup from '../../Popups/Title'
import WikiPopup from '../../Popups/Wiki'

const propTypes = {
    annotationPopupHandlers: PropTypes.object.isRequired
}

const OverlayPopups = ({

    annotationPopupHandlers

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
        <ScorePopup />
        <WikiPopup />
    </div>
)

OverlayPopups.propTypes = propTypes

export default OverlayPopups
