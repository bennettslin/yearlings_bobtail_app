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
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setScoreFocusElement: PropTypes.func.isRequired
    }

    closeScore = () => {
        this.props.updateToggleStore({ isScoreShown: false })
    }

    render() {
        const {
            isScoreShown,
            setScoreFocusElement
        } = this.props

        return (
            <Popup
                isFullSize
                displaysInOverlay
                {...{
                    popupName: 'Score',
                    isVisible: isScoreShown,
                    handleCloseClick: this.closeScore
                }}
            >
                <Score {...{ setScoreFocusElement }} />
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
