// Toggle button to show, hide, and disable tips section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'

import { populateRefs } from '../../../helpers/ref'

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

    _handleScoreButtonClick = () => {
        this.dispatchScore()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
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
                        className: cx(
                            'hidden__overviewStatus'
                        ),
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
                <ScoreDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}
export default connect(mapStateToProps)(ScoreToggle)
