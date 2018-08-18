// Section for score and tips toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from 'components/Button/Button'

import {
    SCORE_TOGGLE_KEY,
    TIPS_TOGGLE_KEY
} from 'constants/access'

import {
    SCORES_BUTTON_KEY,
    TIPS_BUTTON_KEY
} from 'constants/buttons'

import {
    getIsDesktop,
    getIsPhone
} from 'helpers/responsiveHelper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: { isScoresTipsInMain },
    isScoreLoaded,
    selectedTipsIndex
}) => ({
    deviceIndex,
    isScoresTipsInMain,
    isScoreLoaded,
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
              'ScoresTips__inLeftShelf': inLeftShelf,
              'LeftShelf__child': inLeftShelf }
        )}>
            {showScoreToggleButton &&
                <Button
                    isLargeSize
                    buttonName={SCORES_BUTTON_KEY}
                    className="ScoresTipsButton"
                    accessKey={SCORE_TOGGLE_KEY}
                    isDisabled={!isScoreLoaded}
                    handleButtonClick={handleScoreToggle}
                />
            }
            {/* TODO: Shouldn't this use the tips toggle button? */}
            <Button
                isLargeSize
                buttonName={TIPS_BUTTON_KEY}
                className="ScoresTipsButton"
                buttonIdentifier={selectedTipsIndex}
                accessKey={TIPS_TOGGLE_KEY}
                handleButtonClick={handleTipsToggle}
           />
        </div>
    )
}

ScoresTips.defaultProps = scoresTipsDefaultProps
ScoresTips.propTypes = scoresTipsPropTypes

export default connect(mapStateToProps)(ScoresTips)
