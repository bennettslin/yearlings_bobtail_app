import React from 'react'
import PropTypes from 'prop-types'
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

OverviewTransitionPopup.propTypes = {
    isLogue: PropTypes.bool.isRequired,
    inOverviewSubfield: PropTypes.bool.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default OverviewTransitionPopup
