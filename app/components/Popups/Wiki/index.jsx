// Popup container for wiki section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
        this.props.updateSessionStore({
            selectedWikiIndex: 0,
            carouselAnnotationIndex: 0
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedWikiIndex,

                ...other
            } = this.props,

            isVisible = Boolean(selectedWikiIndex)

        return (
            <Popup
                shrinkAnimate
                displaysInOverlay
                isFullSize
                isVisible={isVisible}
                popupName="Wiki"
                handleCloseClick={this.closeWiki}
            >
                <Wiki {...other} />
            </Popup>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiPopup)
