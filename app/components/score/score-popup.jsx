import React from 'react'
import Popup from '../superclasses/popup'
import ScoreSection from './score-section'

const defaultProps = {
    selectedScoreIndex: null
}

class ScorePopup extends Popup {

    getClassName() {
        return 'score'
    }

    getContentElement() {
        const { isPhone,
                selectedScoreIndex } = this.props

        return false && !isPhone && selectedScoreIndex &&
            <ScoreSection {...this.props} />
    }
}

ScorePopup.defaultProps = defaultProps
export default ScorePopup
