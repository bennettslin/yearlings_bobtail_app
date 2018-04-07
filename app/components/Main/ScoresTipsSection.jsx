// Section for score and tips toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
import { SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'
import { getIsDesktop, getIsPhone } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex,
    isScoreLoaded,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex
}) => ({
    deviceIndex,
    isScoreLoaded,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex
})

const scoresTipsSectionDefaultProps = {
    inMenu: false,
    inSubfield: false,
    inToggleSection: false
},

scoresTipsSectionPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isScoreLoaded: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    inMenu: PropTypes.bool.isRequired,
    inSubfield: PropTypes.bool.isRequired,
    inToggleSection: PropTypes.bool.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
},

ScoresTipsSection = ({

    deviceIndex,
    isScoreLoaded,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex,

    inMenu,
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
            inMenu,

        showScoreToggleButton = !getIsPhone(deviceIndex)

    return shouldRender && (
        <div className={cx(
            'ScoresTipsSection',
            'accessKeysShown'
        )}>
            {showScoreToggleButton &&
                <Button
                    isLarge
                    accessKey={SCORE_TOGGLE_KEY}
                    buttonName="scores"
                    iconText={selectedScoreIndex}
                    isEnabled={isScoreLoaded}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                isLarge
                accessKey={TIPS_TOGGLE_KEY}
                buttonName="tips"
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

ScoresTipsSection.defaultProps = scoresTipsSectionDefaultProps
ScoresTipsSection.propTypes = scoresTipsSectionPropTypes

export default connect(mapStateToProps)(ScoresTipsSection)
