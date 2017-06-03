// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AudioPlayer from './audio-player'
import { getMp3s } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class AudioPlayersSection extends Component {

    // TODO: Still necessary?
    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                ...other } = this.props,
            mp3s = getMp3s()

        return (
            <div className="audio-players-section">
                {mp3s.map((mp3, index) => {
                    const playerIndex = index + 1,
                        isSelected = playerIndex === selectedSongIndex

                    return (
                        <AudioPlayer {...other}
                            key={index}
                            mp3={mp3}
                            isSelected={isSelected}
                        />
                    )
                })}
            </div>
        )
    }
}

AudioPlayersSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(AudioPlayersSection)
