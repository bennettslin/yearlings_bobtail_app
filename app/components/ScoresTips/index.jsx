// Section for score and tips toggle buttons.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreDispatcher from '../../handlers/ScoreHandler/Dispatcher'
import TipsToggle from '../Tips/Toggle'
import Button from '../Button'

import { populateDispatch } from 'helpers/dispatch'

import { SCORE_TOGGLE_KEY } from 'constants/access'
import { SCORES_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    deviceStore: {
        isDesktop,
        isPhone
    },
    responsiveStore: { isScoresTipsInMain },
    toggleStore: { isScoreShown },
    loadStore: { isScoreLoaded }
}) => ({
    isDesktop,
    isPhone,
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
        isDesktop: PropTypes.bool.isRequired,
        isPhone: PropTypes.bool.isRequired,
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

    _setDispatch = (payload) => {
        populateDispatch(this, payload)
    }

    render() {
        const {
                isDesktop,
                isPhone,
                isScoreLoaded,
                isScoresTipsInMain,

                inMenu,
                inMainRightSide,
                inLeftShelf
            } = this.props,

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

            showScoreToggleButton = !isPhone

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
                <ScoreDispatcher {...{ setDispatch: this._setDispatch }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
