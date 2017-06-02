import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverviewSection from './overview-section'
import TransitionPopup from '../popup/transition-popup'
import { getIsLogue } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex
}) => ({
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex
})

class OverviewTransitionPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'overviewText',
                    'selectedOverviewIndex',
                    'selectedSongIndex',
                    'selectedTitleIndex',
                    'isPhone',
                    'inOverviewSubfield'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { inOverviewSubfield,
                selectedOverviewIndex,
                selectedSongIndex,
                selectedTitleIndex,
                handlePopupContainerClick,
                ...other } = this.props,

            isLogue = getIsLogue(selectedSongIndex),

            myChild = (
                <OverviewSection {...other}
                    isLogue={isLogue}
                />
            )

        let isVisible

        if (isLogue) {
            isVisible = !inOverviewSubfield
        } else {
            isVisible = selectedOverviewIndex ? false : inOverviewSubfield
        }

        // Always hide overview when title is selected.
        if (selectedTitleIndex) {
            isVisible = false
        }

        return (
            <TransitionPopup
                isVisible={isVisible}
                popupClassName="overview"
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

OverviewTransitionPopup.propTypes = {
    overviewText: PropTypes.string.isRequired,
    isPhone: PropTypes.bool.isRequired,
    inOverviewSubfield: PropTypes.bool.isRequired,

    // Through Redux.
    selectedOverviewIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From props.
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(OverviewTransitionPopup)
