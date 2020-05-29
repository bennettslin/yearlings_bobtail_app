// Popup container for wiki section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wiki from '../../Wiki'
import Popup from '../../Popup'
import { resetWiki } from '../../../redux/session/action'
import { SELECTED_WIKI_INDEX_SELECTOR } from '../../../redux/session/selectors'

const mapStateToProps = state => {
    const selectedWikiIndex = SELECTED_WIKI_INDEX_SELECTOR(state)

    return {
        selectedWikiIndex
    }
}

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
