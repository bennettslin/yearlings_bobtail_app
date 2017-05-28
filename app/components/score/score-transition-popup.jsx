import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScoreSection from './score-section'
import TransitionPopup from '../popup/transition-popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class ScoreTransitionPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPhone',
                    'selectedSongIndex',
                    'selectedScoreIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { isPhone,
                selectedScoreIndex,
                handleScoreToggle,
                handlePopupFocus,
                ...other } = this.props,

            isVisible = !!selectedScoreIndex && !isPhone,
            myChild = (
                <ScoreSection {...other} />
            )

        return (
            <TransitionPopup
                popupClassName="score"
                showClose={true}
                isVisible={isVisible}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleScoreToggle}
                myChild={myChild}
            />
        )
    }
}

ScoreTransitionPopup.propTypes = {
    isPhone: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired
}

export default ScoreTransitionPopup
