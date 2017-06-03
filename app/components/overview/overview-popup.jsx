// Popup container for overview section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverviewSection from './overview-section'
import Popup from '../popup/popup'
import { getIsLogue } from '../../helpers/data-helper'
import { getIsToggleInOverview } from '../../helpers/responsive-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class OverviewPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'selectedOverviewIndex',
                    'selectedSongIndex',
                    'selectedTitleIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { deviceIndex,
                inOverviewSubfield,
                selectedOverviewIndex,
                selectedSongIndex,
                selectedTitleIndex,
                handlePopupContainerClick,
                ...other } = this.props,

            isLogue = getIsLogue(selectedSongIndex),
            isToggleInOverview = getIsToggleInOverview(deviceIndex),

            myChild = (
                <OverviewSection {...other}
                    isToggleInOverview={isToggleInOverview}
                />
            )

        let isVisible

        // Switch between logue and song overview sections.
        if (isLogue) {
            isVisible = !inOverviewSubfield
        } else {
            isVisible = selectedOverviewIndex ? false : inOverviewSubfield
        }

        // Always hide overview section when title is selected.
        if (selectedTitleIndex) {
            isVisible = false
        }

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="overview"
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

OverviewPopup.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    inOverviewSubfield: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex
}) => ({
    deviceIndex,
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex
}))(OverviewPopup)
