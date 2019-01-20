import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSessionStore } from 'flux/session/action'
import { updateSelectedStore } from 'flux/selected/action'
import { updateToggleStore } from 'flux/toggle/action'

import AboutDispatcher from '../../../dispatchers/About'
import AdminDispatcher from '../../../dispatchers/AdminDispatcher'
import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import CarouselDispatcher from '../../../handlers/Carousel/Dispatcher'
import DotsSlideDispatcher from '../../../handlers/DotsSlide/Dispatcher'
import EarColumnDispatcher from '../../../dispatchers/EarColumnDispatcher'
import InteractivatedVerseDispatcher from '../../../dispatchers/InteractivatedVerse'
import LyricDispatcher from '../../../handlers/Lyric/Dispatcher'
import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import PlayDispatcher from '../../../dispatchers/PlayDispatcher'
import TipsDispatcher from '../../../handlers/Tips/Dispatcher'
import SceneDispatcher from '../../../dispatchers/Scene'
import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerseDispatcher'
import SongDispatcher from '../../../handlers/Song/Dispatcher'

import { populateRefs } from '../../../helpers/ref'

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
    GLOBAL_ANNOTATIONS_TOGGLE_KEY,
    LYRIC_COLUMN_TOGGLE_KEY,
    LYRIC_SECTION_EXPAND_KEY,
    LYRIC_SCROLL_TOGGLE_KEY,
    OVERVIEW_TOGGLE_KEY,
    SCORE_TOGGLE_KEY,
    SCENE_REWIND_KEY,
    SCENE_FORWARD_KEY,
    TIPS_TOGGLE_KEY,
    ABOUT_TOGGLE_KEY
} from '../../../constants/access'

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
        isAboutShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleLetter: this.handleLetter,
            handleEscape: this.handleEscape
        })
    }

    handleLetter = (e, keyName) => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case ADMIN_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAdmin()
                break
            case GLOBAL_ANNOTATIONS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchGlobalAnnotations()
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
                keyWasRegistered = this.dispatchCarouselNav()
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
                keyWasRegistered = this.dispatchSceneDirection(-1)
                break
            case SCENE_FORWARD_KEY:
                keyWasRegistered = this.dispatchSceneDirection(1)
                break
            case SCORE_TOGGLE_KEY:
                keyWasRegistered = this.dispatchScore()
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchTips()
                break
            case ABOUT_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAbout()
                break
            default:
                keyWasRegistered = false
                break
        }

        logAccess(`Key "${keyName}" was ${keyWasRegistered ? '' : 'not '}registered.`)

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
        } else if (this.props.isAboutShown) {
            this.dispatchAbout(false)

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
            this.props.updateSelectedStore({ selectedAnnotationIndex: 0 })

        // Collapse lyric
        } else if (this.props.isLyricExpanded) {
            this.dispatchLyricExpand(false)

        // Turn access off.
        } else {
            this.props.updateToggleStore({ isAccessOn: false })
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <AdminDispatcher {...{ getRefs: this._getRefs }} />
                <AudioOptionDispatcher {...{ getRefs: this._getRefs }} />
                <CarouselDispatcher {...{ getRefs: this._getRefs }} />
                <DotsSlideDispatcher {...{ getRefs: this._getRefs }} />
                <EarColumnDispatcher {...{ getRefs: this._getRefs }} />
                <InteractivatedVerseDispatcher {...{ getRefs: this._getRefs }} />
                <LyricDispatcher {...{ getRefs: this._getRefs }} />
                <OverviewDispatcher {...{ getRefs: this._getRefs }} />
                <PlayDispatcher {...{ getRefs: this._getRefs }} />
                <SceneDispatcher {...{ getRefs: this._getRefs }} />
                <ScoreDispatcher {...{ getRefs: this._getRefs }} />
                <ScrollVerseDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
                <TipsDispatcher {...{ getRefs: this._getRefs }} />
                <AboutDispatcher {...{ getRefs: this._getRefs }} />
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
        isAboutShown
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    selectedStore: { selectedAnnotationIndex },
    sessionStore: { selectedWikiIndex }
}) => ({
    isAccessOn,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isAboutShown,
    selectedAnnotationIndex,
    selectedOverviewOption,
    selectedTipsOption,
    selectedWikiIndex
})

export default connect(
    mapStateToProps,
    {
        updateSessionStore,
        updateSelectedStore,
        updateToggleStore
    }
)(LetterManager)
