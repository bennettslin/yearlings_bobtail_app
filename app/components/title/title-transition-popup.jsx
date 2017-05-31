import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from './title-section'
import TransitionPopup from '../popup/transition-popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedTitleIndex
}) => ({
// Pass Redux state into component props.
    selectedTitleIndex
})

class TitleTransitionPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedTitleIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedTitleIndex,
                handleTitleToggle,
                handlePopupFocus,
                ...other } = this.props,

            isVisible = !!selectedTitleIndex,
            myChild = (
                <TitleSection {...other} />
            )

        return (
            <TransitionPopup
                popupClassName="title"
                showClose={true}
                isVisible={isVisible}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleTitleToggle}
                myChild={myChild}
            />
        )
    }
}

TitleTransitionPopup.propTypes = {
    selectedTitleIndex: PropTypes.number.isRequired,
    handleTitleToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(TitleTransitionPopup)
