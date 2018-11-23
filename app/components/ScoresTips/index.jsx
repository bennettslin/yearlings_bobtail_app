// Section for score and tips toggle buttons.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreDispatcher from '../../dispatchers/ScoreDispatcher'
import Button from '../Button'

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
    toggleStore: { isScoreShown },
    loadStore: { isScoreLoaded },
    sessionStore: { selectedTipsIndex }
}) => ({
    deviceIndex,
    isScoresTipsInMain,
    isScoreShown,
    isScoreLoaded,
    selectedTipsIndex
})

class ScoresTips extends Component {

    static defaultProps = {
        inMenu: false,
        inMainRightSide: false,
        inLeftShelf: false
    }

    static propTypes = {
    // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isScoreLoaded: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,

        // From parent.
        inMenu: PropTypes.bool.isRequired,
        inMainRightSide: PropTypes.bool.isRequired,
        inLeftShelf: PropTypes.bool.isRequired,
        handleTipsToggle: PropTypes.func.isRequired
    }

    handleScoreButtonClick = () => {
        this.dispatchScore()
    }

    setScoreDispatch = (dispatch) => {
        this.dispatchScore = dispatch
    }

    render() {
        const {
                deviceIndex,
                isScoreLoaded,
                isScoresTipsInMain,
                selectedTipsIndex,

                inMenu,
                inMainRightSide,
                inLeftShelf,

                handleTipsToggle
            } = this.props,

            isDesktop = getIsDesktop(deviceIndex),

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
            <___>
                <div className={cx(
                    'ScoresTips',
                    {
                        'ScoresTips__inMenu': inMenu,
                        'ScoresTips__inMain': inMainRightSide || inLeftShelf,
                        'ScoresTips__inMainRight': inMainRightSide,
                        'ScoresTips__inLeftShelf': inLeftShelf,
                        'LeftShelf__child': inLeftShelf
                    }
                )}>
                    {showScoreToggleButton &&
                    <Button
                        isLargeSize
                        buttonName={SCORES_BUTTON_KEY}
                        className="ScoresTipsButton"
                        accessKey={SCORE_TOGGLE_KEY}
                        isDisabled={!isScoreLoaded}
                        handleButtonClick={this.handleScoreButtonClick}
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
                <ScoreDispatcher
                    {...{ getDispatch: this.setScoreDispatch }}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
