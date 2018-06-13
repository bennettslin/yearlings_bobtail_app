// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Player from './Player'
import { getMp3s, getSongTotalTime, getSongsNotLoguesCount } from '../../helpers/dataHelper'
import { convertBitNumberToTrueFalseKeys } from '../../helpers/bitHelper'
import { getNextPlayerToRender } from '../../helpers/logicHelper'

const mapStateToProps = ({
    selectedSongIndex,
    canPlayThroughs
}) => ({
    selectedSongIndex,
    canPlayThroughs
})

class Players extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        canPlayThroughs: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            /**
             * This object is converted from the bit number fetched through
             * Redux. We will store it so that we don't have to convert it
             * every single time.
             */
            canPlayThroughsObject: null,

            // At any given time, only one player is being newly rendered.
            nextPlayerToRender: null
        }
    }

    UNSAFE_componentWillMount() {
        this._updateCanPlayThroughsObject(this.props)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        /**
         * If the bit number has changed, convert it and store the updated
         * object that keeps track of each player's canPlayThrough status, then
         * calculate which player is next in line to be newly rendered.
         */
        if (nextProps.canPlayThroughs !== this.props.canPlayThroughs) {
            this._updateCanPlayThroughsObject(nextProps)
        }
    }

    _updateCanPlayThroughsObject(props) {
        const canPlayThroughsObject = convertBitNumberToTrueFalseKeys({
            keysCount: getSongsNotLoguesCount(),
            bitNumber: props.canPlayThroughs
        })

        this.setState({
            canPlayThroughsObject,
            nextPlayerToRender: getNextPlayerToRender(
                    props.selectedSongIndex,
                    canPlayThroughsObject
                )
        })
    }

    _playerShouldRender(playerSongIndex) {

        const { canPlayThroughsObject,
              nextPlayerToRender } = this.state

        // Render player if it has already passed canPlayThrough...
        return canPlayThroughsObject[playerSongIndex] ||

            // Or if it is next in the queue to be rendered.
            playerSongIndex === nextPlayerToRender
    }

    render() {

        const { selectedSongIndex,
                ...other } =  this.props,

            mp3s = getMp3s()

        return (
            <div className="hiddenContainer">
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
                        />
                    ) : null
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Players)
