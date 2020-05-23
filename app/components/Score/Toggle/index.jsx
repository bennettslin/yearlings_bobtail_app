// Toggle button to show, hide, and disable tips section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'

import { SCORE_TOGGLE_KEY } from '../../../constants/access'
import { SCORES_BUTTON_KEY } from '../../../constants/buttons'
import { SCORE } from '../../../constants/tips'

const mapStateToProps = ({
    loadStore: { isScoreLoaded },
    mountStore: { canScoreMount },
    viewportStore: { isDesktopWidth }
}) => ({
    isScoreLoaded,
    canScoreMount,
    isDesktopWidth
})

class ScoreToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,
        isScoreLoaded: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,

        // From parent.
        className: PropTypes.string
    }

    componentDidMount() {
        this.scoreDispatcher = React.createRef()
    }

    _handleScoreButtonClick = () => {
        this.scoreDispatcher.current.dispatchScore()
    }

    render() {
        const {
            isScoreLoaded,
            isDesktopWidth,
            canScoreMount,
            className
        } = this.props

        return canScoreMount && (
            <div
                {...{
                    className: cx(
                        'ScoreToggle',
                        className
                    )
                }}
            >
                <Button
                    isLargeSize
                    {...{
                        buttonName: SCORES_BUTTON_KEY,
                        accessKey: SCORE_TOGGLE_KEY,
                        isDisabled: !isScoreLoaded,
                        handleButtonClick: this._handleScoreButtonClick
                    }}
                />
                <TipsHand
                    {...{
                        tipType: SCORE,
                        reverse: !isDesktopWidth
                    }}
                />
                <ScoreDispatcher {...{ ref: this.scoreDispatcher }} />
            </div>
        )
    }
}
export default connect(mapStateToProps)(ScoreToggle)
