// Popup container for score section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

import Score from '../../Score'
import Popup from '../../Popup'

const mapStateToProps = ({
    songStore: { selectedSongIndex },
    toggleStore: { isScoreShown }
}) => ({
    selectedSongIndex,
    isScoreShown
})

class ScorePopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        isScoreShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    closeScore = () => {
        this.props.updateToggleStore({ isScoreShown: false })
    }

    render() {
        const {
            /* eslint-disable no-unused-vars */
            selectedSongIndex,
            dispatch,
            /* eslint-enable no-unused-vars */

            isScoreShown,

            ...other
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
                <Score {...other} />
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
