import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updatePlayerStore } from 'flux/player/action'
import { updateSongStore } from 'flux/song/action'

import {
    CONTINUE,
    PAUSE_AT_END,
    AUDIO_OPTIONS
} from 'constants/options'

import {
    getSongsAndLoguesCount,
    getTimeForVerseIndex
} from '../../../helpers/data'

class SongDispatcher extends PureComponent {

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
        this.props.parentThis.selectSong = this.selectSong
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
        destinationWormholeIndex,
        direction
    }) => {
        const isWormholeSelected = Boolean(destinationWormholeIndex)

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = this.props.selectedSongIndex + direction

            if (
                selectedSongIndex < 0 ||
                selectedSongIndex >= getSongsAndLoguesCount()
            ) {
                return false
            }
        }

        this.props.updatePlayerStore({
            playerSongIndex: selectedSongIndex,
            playerVerseIndex: selectedVerseIndex
        })

        this.props.updateSongStore({
            ...!isNaN(earColumnIndex) && {
                earColumnIndex
            },
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedTime: getTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })

        this.props.updateAccessStore({
            accessedAnnotationIndex:
                isWormholeSelected ?
                    selectedAnnotationIndex :
                    1,
            ...isWormholeSelected && {
                accessedWikiWormholeIndex: destinationWormholeIndex
            }
        })

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
        updateAccessStore,
        updatePlayerStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongDispatcher)
