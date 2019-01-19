// Popup container for wiki section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSessionStore } from 'flux/session/action'

import Wiki from '../../Wiki'
import Popup from '../../Popup'

const mapStateToProps = ({
    sessionStore: { selectedWikiIndex }
}) => ({
    selectedWikiIndex
})

class WikiPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedWikiIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    closeWiki = () => {
        this.props.updateSessionStore({ selectedWikiIndex: 0 })
    }

    render() {
        const { selectedWikiIndex } = this.props

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                shrinkAnimate
                displaysInOverlay
                isFullSize
                isVisible={Boolean(selectedWikiIndex)}
                popupName="Wiki"
                handleCloseClick={this.closeWiki}
            >
                <Wiki />
            </Popup>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateSessionStore }
)(WikiPopup)
