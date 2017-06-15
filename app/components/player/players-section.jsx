// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Player from './player'
import { getMp3s } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class PlayersSection extends Component {

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
                        <Player {...other}
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

PlayersSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(PlayersSection)
