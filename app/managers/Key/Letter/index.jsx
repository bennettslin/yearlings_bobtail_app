import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    resetActivated,
    resetWiki
} from 'flux/session/action'
import { updateSelectedStore } from 'flux/selected/action'
import { updateAccessStore } from 'flux/access/action'

import AboutDispatcher from '../../../dispatchers/About'
import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import CarouselNavDispatcher from '../../../handlers/CarouselNav/Dispatcher'
import DotsSlideDispatcher from '../../../handlers/DotsSlide/Dispatcher'
import EarColumnDispatcher from '../../../dispatchers/EarColumnDispatcher'
import ActivatedSceneDispatcher from '../../../dispatchers/Activated/Scene'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import LyricDispatcher from '../../../handlers/Lyric/Dispatcher'
import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import PlayDispatcher from '../../../dispatchers/PlayDispatcher'
import TipsDispatcher from '../../../handlers/Tips/Dispatcher'
import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerseDispatcher'
import SongDispatcher from '../../../handlers/Song/Dispatcher'

import { populateRefs } from '../../../helpers/ref'

import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY,
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    PREVIOUS_SONG_KEY,
    NEXT_SONG_KEY,
    CAROUSEL_TOGGLE_KEY,
    DOTS_SLIDE_TOGGLE_KEY,
    LYRIC_COLUMN_TOGGLE_KEY,
    LYRIC_SECTION_EXPAND_KEY,
    LYRIC_SCROLL_TOGGLE_KEY,
    OVERVIEW_TOGGLE_KEY,
    SCORE_TOGGLE_KEY,
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY,
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
        isNavShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        resetActivated: PropTypes.func.isRequired,
        resetWiki: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleLetter: this.handleLetter,
            handleEscape: this.handleEscape
        })
    }

    handleLetter = (keyName) => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = this.dispatchAudioOption()
                break
            case AUDIO_PLAY_KEY:
                keyWasRegistered = this.dispatchPlay()
                break
            case PREVIOUS_SONG_KEY:
                keyWasRegistered = this.dispatchSong({ direction: -1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case NEXT_SONG_KEY:
                keyWasRegistered = this.dispatchSong({ direction: 1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case PREVIOUS_VERSE_KEY:
                keyWasRegistered = this.activateVerseDirection(-1)
                break
            case NEXT_VERSE_KEY:
                keyWasRegistered = this.activateVerseDirection(1)
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
            case PREVIOUS_SCENE_KEY:
                keyWasRegistered = this.activateSceneDirection(-1)
                break
            case NEXT_SCENE_KEY:
                keyWasRegistered = this.activateSceneDirection(1)
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

        logAccess({
            log: `Key "${keyName}" was ${keyWasRegistered ? '' : 'NOT '}registered.`,
            ...keyWasRegistered && { label: keyName }
        })

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
            this.props.resetWiki()

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

        // Collapse lyric.
        } else if (this.props.isLyricExpanded) {
            this.dispatchLyricExpand(false)

        // Hide nav.
        } else if (this.props.isNavShown) {
            this.dispatchHideNav()

        // Turn access off.
        } else {
            this.props.updateAccessStore({ isAccessOn: false })
            this.props.resetActivated()
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
                <AudioOptionDispatcher {...{ getRefs: this._getRefs }} />
                <CarouselNavDispatcher {...{ getRefs: this._getRefs }} />
                <DotsSlideDispatcher {...{ getRefs: this._getRefs }} />
                <EarColumnDispatcher {...{ getRefs: this._getRefs }} />
                <ActivatedSceneDispatcher {...{ getRefs: this._getRefs }} />
                <ActivatedVerseDispatcher {...{ getRefs: this._getRefs }} />
                <LyricDispatcher {...{ getRefs: this._getRefs }} />
                <OverviewDispatcher {...{ getRefs: this._getRefs }} />
                <PlayDispatcher {...{ getRefs: this._getRefs }} />
                <ScoreDispatcher {...{ getRefs: this._getRefs }} />
                <ScrollVerseDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
                <TipsDispatcher {...{ getRefs: this._getRefs }} />
                <AboutDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

const mapStateToProps = ({
    accessStore: { isAccessOn },
    toggleStore: {
        isDotsSlideShown,
        isLyricExpanded,
        isNavShown,
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
    isNavShown,
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
        updateSelectedStore,
        updateAccessStore,
        resetActivated,
        resetWiki
    }
)(LetterManager)
