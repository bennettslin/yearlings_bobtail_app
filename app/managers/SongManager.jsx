import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessAnnotationIndex } from '../redux/actions/access'
import { setIsPlaying } from '../redux/actions/audio'
import { setIsScoreLoaded } from '../redux/actions/player'
import {
    setIsHeavyRenderReady,
    setIsVerseBarAbove,
    setIsVerseBarBelow
} from '../redux/actions/session'
import { selectSongIndex } from '../redux/actions/storage'

import { CONTINUE,
         PAUSE_AT_END,
         AUDIO_OPTIONS,
         DISABLED,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'

import {
    getSongsAndLoguesCount,
    getSongIsLogue
} from '../helpers/dataHelper'
import { getAnnotationIndexForDirection } from '../helpers/logicHelper'

class VerseManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,

        setIsHeavyRenderReady: PropTypes.func.isRequired,
        setIsScoreLoaded: PropTypes.func.isRequired,
        setIsPlaying: PropTypes.func.isRequired,
        setIsVerseBarAbove: PropTypes.func.isRequired,
        setIsVerseBarBelow: PropTypes.func.isRequired,
        accessAnnotationIndex: PropTypes.func.isRequired,
        selectSongIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        // handleRenderReady: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired,
        accessNavSong: PropTypes.func.isRequired,
        interactivateVerse: PropTypes.func.isRequired,
        selectAnnotation: PropTypes.func.isRequired,
        selectBookColumn: PropTypes.func.isRequired,
        selectDotsExpand: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired,
        selectOverview: PropTypes.func.isRequired,
        selectScore: PropTypes.func.isRequired,
        selectTips: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        selectWiki: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
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
            const nextSongIndex = selectedSongIndex +
                (selectedAudioOption === CONTINUE)

            this.selectSong({
                selectedSongIndex: nextSongIndex,
                selectedVerseIndex: 0
            })
        }
    }

    /**
     * TODO: Handle this more efficiently, so that this same logic can be
     * applied to both mounting and selecting a new song.
     */
    prepareSongWithPossibleAnnotation(selectedAnnotationIndex) {
        const { props } = this

        // If not selected from portal, show overview if hidden.
        if (!selectedAnnotationIndex) {
            props.selectOverview({
                justShowIfHidden: true
            })

            props.selectTips({
                justShowIfHidden: true
            })

            /**
             * If overview or tips are being shown, collapse lyric column and
             * hide dots section.
             */
            if (OVERVIEW_OPTIONS[props.selectedOverviewIndex] !== DISABLED ||
                TIPS_OPTIONS[props.selectedTipsIndex] !== DISABLED) {
                props.selectDotsExpand(false)
                props.selectLyricExpand(false)
            }
        }
    }

    selectSong({
        selectedSongIndex = 0,
        direction,
        selectedAnnotationIndex = 0,
        selectedVerseIndex = 0,
        selectedWikiIndex = 0,
        destinationPortalIndex
    }) {
        const { props } = this

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = props.selectedSongIndex + direction

            if (selectedSongIndex < 0 || selectedSongIndex >= getSongsAndLoguesCount()) {
                return false
            }
        }

        const isLogue = getSongIsLogue(selectedSongIndex)

        this.prepareSongWithPossibleAnnotation(selectedAnnotationIndex)

        props.selectAnnotation({
            selectedAnnotationIndex,
            selectedSongIndex,

            // If from portal, access destination portal index.
            initialAnnotationAnchorIndex: destinationPortalIndex
        })

        props.selectVerse({
            selectedVerseIndex,
            selectedSongIndex
        })

        // TODO: This prevents app from breaking when wiki is selected and song is changed. But this might be handled more strategically.
        props.selectWiki({ selectedWikiIndex })

        props.interactivateVerse()

        if (isLogue) {
            props.setIsPlaying(false)
            props.selectScore(false)
        }

        // Nav will update book column right away.
        props.selectBookColumn({
            resetToDefault: true,
            selectedSongIndex
        })

        /**
         * Get new accessed annotation index by starting from first and going
         * forward. If not called from portal, it should always be the title
         * annotation unless deselected by dots.
         */
        props.accessAnnotationIndex(
            selectedAnnotationIndex ||
            getAnnotationIndexForDirection({
                deviceIndex: props.deviceIndex,
                currentAnnotationIndex: 1,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex
            })
        )

        props.accessNavSong(selectedSongIndex)
        props.selectSongIndex(selectedSongIndex)

        // If not selecting a new song, no need to render again.
        if (selectedSongIndex === props.selectedSongIndex) {

            /**
             * FIXME: I'm not sure that it's necessary to handle render ready
             * here. The only place that reaches this code is the "shivaree"
             * portal in Odin. Commenting out for now. Delete once confident
             * about doing so. HandleRenderReady can then be a fully private
             * method of RenderManager.
             */
            // props.handleRenderReady({
            //     selectedSongIndex,
            //     selectedAnnotationIndex
            // })

        } else {
            props.setIsHeavyRenderReady(false)
            props.setIsScoreLoaded(false)
        }

        // Reset verse bars.
        props.setIsVerseBarAbove(false)
        props.setIsVerseBarBelow(false)

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
    deviceIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedOverviewIndex,
    selectedTipsIndex
}) => ({
    deviceIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedOverviewIndex,
    selectedTipsIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsHeavyRenderReady,
        setIsScoreLoaded,
        setIsPlaying,
        setIsVerseBarAbove,
        setIsVerseBarBelow,
        accessAnnotationIndex,
        selectSongIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseManager)
