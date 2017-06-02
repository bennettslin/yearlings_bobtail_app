// Popup container for score section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScoreSection from './score-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedSongIndex,
    selectedScoreIndex
}) => ({
    selectedSongIndex,
    selectedScoreIndex
})

class ScorePopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'selectedScoreIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedScoreIndex,
                handleScoreToggle,
                handlePopupFocus,
                ...other } = this.props,

            isVisible = !!selectedScoreIndex,
            myChild = (
                <ScoreSection {...other} />
            )

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="score"
                showClose={true}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleScoreToggle}
                myChild={myChild}
            />
        )
    }
}

ScorePopup.propTypes = {
    // Through props.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,

    // From Redux.
    handleScoreToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired
}
export default connect(passReduxStateToProps)(ScorePopup)
