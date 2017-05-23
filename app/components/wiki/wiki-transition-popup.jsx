import React from 'react'
import PropTypes from 'prop-types'
import WikiSection from './wiki-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const WikiTransitionPopup = ({

    selectedWikiIndex,
    handleWikiToggle,
    handlePopupFocus,

...other }) => {

    const isVisible = !!selectedWikiIndex,
        myChild = (
            <WikiSection {...other} />
        )

    return (
        <TransitionPopup
            popupClassName="wiki"
            isVisible={isVisible}
            showClose={true}
            handlePopupFocus={handlePopupFocus}
            handleCloseClick={handleWikiToggle}
            myChild={myChild}
        />
    )
}

WikiTransitionPopup.propTypes = {
    selectedWikiIndex: PropTypes.number.isRequired,
    handleWikiToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired,
}

export default WikiTransitionPopup
