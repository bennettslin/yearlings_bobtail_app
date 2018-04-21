// Section for score and tips toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button2 from '../Button/Button2'

// TODO: Inherit from this class.
import ButtonIcon from '../Button/ButtonIcon'

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

        showScoreToggleButton = !getIsPhone(deviceIndex),
        isScoreDisabled = !isScoreLoaded

    return shouldRender && (
        <div className={cx(
            'ScoresTips',
            { 'ScoresTips__inMenu': inMenu,
              'ScoresTips__inMain': inMainRightSide || inLeftShelf,
              'ScoresTips__inMainRight': inMainRightSide,
              'ScoresTips__inLeftShelf': inLeftShelf }
        )}>
            {showScoreToggleButton &&
                <Button2
                    isLargeSize
                    buttonName="scores"
                    accessKey={SCORE_TOGGLE_KEY}
                    isDisabled={isScoreDisabled}
                    handleButtonClick={handleScoreToggle}
                >
                    <ButtonIcon
                        showDisabled={isScoreDisabled}
                        temporaryName="scores"
                        temporaryText={selectedScoreIndex}
                    />
                </Button2>
            }
            <Button2
                isLargeSize
                buttonName="tips"
                accessKey={TIPS_TOGGLE_KEY}
                handleButtonClick={handleTipsToggle}
            >
                <ButtonIcon
                    temporaryName="tips"
                    temporaryText={TIPS_OPTIONS[selectedTipsIndex]}
                />
            </Button2>
        </div>
    )
}

ScoresTips.defaultProps = scoresTipsDefaultProps
ScoresTips.propTypes = scoresTipsPropTypes

export default connect(mapStateToProps)(ScoresTips)
