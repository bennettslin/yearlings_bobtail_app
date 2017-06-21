// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Player from './player'
import { getMp3s, getSongTotalTime } from '../../helpers/data-helper'

class PlayersSection extends Component {

    // Don't need shouldComponentUpdate.

    render() {
        const { selectedSongIndex,
                ...other } = this.props,
            mp3s = getMp3s()

        return (
            <div className="audio-players-section">
                {mp3s.map((mp3, index) => {
                    const songIndex = index + 1,
                        isSelected = songIndex === selectedSongIndex,
                        totalTime = getSongTotalTime(songIndex)

                    return (
                        <Player {...other}
                            key={index}
                            songIndex={songIndex}
                            mp3={mp3}
                            isSelected={isSelected}
                            totalTime={totalTime}
                        />
                    )
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
