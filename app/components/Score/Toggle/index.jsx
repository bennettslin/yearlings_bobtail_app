// Toggle button to show, hide, and disable tips section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { SCORE_TOGGLE_KEY } from 'constants/access'
import { SCORES_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    loadStore: { isScoreLoaded },
    responsiveStore: { hasRoomForScore },
    mobileStore: { isHigherProcessor }
}) => ({
    isScoreLoaded,
    hasRoomForScore,
    isHigherProcessor
})

class ScoreToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        hasRoomForScore: PropTypes.bool.isRequired,
        isHigherProcessor: PropTypes.bool.isRequired,
        isScoreLoaded: PropTypes.bool.isRequired
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
                hasRoomForScore,
                isHigherProcessor
            } = this.props,

            showScoreToggle = isHigherProcessor && hasRoomForScore

        return showScoreToggle && (
            <___>
                <Button
                    isLargeSize
                    {...{
                        buttonName: SCORES_BUTTON_KEY,
                        className: 'ScoresTipsButton',
                        accessKey: SCORE_TOGGLE_KEY,
                        isDisabled: !isScoreLoaded,
                        handleButtonClick: this._handleScoreButtonClick
                    }}
                />
                <ScoreDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}
export default connect(mapStateToProps)(ScoreToggle)
