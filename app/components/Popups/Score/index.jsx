// Popup container for score section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Score from 'components/Score'
import Popup from 'components/Popup'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    songStore: { selectedSongIndex },
    selectedScoreIndex
}) => ({
    selectedSongIndex,
    selectedScoreIndex
})

class ScorePopup extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,

        // From props.
        handleScoreToggle: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                selectedSongIndex,
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedScoreIndex,
                handleScoreToggle,

            ...other } = this.props,

            isVisible = Boolean(selectedScoreIndex)

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
}

export default connect(mapStateToProps)(ScorePopup)
