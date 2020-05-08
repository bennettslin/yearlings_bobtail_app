// Popup container for wiki section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetWiki } from '../../../redux/session/action'

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
        resetWiki: PropTypes.func.isRequired
    }

    closeWiki = () => {
        this.props.resetWiki()
    }

    render() {
        const { selectedWikiIndex } = this.props

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                shrinkAnimate
                displaysInOverlay
                isFullWidth
                isFullHeight
                {...{
                    isVisible: Boolean(selectedWikiIndex),
                    popupName: 'WikiPopup',
                    handleCloseClick: this.closeWiki
                }}
            >
                <Wiki />
            </Popup>
        )
    }
}

export default connect(
    mapStateToProps,
    { resetWiki }
)(WikiPopup)
