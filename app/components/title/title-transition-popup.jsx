import React from 'react'
import PropTypes from 'prop-types'
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

TitleTransitionPopup.propTypes = {
    selectedTitleIndex: PropTypes.number.isRequired,
    handleTitleToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired
}

export default TitleTransitionPopup
