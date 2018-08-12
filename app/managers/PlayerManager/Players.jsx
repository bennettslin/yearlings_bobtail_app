// Hidden section for audio players.

import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { connect } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux'
import { bindActionCreators } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux'
import PropTypes from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import cx from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/classnames'

import { setCanPlayThroughs } from 'flux/actions/player'

import Player from './Player'

import { setNewValueInBitNumber } from 'helpers/bitHelper'

import {
    getMp3s,
    getSongTotalTime,
    getSongsNotLoguesCount
} from 'helpers/dataHelper'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getCanPlayThroughsObject,
    getNextPlayerSongIndexToRender
} from './playerManagerHelper'

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

        this.setPlayerCanPlayThrough = this.setPlayerCanPlayThrough.bind(this)
    }

    componentDidMount() {
        this._updateCanPlayThroughsObject()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
    }

    componentDidUpdate(prevProps) {
        /**
         * If the bit number has changed, convert it and store the updated
         * object that keeps track of each player's canPlayThrough status, then
         * calculate which player is next in line to be newly rendered.
         */
        if (this.props.canPlayThroughs !== prevProps.canPlayThroughs) {
            this._updateCanPlayThroughsObject()
        }
    }

    _updateCanPlayThroughsObject() {
        const {
                canPlayThroughs,
                selectedSongIndex
            } = this.props,

            canPlayThroughsObject = getCanPlayThroughsObject(
                canPlayThroughs
            )

        this.setState({
            canPlayThroughsObject,
            nextPlayerToRender: getNextPlayerSongIndexToRender(
                    selectedSongIndex,
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

    setPlayerCanPlayThrough(playerSongIndex) {
        const {
                canPlayThroughs
            } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: playerSongIndex,
                value: true
            })

        this.props.setCanPlayThroughs(newBitNumber)
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canPlayThroughs,
                selectedSongIndex,
                dispatch,
                /* eslint-enable no-unused-vars */

                ...other
            } = this.props,

            mp3s = getMp3s()

        return (
            <div className={cx(
                'Players',
                'displayNoneContainer'
            )}>
                {mp3s.map((mp3, index) => {
                    const
                        songIndex = index + 1,
                        totalTime = getSongTotalTime(songIndex)

                    return this._playerShouldRender(songIndex) && (
                        <Player {...other}
                            key={index}
                            {...{
                                mp3,
                                songIndex,
                                totalTime,
                                setPlayerCanPlayThrough:
                                    this.setPlayerCanPlayThrough
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanPlayThroughs
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Players)
