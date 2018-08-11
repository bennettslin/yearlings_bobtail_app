// Hidden section for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Player from './Player'

import {
    getMp3s,
    getSongTotalTime
} from 'helpers/dataHelper'

// import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getCanPlayThroughsObject,
    getNextPlayerSongIndexToRender
} from './playersHelper'

const mapStateToProps = ({
    selectedStore: { selectedSongIndex },
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
            canPlayThroughsObject: getCanPlayThroughsObject(
                props.canPlayThroughs
            ),

            // At any given time, only one player is being newly rendered.
            nextPlayerToRender: -1
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !getPropsAreShallowEqual({
    //         props: this.props,
    //         nextProps
    //     }) || !getPropsAreShallowEqual({
    //         props: this.state,
    //         nextProps: nextState
    //     })
    // }

    componentDidMount() {
        this._updateCanPlayThroughsObject(this.props)
    }

    componentDidUpdate(prevProps) {
        /**
         * If the bit number has changed, convert it and store the updated
         * object that keeps track of each player's canPlayThrough status, then
         * calculate which player is next in line to be newly rendered.
         */
        if (this.props.canPlayThroughs !== prevProps.canPlayThroughs) {
            this._updateCanPlayThroughsObject(this.props)
        }
    }

    _updateCanPlayThroughsObject(props) {
        const canPlayThroughsObject = getCanPlayThroughsObject(
            props.canPlayThroughs
        )

        this.setState({
            canPlayThroughsObject,
            nextPlayerToRender: getNextPlayerSongIndexToRender(
                    props.selectedSongIndex,
                    canPlayThroughsObject
                )
        })
    }

    _playerShouldRender(playerSongIndex) {

        const {
            canPlayThroughsObject,
            nextPlayerToRender
        } = this.state

        return (
            // Render player if it has already passed canPlayThrough...
            canPlayThroughsObject[playerSongIndex] ||

            // Or if it is next in the queue to be rendered.
            playerSongIndex === nextPlayerToRender
        )
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canPlayThroughs,
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedSongIndex,
                ...other
            } = this.props,

            mp3s = getMp3s()

        return (
            <div className={cx(
                'Players',
                'displayNoneContainer'
            )}>
                {mp3s.map((mp3, index) => {
                    const songIndex = index + 1,
                        isSelected = songIndex === selectedSongIndex,
                        totalTime = getSongTotalTime(songIndex)

                    return this._playerShouldRender(songIndex) && (
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

export default connect(mapStateToProps)(Players)
