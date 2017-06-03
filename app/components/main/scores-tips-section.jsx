// Section for score and tips toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'
import { getIsPhone } from '../../helpers/responsive-helper'

const ScoresTipsSection = ({

    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex,
    handleScoreToggle,
    handleTipsToggle

}) => {
    const showScoreToggleButton = !getIsPhone(deviceIndex)

    return (
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

ScoresTipsSection.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    handleScoreToggle: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex
}) => ({
    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex
}))(ScoresTipsSection)
