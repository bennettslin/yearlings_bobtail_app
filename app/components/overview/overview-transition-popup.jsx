import React from 'react'
import OverviewSection from './overview-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const OverviewTransitionPopup = ({

    handlePopupContainerClick,

...other }) => {

    const { isLogue,
            inOverviewSubfield,
            selectedOverviewIndex } = other,

        myChild = (
            <OverviewSection {...other} />
        )

    let isVisible

    if (isLogue) {
        isVisible = !inOverviewSubfield
    } else {
        isVisible = selectedOverviewIndex ? false : inOverviewSubfield
    }

    return (
        <TransitionPopup
            popupClassName="overview"
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

export default OverviewTransitionPopup
