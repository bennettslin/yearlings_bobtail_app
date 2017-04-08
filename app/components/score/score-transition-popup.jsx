import React from 'react'
import ScoreSection from './score-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const ScoreTransitionPopup = ({

    isPhone,
    selectedScoreIndex,
    handleScoreToggle,
    handlePopupFocus,

...other }) => {

    const isVisible = selectedScoreIndex && !isPhone,
        myChild = (
            <ScoreSection {...other} />
        )

    return (
        <TransitionPopup
            popupClassName="score"
            isVisible={isVisible}
            showClose={true}
            handlePopupFocus={handlePopupFocus}
            handleCloseClick={handleScoreToggle}
            myChild={myChild}
        />
    )
}

export default ScoreTransitionPopup
