import React from 'react'
import Popup from '../popup/popup'
import AnnotationSection from './annotation-section'

const defaultProps = {
    annotation: null
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation'
    }

    getContentElement() {
        return this.props.annotation && !this.props.selectedScoreIndex && !this.props.selectedWikiIndex && (
            <AnnotationSection {...this.props} />
        )
    }
}

AnnotationPopup.defaultProps = defaultProps
export default AnnotationPopup
