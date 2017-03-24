import React from 'react'
import ScoreSection from './score-section'
import TransitionPopup from '../superclasses/transition-popup'

/*************
 * CONTAINER *
 *************/

const ScoreTransitionPopup = ({

    isPhone,
    selectedScoreIndex,
    showClose,
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
            showClose={showClose}
            handlePopupFocus={handlePopupFocus}
            onCloseClick={handleScoreToggle}
            myChild={myChild}
        />
    )
}

export default ScoreTransitionPopup
