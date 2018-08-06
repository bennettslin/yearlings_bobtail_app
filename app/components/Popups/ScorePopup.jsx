// Popup container for score section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Score from 'components/Score/Score'
import Popup from 'components/Popup/Popup'

const mapStateToProps = ({
    selectedSongIndex,
    selectedScoreIndex
}) => ({
    selectedSongIndex,
    selectedScoreIndex
})

const scorePopupPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,

    // From props.
    handleScoreToggle: PropTypes.func.isRequired
},

ScorePopup = ({
    /* eslint-disable no-unused-vars */
    selectedSongIndex,
    dispatch,
    /* eslint-enable no-unused-vars */

    selectedScoreIndex,
    handleScoreToggle,

...other }) => {

    const isVisible = Boolean(selectedScoreIndex)

    return (
        <Popup
            isFullSize
            displaysInOverlay
            popupName="Score"
            isVisible={isVisible}
            handleCloseClick={handleScoreToggle}
        >
            <Score {...other} />
        </Popup>
    )
}

ScorePopup.propTypes = scorePopupPropTypes

export default connect(mapStateToProps)(ScorePopup)
