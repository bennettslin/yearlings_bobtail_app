import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSelectedStore } from 'flux/actions/storage'

import { CONTINUE,
         PAUSE_AT_END,
         AUDIO_OPTIONS } from 'constants/options'

import {
    getSongsAndLoguesCount
} from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class SongManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired,
        selectAnnotation: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    advanceToNextSong() {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const { selectedSongIndex,
                selectedAudioOptionIndex } = this.props,

            selectedAudioOption = AUDIO_OPTIONS[selectedAudioOptionIndex]

        // If option is to pause at end, stop play.
        if (selectedAudioOption === PAUSE_AT_END) {
            this.togglePlay()

        } else {

            /**
             * If option is to continue, advance to next song. Otherwise, stay
             * on same song, and start at beginning. (True evaluates to 1, false 0.)
             */
            const nextSongIndex = selectedSongIndex
                + (selectedAudioOption === CONTINUE)

            this.selectSong({
                selectedSongIndex: nextSongIndex,
                selectedVerseIndex: 0
            })
        }
    }

    selectSong({
        selectedSongIndex = 0,
        direction,
        selectedAnnotationIndex = 0,
        selectedVerseIndex = 0,
        destinationWormholeIndex
    }) {
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

        props.selectAnnotation({
            selectedAnnotationIndex,
            selectedSongIndex,

            // If from wormhole, access destination wormhole index.
            initialAnnotationAnchorIndex: destinationWormholeIndex,
            bypassUpdateSelected: true
        })

        props.selectVerse({
            selectedVerseIndex,
            selectedSongIndex,
            bypassUpdateSelected: true
        })

        props.updateSelectedStore({
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        })

        /**
         * This is the only place where router path will change based on a new
         * song.
         */
        if (selectedSongIndex !== this.props.selectedSongIndex) {
            props.updatePath({
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            })
        }

        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedAudioOptionIndex,
    selectedStore: { selectedSongIndex }
}) => ({
    selectedAudioOptionIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSelectedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongManager)
