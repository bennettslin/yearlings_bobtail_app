import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiSection from './wiki-section'
import TransitionPopup from '../popup/transition-popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedWikiIndex
}) => ({
// Pass Redux state into component props.
    selectedWikiIndex
})

class WikiTransitionPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedWikiIndex',
                    'selectedWikiUrl'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedWikiIndex,
                handleWikiToggle,
                handlePopupFocus,
                ...other } = this.props,

            isVisible = !!selectedWikiIndex,
            myChild = (
                <WikiSection {...other} />
            )

        return (
            <TransitionPopup
                popupClassName="wiki"
                showClose={true}
                isVisible={isVisible}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleWikiToggle}
                myChild={myChild}
            />
        )
    }
}

WikiTransitionPopup.propTypes = {
    selectedWikiIndex: PropTypes.number.isRequired,
    handleWikiToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired,
}
export default connect(passReduxStateToProps)(WikiTransitionPopup)
