import React, { Component } from 'react'
import ScoreSection from './score-section'
import TransitionPopup from '../superclasses/transition-popup'

/*************
 * CONTAINER *
 *************/

const ScoreTransitionPopup = ({

    isPhone,
    selectedScoreIndex,

...other }) => {

    const isVisible = selectedScoreIndex && !isPhone,
        myChild = (
            <ScoreSection {...other} />
        )

    return (
        <TransitionPopup
            popupClassName={'score'}
            isVisible={isVisible}
            myChild={myChild}
        />
    )
}



export default ScoreTransitionPopup
