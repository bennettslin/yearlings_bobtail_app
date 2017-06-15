// Section for score and tips toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'
import { getIsDesktop, getIsPhone } from '../../helpers/responsive-helper'

const ScoresTipsSection = ({

    deviceIndex,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex,

    inSubfield,
    inToggleSection,

    handleScoreToggle,
    handleTipsToggle

}) => {
    const isDesktop = getIsDesktop(deviceIndex),

        // Render if...
        shouldRender = isScoresTipsInMain ?

            // ...in subfield on mobile.
            (inSubfield && !isDesktop) ||

            // ...in toggle section on desktop.
            (inToggleSection && isDesktop) :

            // ...in menu.
            (!inSubfield && !inToggleSection),

        showScoreToggleButton = !getIsPhone(deviceIndex)

    return shouldRender && (
        <div className="section scores-tips-section">
            {showScoreToggleButton &&
                <Button
                    accessKey={SCORE_TOGGLE_KEY}
                    buttonName="scores"
                    iconText={selectedScoreIndex}
                    isLarge={true}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                accessKey={TIPS_TOGGLE_KEY}
                buttonName="tips"
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                isLarge={true}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

ScoresTipsSection.defaultProps = {
    inSubfield: false,
    inToggleSection: false
}

ScoresTipsSection.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    inSubfield: PropTypes.bool.isRequired,
    inToggleSection: PropTypes.bool.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex
}) => ({
    deviceIndex,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex
}))(ScoresTipsSection)
