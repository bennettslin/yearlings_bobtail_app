import React from 'react'
import TitleSection from './title-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const TitleTransitionPopup = ({

    selectedTitleIndex,
    handleTitleToggle,
    handlePopupFocus,

...other }) => {

    const isVisible = !!selectedTitleIndex,
        myChild = (
            <TitleSection {...other} />
        )

    return (
        <TransitionPopup
            popupClassName="title"
            isVisible={isVisible}
            showClose={true}
            handlePopupFocus={handlePopupFocus}
            handleCloseClick={handleTitleToggle}
            myChild={myChild}
        />
    )
}

export default TitleTransitionPopup
