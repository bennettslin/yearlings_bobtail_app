// Popup container for score section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

import Score from '../../Score'
import Popup from '../../Popup'

const mapStateToProps = ({
    toggleStore: { isScoreShown }
}) => ({
    isScoreShown
})

class ScorePopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isScoreShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    closeScore = () => {
        this.props.updateToggleStore({ isScoreShown: false })
    }

    render() {
        return (
            <Popup
                isFullSize
                displaysInOverlay
                {...{
                    popupName: 'Score',
                    isVisible: this.props.isScoreShown,
                    handleCloseClick: this.closeScore
                }}
            >
                <Score />
            </Popup>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScorePopup)
