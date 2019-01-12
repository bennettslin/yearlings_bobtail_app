// Section for score and tips toggle buttons.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreDispatcher from '../../handlers/Score/Dispatcher'
import TipsToggle from '../Tips/Toggle'
import Button from '../Button'

import { populateRefs } from 'helpers/ref'

import { SCORE_TOGGLE_KEY } from 'constants/access'
import { SCORES_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    viewportStore: {
        isDesktopWidth,
        isPhoneWidth
    },
    responsiveStore: { isScoresTipsInMain },
    toggleStore: { isScoreShown },
    loadStore: { isScoreLoaded }
}) => ({
    isDesktopWidth,
    isPhoneWidth,
    isScoresTipsInMain,
    isScoreShown,
    isScoreLoaded
})

class ScoresTips extends PureComponent {

    static defaultProps = {
        inMenu: false,
        inMainRightSide: false,
        inLeftShelf: false
    }

    static propTypes = {
    // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isDesktopWidth,
                isPhoneWidth,
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
                    (inMainRightSide && !isDesktopWidth) ||

                    // ...in main on the left in dots overview on desktop.
                    (inLeftShelf && isDesktopWidth)
                ) :

            // ...otherwise, render in menu.
                inMenu,

            showScoreToggleButton = !isPhoneWidth

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
                <ScoreDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
