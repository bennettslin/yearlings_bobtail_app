// Popup container for score section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'
import { connect } from 'react-redux'
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
        const { isScoreShown } = this.props

        return (
            <Popup
                isFullWidth
                isFullHeight
                displaysInOverlay
                {...{
                    popupName: 'ScorePopup',
                    isVisible: isScoreShown,
                    handleCloseClick: this.closeScore
                }}
            >
                <Score />
            </Popup>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(ScorePopup)
