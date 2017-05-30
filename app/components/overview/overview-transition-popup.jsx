import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverviewSection from './overview-section'
import TransitionPopup from '../popup/transition-popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedOverviewIndex,
    selectedTitleIndex
}) => ({
    // Pass Redux state into component props.
    selectedOverviewIndex,
    selectedTitleIndex
})

/*************
 * CONTAINER *
 *************/

class OverviewTransitionPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'overviewText',
                    'selectedOverviewIndex',
                    'selectedTitleIndex',
                    'isPhone',
                    'isLogue',
                    'inOverviewSubfield'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { isLogue,
                inOverviewSubfield,
                selectedOverviewIndex,
                selectedTitleIndex,
                handlePopupContainerClick,
                ...other } = this.props,

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
                popupClassName="overview"
                isVisible={isVisible}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

OverviewTransitionPopup.propTypes = {
    overviewText: PropTypes.string.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isLogue: PropTypes.bool.isRequired,
    inOverviewSubfield: PropTypes.bool.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(OverviewTransitionPopup)
