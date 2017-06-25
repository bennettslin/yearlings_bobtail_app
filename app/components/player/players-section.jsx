// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Player from './player'
import { getMp3s, getSongTotalTime } from '../../helpers/data-helper'
import { getNextPlayerToRender } from '../../helpers/logic-helper'

class PlayersSection extends Component {

    constructor(props) {
        super(props)

        const canPlayThroughs = {}

        this._handlePlayerCanPlayThrough = this._handlePlayerCanPlayThrough.bind(this)

        this.state = {
            canPlayThroughs,
            nextPlayerToRender: getNextPlayerToRender(
                    this.props.selectedSongIndex,
                    canPlayThroughs
                )
        }
    }

    _handlePlayerCanPlayThrough(e, playerSongIndex) {
        const { canPlayThroughs } = this.state

        canPlayThroughs[playerSongIndex] = true

        this.setState({
            canPlayThroughs,

            // Get next player to render given new state.
            nextPlayerToRender: getNextPlayerToRender(
                    this.props.selectedSongIndex,
                    canPlayThroughs
                )
        })
    }

    _playerShouldRender(playerSongIndex) {

        const { canPlayThroughs,
              nextPlayerToRender } = this.state

        // Render player if it has already passed canPlayThrough...
        return canPlayThroughs[playerSongIndex] ||

            // Or if it is next in the queue to be rendered.
            playerSongIndex === nextPlayerToRender
    }

    render() {

        const { selectedSongIndex,
                ...other } =  this.props,

            mp3s = getMp3s()

        return (
            <div className="audio-players-section">
                {mp3s.map((mp3, index) => {
                    const songIndex = index + 1,
                        isSelected = songIndex === selectedSongIndex,
                        totalTime = getSongTotalTime(songIndex)

                    return this._playerShouldRender(songIndex) ? (
                        <Player {...other}
                            key={index}
                            songIndex={songIndex}
                            mp3={mp3}
                            isSelected={isSelected}
                            totalTime={totalTime}
                            handleCanPlayThrough={this._handlePlayerCanPlayThrough}
                        />
                    ) : null
                })}
            </div>
        )
    }
}

PlayersSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(PlayersSection)
