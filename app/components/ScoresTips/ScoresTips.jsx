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

const scoresTipsDefaultProps = {
    inMenu: false,
    inMainRightSide: false,
    inLeftShelf: false
},

scoresTipsPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isScoreLoaded: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    inMenu: PropTypes.bool.isRequired,
    inMainRightSide: PropTypes.bool.isRequired,
    inLeftShelf: PropTypes.bool.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
},

ScoresTips = ({

    deviceIndex,
    isScoreLoaded,
    isScoresTipsInMain,
    selectedScoreIndex,
    selectedTipsIndex,

    inMenu,
    inMainRightSide,
    inLeftShelf,

    handleScoreToggle,
    handleTipsToggle

}) => {
    const isDesktop = getIsDesktop(deviceIndex),

        // Render if...
        shouldRender = isScoresTipsInMain ?

            // ...in main on the right in mobile.
            (inMainRightSide && !isDesktop) ||

            // ...in main on the left in dots overview on desktop.
            (inLeftShelf && isDesktop) :

            // ...in menu.
            inMenu,

        showScoreToggleButton = !getIsPhone(deviceIndex)

    return shouldRender && (
        <div className={cx(
            'ScoresTips',
            { 'ScoresTips__inMenu': inMenu,
              'ScoresTips__inMain': inMainRightSide || inLeftShelf,
              'ScoresTips__inMainRight': inMainRightSide,
              'ScoresTips__inLeftShelf': inLeftShelf }
        )}>
            {showScoreToggleButton &&
                <Button
                    isLarge
                    accessKeysShown
                    buttonName="scores"
                    accessKey={SCORE_TOGGLE_KEY}
                    iconText={selectedScoreIndex}
                    isEnabled={isScoreLoaded}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                isLarge
                accessKeysShown
                buttonName="tips"
                accessKey={TIPS_TOGGLE_KEY}
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

ScoresTips.defaultProps = scoresTipsDefaultProps
ScoresTips.propTypes = scoresTipsPropTypes

export default connect(mapStateToProps)(ScoresTips)
