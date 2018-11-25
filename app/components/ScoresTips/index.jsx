// Section for score and tips toggle buttons.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreDispatcher from '../../dispatchers/ScoreDispatcher'
import TipsToggle from '../Tips/Toggle'
import Button from '../Button'

import { SCORE_TOGGLE_KEY } from 'constants/access'
import { SCORES_BUTTON_KEY } from 'constants/buttons'

import {
    getIsDesktop,
    getIsPhone
} from 'helpers/responsiveHelper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: { isScoresTipsInMain },
    toggleStore: { isScoreShown },
    loadStore: { isScoreLoaded }
}) => ({
    deviceIndex,
    isScoresTipsInMain,
    isScoreShown,
    isScoreLoaded
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

        // From parent.
        inMenu: PropTypes.bool.isRequired,
        inMainRightSide: PropTypes.bool.isRequired,
        inLeftShelf: PropTypes.bool.isRequired
    }

    handleScoreButtonClick = () => {
        this.dispatchScore()
    }

    render() {
        const {
                deviceIndex,
                isScoreLoaded,
                isScoresTipsInMain,

                inMenu,
                inMainRightSide,
                inLeftShelf
            } = this.props,

            isDesktop = getIsDesktop(deviceIndex),

            // Render if scores tips is...
            shouldRender = isScoresTipsInMain ?

                (
                    // ...in main on the right in mobile.
                    (inMainRightSide && !isDesktop) ||

                    // ...in main on the left in dots overview on desktop.
                    (inLeftShelf && isDesktop)
                ) :

            // ...otherwise, render in menu.
                inMenu,

            showScoreToggleButton = !getIsPhone(deviceIndex)

        return shouldRender && (
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
                    {...{
                        buttonName: SCORES_BUTTON_KEY,
                        className: 'ScoresTipsButton',
                        accessKey: SCORE_TOGGLE_KEY,
                        isDisabled: !isScoreLoaded,
                        handleButtonClick: this.handleScoreButtonClick
                    }}
                />
                }
                <TipsToggle {...{ className: 'ScoresTipsButton' }} />
                <ScoreDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
