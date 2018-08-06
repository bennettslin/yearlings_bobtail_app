// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Overview from 'components/Overview/Overview'
import Popup from 'components/Popup/Popup'
import { getSongIsLogue } from 'helpers/dataHelper'

const mapStateToProps = ({
    canMainRender,
    selectedOverviewIndex,
    renderableStore,
    selectedTipsIndex
}) => ({
    canMainRender,
    selectedOverviewIndex,
    renderableSongIndex: renderableStore.renderableSongIndex,
    selectedTipsIndex
})

const overviewPopupPropTypes = {
    // Through Redux.
    canMainRender: PropTypes.bool.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    renderableSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    inMain: PropTypes.bool,
    isPhone: PropTypes.bool,
    handlePopupContainerClick: PropTypes.func.isRequired
},

OverviewPopup = ({
    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

    inMain,
    isPhone,
    canMainRender,
    selectedOverviewIndex,
    renderableSongIndex,
    selectedTipsIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(renderableSongIndex),

        // Only position absolute when in main and is phone.
        noAbsoluteFull = isLogue || !isPhone

    let isVisible

    // Switch between logue and song overview sections.
    if (isLogue) {
        isVisible = !inMain
    } else {
        isVisible = selectedOverviewIndex ? false : Boolean(inMain)
    }

    /**
     * Always hide overview section when title is open, or when tip is shown
     * in song. Always hide before ready to render.
     */
    if (!canMainRender || (!isLogue && !selectedTipsIndex)) {
        isVisible = false
    }

    return (
        <Popup
            bounceAnimate
            hasNarrowPadding
            popupName="Overview"
            className={cx(
                inMain && 'OverviewPopup__inMain'
            )}
            isVisible={isVisible}
            noFlexCentre={inMain}
            noAbsoluteFull={noAbsoluteFull}
            handlePopupContainerClick={handlePopupContainerClick}
        >
            <Overview {...other} />
        </Popup>
    )
}

OverviewPopup.propTypes = overviewPopupPropTypes

export default connect(mapStateToProps)(OverviewPopup)
