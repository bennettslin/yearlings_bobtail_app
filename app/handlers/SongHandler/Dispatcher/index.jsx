import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'

import {
    CONTINUE,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from 'constants/options'

import {
    getSongsAndLoguesCount,
    getTimeForVerseIndex
} from '../../../helpers/dataHelper'

class SongDispatcher extends PureComponent {

    // TODO: Eventually get rid of this.
    static defaultProps = {
        getDispatch: {}
    }

    static propTypes = {
        // Through Redux.
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        updateSelectedPlayer: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
        this.props.getDispatch.handleSongEnd = this.handleSongEnd
        this.props.getDispatch.selectSong = this.selectSong
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
            this.selectSong({
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

            this.selectSong({
                selectedSongIndex: nextSongIndex
            })
        }
    }

    selectSong = ({
        selectedSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        direction
    }) => {
        const { props } = this

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = props.selectedSongIndex + direction

            if (
                selectedSongIndex < 0 ||
                selectedSongIndex >= getSongsAndLoguesCount()
            ) {
                return false
            }
        }

        /**
         * This check needs to be made first, before selected song is updated
         * in Redux.
         */
        if (selectedSongIndex !== this.props.selectedSongIndex) {
            /**
             * This is the only place where selected player will be updated
             * based on a new song.
             */
            props.updateSelectedPlayer({
                selectedSongIndex,
                selectedVerseIndex
            })
        }

        props.selectVerse({
            selectedSongIndex,
            selectedVerseIndex,
            bypassUpdateSelected: true
        })

        props.updateSongStore({
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedTime: getTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })

        if (!isNaN(earColumnIndex)) {
            this.props.updateSessionStore({ earColumnIndex })
        }

        return true
    }

    render() {
        return null
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
        updateSessionStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongDispatcher)
