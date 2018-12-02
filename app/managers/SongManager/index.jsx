import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updatePlayerStore } from 'flux/player/action'
import { updateSongStore } from 'flux/song/action'

import SongDispatcher from '../../handlers/SongHandler/Dispatcher'

import {
    CONTINUE,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from 'constants/options'

class SongManager extends PureComponent {

    // TODO: Eventually get rid of this.
    static defaultProps = {
        parentThis: {}
    }

    static propTypes = {
        // Through Redux.
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
        this.props.parentThis.handleSongEnd = this.handleSongEnd
    }

    handleSongEnd = () => {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const {
                selectedSongIndex,
                selectedAudioOptionIndex
            } = this.props,

            selectedAudioOption = AUDIO_OPTIONS[selectedAudioOptionIndex]

        // If option is to pause at end, stop play.
        if (selectedAudioOption === PAUSE_AT_END) {
            this.props.togglePlay()

            // Just select first verse of current song.
            this.dispatchSong({
                selectedSongIndex,
                selectedVerseIndex: 0
            })

        } else {

            /**
             * If option is to continue, advance to next song. Otherwise, stay
             * on same song, and start at beginning. (True evaluates to 1, false 0.)
             */
            const nextSongIndex = selectedSongIndex
                + (selectedAudioOption === CONTINUE)

            this.dispatchSong({
                selectedSongIndex: nextSongIndex
            })
        }
    }

    render() {
        return (
            <SongDispatcher {...{ parentThis: this }} />
        )
    }
}

const mapStateToProps = ({
    sessionStore: { selectedAudioOptionIndex },
    songStore: { selectedSongIndex }
}) => ({
    selectedAudioOptionIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updatePlayerStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongManager)
