import React from 'react'
import cx from 'classnames'

import AnnotationPopup from '../../Popups/Annotation'
import ScorePopup from '../../Popups/Score'
import TitlePopup from '../../Popups/Title'
import WikiPopup from '../../Popups/Wiki'

const OverlayPopups = () => (
    <div className={cx(
        'OverlayPopups',
        'topHeight__overlayPopups',
        'topHeight__overlayPopups__desktop',
        'topHeight__overlayPopups__mobile',
        'absoluteFullContainer'
    )}>
        <AnnotationPopup />
        <TitlePopup />
        <ScorePopup />
        <WikiPopup />
    </div>
)

export default OverlayPopups
