// Popup container for score section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Score from '../Score/Score'
import Popup from '../Popup/Popup'

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
    selectedScoreIndex,

    /* eslint-disable no-unused-vars */
    selectedSongIndex,
    /* eslint-enable no-unused-vars */

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
