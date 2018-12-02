import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { updateToggleStore } from 'flux/toggle/action'

import AdminDispatcher from '../../../dispatchers/AdminDispatcher'
import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import CarouselDispatcher from '../../../handlers/CarouselHandler/Dispatcher'
import DotsSlideDispatcher from '../../../dispatchers/DotsSlideDispatcher'
import EarColumnDispatcher from '../../../dispatchers/EarColumnDispatcher'
import InteractivatedVerseDispatcher from '../../../dispatchers/InteractivatedVerseDispatcher'
import LyricDispatcher from '../../../handlers/LyricHandler/Dispatcher'
import OverviewDispatcher from '../../../handlers/OverviewHandler/Dispatcher'
import PlayDispatcher from '../../../dispatchers/PlayDispatcher'
import TipsDispatcher from '../../../handlers/TipsHandler/Dispatcher'
import SceneDispatcher from '../../../handlers/SceneHandler/Dispatcher'
import ScoreDispatcher from '../../../handlers/ScoreHandler/Dispatcher'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerseDispatcher'
import SongDispatcher from '../../../handlers/SongHandler/Dispatcher'
import TitleDispatcher from '../../../dispatchers/TitleDispatcher'

import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY,

    ADMIN_TOGGLE_KEY,
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    AUDIO_PREVIOUS_SONG_KEY,
    AUDIO_NEXT_SONG_KEY,
    CAROUSEL_TOGGLE_KEY,
    DOTS_SLIDE_TOGGLE_KEY,
    LYRIC_COLUMN_TOGGLE_KEY,
    LYRIC_SECTION_EXPAND_KEY,
    LYRIC_SCROLL_TOGGLE_KEY,
    OVERVIEW_TOGGLE_KEY,
    SCORE_TOGGLE_KEY,
    SCENE_REWIND_KEY,
    SCENE_FORWARD_KEY,
    TIPS_TOGGLE_KEY,
    TITLE_TOGGLE_KEY
} from 'constants/access'
import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class LetterManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.handleLetter = this.handleLetter
        this.props.parentThis.handleEscape = this.handleEscape
    }

    handleLetter = (e, keyName) => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAdmin()
                break
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAudioOption()
                break
            case AUDIO_PLAY_KEY:
                keyWasRegistered = this.dispatchPlay()
                break
            case AUDIO_PREVIOUS_SONG_KEY:
                keyWasRegistered = this.dispatchSong({ direction: -1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_NEXT_SONG_KEY:
                keyWasRegistered = this.dispatchSong({ direction: 1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case AUDIO_REWIND_KEY:
                keyWasRegistered = this.dispatchInteractivatedVerseDirection(-1)
                break
            case AUDIO_FAST_FORWARD_KEY:
                keyWasRegistered = this.dispatchInteractivatedVerseDirection(1)
                break
            case CAROUSEL_TOGGLE_KEY:
                keyWasRegistered = this.dispatchCarousel()
                break
            case DOTS_SLIDE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchDotsSlide()
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = this.dispatchEarColumn()
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_SECTION_EXPAND_KEY:
                keyWasRegistered = this.dispatchLyricExpand()
                break
            case LYRIC_SCROLL_TOGGLE_KEY:
                keyWasRegistered = this.dispatchScrollVerse(true)
                break
            case OVERVIEW_TOGGLE_KEY:
                keyWasRegistered = this.dispatchOverview()
                break
            case SCENE_REWIND_KEY:
                keyWasRegistered = this.dispatchScene(-1)
                break
            case SCENE_FORWARD_KEY:
                keyWasRegistered = this.dispatchScene(1)
                break
            case SCORE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchScore()
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchTips()
                break
            case TITLE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchTitle()
                break
            default:
                keyWasRegistered = false
                break
        }

        logger.info(keyName, 'letter key was registered:', keyWasRegistered)

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    handleEscape = () => {

        // Close score popup.
        if (this.props.isScoreShown) {
            this.dispatchScore(false)

        // Close title popup.
        } else if (this.props.isTitleShown) {
            this.dispatchTitle(false)

        // Close wiki popup.
        } else if (this.props.selectedWikiIndex) {
            this.props.updateSessionStore({ selectedWikiIndex: 0 })

        // Close tips popup.
        } else if (this.props.selectedTipsOption === SHOWN) {
            this.dispatchTips({ tipsOption: HIDDEN })

        // Close overview popup.
        } else if (this.props.selectedOverviewOption === SHOWN) {
            this.dispatchOverview({ overviewOption: HIDDEN })

        // Close dots popup.
        } else if (this.props.isDotsSlideShown) {
            this.dispatchDotsSlide(false)

        // Close annotation popup.
        } else if (this.props.selectedAnnotationIndex) {
            this.props.updateSongStore({ selectedAnnotationIndex: 0 })

        // Collapse lyric
        } else if (this.props.isLyricExpanded) {
            this.dispatchLyricExpand(false)

        // Turn access off.
        } else {
            this.props.updateToggleStore({ isAccessOn: false })
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        }
    }

    render() {
        return (
            <___>
                <AdminDispatcher {...{ parentThis: this }} />
                <AudioOptionDispatcher {...{ parentThis: this }} />
                <CarouselDispatcher {...{ parentThis: this }} />
                <DotsSlideDispatcher {...{ parentThis: this }} />
                <EarColumnDispatcher {...{ parentThis: this }} />
                <InteractivatedVerseDispatcher {...{ parentThis: this }} />
                <LyricDispatcher {...{ parentThis: this }} />
                <OverviewDispatcher {...{ parentThis: this }} />
                <PlayDispatcher {...{ parentThis: this }} />
                <TipsDispatcher {...{ parentThis: this }} />
                <SceneDispatcher {...{ parentThis: this }} />
                <ScoreDispatcher {...{ parentThis: this }} />
                <ScrollVerseDispatcher {...{ parentThis: this }} />
                <SongDispatcher {...{ parentThis: this }} />
                <TitleDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: {
        isAccessOn,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    songStore: { selectedAnnotationIndex },
    sessionStore: { selectedWikiIndex }
}) => ({
    isAccessOn,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    selectedAnnotationIndex,
    selectedOverviewOption,
    selectedTipsOption,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateSongStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LetterManager)
