// Root component that sets all app state.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { accessAnnotationIndex, accessAnnotationAnchorIndex, accessNavSongIndex } from '../redux/actions/access'
import { setIsPlaying, setUpdatedTimePlayed } from '../redux/actions/audio'
import { setDeviceIndex, setWindowHeight, setWindowWidth, setStageCoordinates } from '../redux/actions/device'
import { setIsScoreLoaded } from '../redux/actions/player'
import { setShowOneOfTwoLyricColumns } from '../redux/actions/responsive'
import { setAppMounted, setIsHeavyRenderReady, setRenderReadySongIndex, setRenderReadyAnnotationIndex, setRenderReadyVerseIndex, setInteractivatedVerseIndex, setCurrentSceneIndex, setIsVerseBarAbove, setIsVerseBarBelow, setSelectedVerseElement, setShownBookColumnIndex } from '../redux/actions/session'
import { setSliderVerseElement } from '../redux/actions/slider'
import { selectAccessIndex, selectAdminIndex, selectSongIndex, selectTimePlayed, selectVerseIndex } from '../redux/actions/storage'

import EventManager from '../handlers/EventManager'
import AccessManager from './AccessManager'
import AnnotationManager from './AnnotationManager'
import AudioManager from './AudioManager'
import CarouselManager from './CarouselManager'
import DebugManager from './DebugManager'
import DotsManager from './DotsManager'
import LyricManager from './LyricManager'
import NavManager from './NavManager'
import OverviewManager from './OverviewManager'
import RenderManager from './RenderManager'
import ScoreManager from './ScoreManager'
import SceneManager from './SceneManager'
import SliderManager from './SliderManager'
import SongManager from './SongManager'
import TimeManager from './TimeManager'
import TipsManager from './TipsManager'
import TitleManager from './TitleManager'
import VerseManager from './VerseManager'
import WikiManager from './WikiManager'
import WindowManager from './WindowManager'

import { VERSE_SCROLL } from '../constants/dom'
import { CONTINUE,
         PAUSE_AT_END,
         AUDIO_OPTIONS,
         DISABLED,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'

import { getSongsAndLoguesCount, getSongIsLogue, getBookColumnIndex, getSongVerseTimes, getVerseIndexForTime, getSceneIndexForVerseIndex } from '../helpers/dataHelper'
import { scrollElementIntoView } from '../helpers/domHelper'
import { getAnnotationIndexForDirection, getAnnotationAnchorIndexForDirection, getVerseBarStatus } from '../helpers/logicHelper'
import { getShowOneOfTwoLyricColumns } from '../helpers/responsiveHelper'

/*************
 * CONTAINER *
 *************/

class App extends Component {

    static propTypes = {
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        const { selectedSongIndex,
                selectedAnnotationIndex,
                selectedVerseIndex } = props

        // Set initial access state.
        props.accessAnnotationAnchorIndex(
            getAnnotationAnchorIndexForDirection({
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys: props.selectedDotKeys,
                initialAnnotationAnchorIndex: 1
            })
        )
        props.accessNavSongIndex(selectedSongIndex)

        // Set initial audio state.
        // Start at persisted time.
        props.setUpdatedTimePlayed(props.selectedTimePlayed)

        // Set initial session state.
        props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
            selectedSongIndex,
            selectedVerseIndex
        ))

        props.setShownBookColumnIndex(getBookColumnIndex(selectedSongIndex))

        // Bind this to event handlers.
        this._bindEventHandlers()

        this.state = {
            songChangeTimeoutId: null
        }
    }

    UNSAFE_componentWillMount() {

        // Upon page load, should render immediately.
        this._handleRenderReady()
    }

    componentDidMount() {
        this.props.setAppMounted(true)

        // As long as annotation is not selected, show overview and/or tips.
        if (!this.props.selectedAnnotationIndex) {
            this.selectOverview({
                justShowIfHidden: true
            })

            this.selectTips({
                justShowIfHidden: true
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._songIndexDidChange()
        }
    }

    /**********
     * ACCESS *
     **********/

    toggleAccess(payload) {
        return this.accessManager.toggleAccess(payload)
    }

    accessAnnotation(payload) {
        return this.accessManager.accessAnnotation(payload)
    }

    accessAnnotationAnchor(payload) {
        return this.accessManager.accessAnnotationAnchor(payload)
    }

    accessDot(payload) {
        return this.accessManager.accessDot(payload)
    }

    accessNavSong(payload) {
        return this.accessManager.accessNavSong(payload)
    }

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation(payload) {
        return this.annotationManager.selectAnnotation(payload)
    }

    deselectAnnotation(payload) {
        return this.annotationManager.deselectAnnotation(payload)
    }

    /*********
     * AUDIO *
     *********/

    togglePlay(payload) {
        return this.audioManager.togglePlay(payload)
    }

    resetUpdatedTimePlayed() {
        return this.audioManager.resetUpdatedTimePlayed()
    }

    selectAudioOption(payload) {
        return this.audioManager.selectAudioOption(payload)
    }

    /************
     * CAROUSEL *
     ************/

    selectCarouselNav(payload) {
        return this.carouselManager.selectCarouselNav(payload)
    }

    /*********
     * DEBUG *
     *********/

    toggleAdmin(payload) {
        return this.debugManager.toggleAdmin(payload)
    }

    /********
     * DOTS *
     ********/

    toggleDot(payload) {
        return this.dotsManager.toggleDot(payload)
    }

    selectDotsExpand(payload) {
        return this.dotsManager.selectDotsExpand(payload)
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand(payload) {
        return this.lyricManager.selectLyricExpand(payload)
    }

    selectLyricColumn(payload) {
        return this.lyricManager.selectLyricColumn(payload)
    }

    selectManualScroll(payload) {
        return this.lyricManager.selectManualScroll(payload)
    }

    /*******
     * NAV *
     *******/

    selectBookColumn(payload) {
        return this.navManager.selectBookColumn(payload)
    }

    /************
     * OVERVIEW *
     ************/

    selectOverview(payload) {
        return this.overviewManager.selectOverview(payload)
    }

    /**********
     * RENDER *
     **********/

    _handleRenderReady(
        selectedSongIndex = this.props.selectedSongIndex,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex,
        selectedVerseIndex = this.props.selectedVerseIndex
    ) {

        this.props.setIsHeavyRenderReady(
            true
        )

        this.props.setRenderReadySongIndex(
            selectedSongIndex
        )

        this.props.setRenderReadyAnnotationIndex(
            selectedAnnotationIndex
        )

        this.props.setRenderReadyVerseIndex(
            selectedVerseIndex
        )

        if (this.props.appMounted) {

            /**
             * Determine doublespeaker columns only when lyrics are ready to
             * render.
             */
            this.props.setShowOneOfTwoLyricColumns(
                getShowOneOfTwoLyricColumns(
                    selectedSongIndex,
                    this.props.deviceIndex
                )
            )
        }

        this.props.setCurrentSceneIndex(
            getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        )
    }

    /*********
     * SCENE *
     *********/

    selectScene(payload) {
        return this.sceneManager.selectScene(payload)
    }

    /*********
     * SCORE *
     *********/

    selectScore(payload) {
        return this.scoreManager.selectScore(payload)
    }

    /**********
     * SLIDER *
     **********/

    touchSliderBegin(payload) {
        return this.sliderManager.touchSliderBegin(payload)
    }

    touchBodyMove(payload) {
        return this.sliderManager.touchBodyMove(payload)
    }

    touchBodyEnd() {
        return this.sliderManager.touchBodyEnd()
    }

    /********
     * SONG *
     ********/

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

        // If not selected from portal, show overview if hidden.
        if (!selectedAnnotationIndex) {
            this.selectOverview({
                justShowIfHidden: true
            })

            this.selectTips({
                justShowIfHidden: true
            })

            /**
             * If overview or tips are being shown, collapse lyric column and
             * hide dots section.
             */
            if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] !== DISABLED ||
                TIPS_OPTIONS[this.props.selectedTipsIndex] !== DISABLED) {
                this.selectDotsExpand(false)
                this.selectLyricExpand(false)
            }
        }

        this.selectAnnotation({
            selectedAnnotationIndex,
            selectedSongIndex,

            // If from portal, access destination portal index.
            initialAnnotationAnchorIndex: destinationPortalIndex
        })

        this.selectVerse({
            selectedVerseIndex,
            selectedSongIndex
        })

        // TODO: This prevents app from breaking when wiki is selected and song is changed. But this might be handled more strategically.
        this.selectWiki({ selectedWikiIndex })

        this.interactivateVerse()

        if (isLogue) {
            this.props.setIsPlaying(false)
            this.selectScore(false)
        }

        // Nav will update book column right away.
        this.selectBookColumn({
            resetToDefault: true,
            selectedSongIndex
        })

        /**
         * Get new accessed annotation index by starting from first and going
         * forward. If not called from portal, it should always be the title
         * annotation unless deselected by dots.
         */
        this.props.accessAnnotationIndex(
            selectedAnnotationIndex ||
            getAnnotationIndexForDirection({
                deviceIndex: this.props.deviceIndex,
                currentAnnotationIndex: 1,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: props.selectedLyricColumnIndex
            })
        )

        this.accessNavSong(selectedSongIndex)
        props.selectSongIndex(selectedSongIndex)

        // If not selecting a new song, no need to render again.
        if (selectedSongIndex === this.props.selectedSongIndex) {
            this._handleRenderReady(
                selectedSongIndex,
                selectedAnnotationIndex
            )

        } else {
            props.setIsHeavyRenderReady(false)
            props.setIsScoreLoaded(false)
        }

        // Reset verse bars.
        this.props.setIsVerseBarAbove(false)
        this.props.setIsVerseBarBelow(false)

        return true
    }

    _songIndexDidChange() {

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Render is synchronous, so wait a bit after selecting new song before
         * rendering the most performance intensive components.
         */
        const songChangeTimeoutId = setTimeout(
            this._handleRenderReady, 200
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    /********
     * TIME *
     ********/

    selectTime(selectedTimePlayed = 0, isPlayerAdvancing) {
        const selectedVerseIndex = getVerseIndexForTime(this.props.selectedSongIndex, selectedTimePlayed)

        if (selectedVerseIndex !== null) {
            this.selectTimeAndVerse({
                selectedTimePlayed,
                selectedVerseIndex,

                // When time is being selected, always render verse immediately.
                renderVerseImmediately: true,
                isPlayerAdvancing
            })
        }
    }

    selectTimeAndVerse({
        selectedTimePlayed,
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex,
        renderVerseImmediately,
        isPlayerAdvancing
    }) {

        const { props } = this

        /** This is the only place where app will change the router path based
         * on a new song or verse index.
         */
        props.updatePath({
            props,
            selectedSongIndex,
            selectedVerseIndex
        })

        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        props.selectVerseIndex(selectedVerseIndex)
        props.selectTimePlayed(selectedTimePlayed)

        /**
         * If selecting or changing verse in same song, change index to be
         * rendered right away.
         */
        if (selectedSongIndex === props.selectedSongIndex) {
            props.setRenderReadyVerseIndex(selectedVerseIndex)
        }

        /**
         * If called by player, and autoScroll is on, then scroll to selected
         * verse if needed.
         */
        if (
            !this.props.isManualScroll &&
            selectedVerseIndex !== props.selectedVerseIndex
        ) {
            scrollElementIntoView({
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex,
                deviceIndex: this.props.deviceIndex,
                windowWidth: this.props.windowWidth,
                isLyricExpanded: this.props.isLyricExpanded
            })
        }

        /**
         * If time was not changed by the audio element advancing, tell player
         * to update audio element's time.
         */
        if (!isPlayerAdvancing) {
            props.setUpdatedTimePlayed(selectedTimePlayed)
        }

        // Render verse and scene immediately.
        if (renderVerseImmediately) {

            props.setCurrentSceneIndex(getSceneIndexForVerseIndex(
                props.selectedSongIndex,
                selectedVerseIndex
            ))
        }
    }

    /********
     * TIPS *
     ********/

    selectTips(payload) {
        return this.tipsManager.selectTips(payload)
    }

    /*********
     * TITLE *
     *********/

    selectTitle(payload) {
        return this.titleManager.selectTitle(payload)
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse(interactivatedVerseIndex = -1) {
        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
    }

    interactivateVerseDirection(direction) {
        const { selectedSongIndex } = this.props,
            songVerseTimes = getSongVerseTimes(selectedSongIndex),
            songVerseTimesCount = songVerseTimes.length

        let { interactivatedVerseIndex } = this.props

        // Ensure modulo.
        if (direction === -1) {
            direction = songVerseTimesCount - 1
        }

        // We are turning on interactivation, so start from selected verse.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % songVerseTimesCount

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % songVerseTimesCount
        }

        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
        return interactivatedVerseIndex
    }

    setVerseElement(verseElement) {
        this.props.setSelectedVerseElement(verseElement)
    }

    selectOrSlideVerseElement({
        verseElement,
        isTouchBodyEnd,
        isInitialMount
    }) {

        const doSetSlider = this.props.isSliderMoving && !isTouchBodyEnd,

            propsVerseElement =
                doSetSlider ?
                this.props.sliderVerseElement : this.props.selectedVerseElement

        if (verseElement !== propsVerseElement) {

            // Determine verse bars only if this is not the initial mount.
            if (!isInitialMount) {
                this.determineVerseBars(verseElement)
            }

            if (doSetSlider) {
                /**
                 * Slider verse element overrides selected verse element, as
                 * long as the slider is touched.
                 */
                this.props.setSliderVerseElement(verseElement)

            } else {
                // App has a reference to the selected verse.
                this.props.setSelectedVerseElement(verseElement)
            }

            if (isTouchBodyEnd) {
                this.props.setSliderVerseElement(null)
            }
        }
    }

    selectVerse({
        selectedVerseIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        const songVerseTimes = getSongVerseTimes(selectedSongIndex),
            selectedTimePlayed = songVerseTimes[selectedVerseIndex],

            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            renderVerseImmediately =
                selectedSongIndex === this.props.selectedSongIndex

        this.selectTimeAndVerse({
            selectedTimePlayed,
            selectedSongIndex,
            selectedVerseIndex,
            renderVerseImmediately
        })
    }

    /*************
     * VERSE BAR *
     *************/

    determineVerseBars(verseElement = this.props.selectedVerseElement) {

        // Prevent verse bar from showing upon initial load.
        if (!this.props.appMounted || !verseElement) {
            return false
        }

        const { isVerseBarAbove,
                isVerseBarBelow } = getVerseBarStatus({
                    deviceIndex: this.props.deviceIndex,
                    windowWidth: this.props.windowWidth,
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHeightlessLyricColumn:
                        this.props.isHeightlessLyricColumn,
                    verseElement
                })

        this.props.setIsVerseBarAbove(isVerseBarAbove)
        this.props.setIsVerseBarBelow(isVerseBarBelow)
    }

    resetVerseBars() {
        this.props.setIsVerseBarAbove(false)
        this.props.setIsVerseBarBelow(false)
    }

    /********
     * WIKI *
     ********/

    selectWiki(payload) {
        return this.wikiManager.selectWiki(payload)
    }

    /***********
     * HELPERS *
     ***********/

    _bindEventHandlers() {
        this._handleRenderReady = this._handleRenderReady.bind(this)
        this.accessAnnotation = this.accessAnnotation.bind(this)
        this.accessDot = this.accessDot.bind(this)
        this.accessAnnotationAnchor = this.accessAnnotationAnchor.bind(this)
        this.accessNavSong = this.accessNavSong.bind(this)
        this.toggleAccess = this.toggleAccess.bind(this)
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectScene = this.selectScene.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.deselectAnnotation = this.deselectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.toggleDot = this.toggleDot.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectCarouselNav = this.selectCarouselNav.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.interactivateVerseDirection = this.interactivateVerseDirection.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.advanceToNextSong = this.advanceToNextSong.bind(this)
        this.setVerseElement = this.setVerseElement.bind(this)
        this.selectOrSlideVerseElement = this.selectOrSlideVerseElement.bind(this)
        this.determineVerseBars = this.determineVerseBars.bind(this)
        this.resetVerseBars = this.resetVerseBars.bind(this)
        this.selectManualScroll = this.selectManualScroll.bind(this)
        this.touchSliderBegin = this.touchSliderBegin.bind(this)
        this.touchBodyMove = this.touchBodyMove.bind(this)
        this.touchBodyEnd = this.touchBodyEnd.bind(this)
    }

    render() {
        const { updatePath } = this.props

        return (
            <Fragment>
                <EventManager
                    // Event manager props.
                    accessAnnotation={this.accessAnnotation}
                    accessAnnotationAnchor={this.accessAnnotationAnchor}
                    accessDot={this.accessDot}
                    accessNavSong={this.accessNavSong}
                    touchSliderBegin={this.touchSliderBegin}
                    touchBodyMove={this.touchBodyMove}
                    touchBodyEnd={this.touchBodyEnd}
                    selectAnnotation={this.selectAnnotation}
                    selectAudioOption={this.selectAudioOption}
                    selectBookColumn={this.selectBookColumn}
                    toggleDot={this.toggleDot}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricColumn={this.selectLyricColumn}
                    selectLyricExpand={this.selectLyricExpand}
                    determineVerseBars={this.determineVerseBars}
                    resetVerseBars={this.resetVerseBars}
                    selectManualScroll={this.selectManualScroll}
                    selectOverview={this.selectOverview}
                    selectCarouselNav={this.selectCarouselNav}
                    selectScore={this.selectScore}
                    selectScene={this.selectScene}
                    selectSong={this.selectSong}
                    selectTime={this.selectTime}
                    selectTitle={this.selectTitle}
                    selectTips={this.selectTips}
                    selectVerse={this.selectVerse}
                    interactivateVerse={this.interactivateVerse}
                    interactivateVerseDirection={this.interactivateVerseDirection}
                    selectWiki={this.selectWiki}
                    toggleAccess={this.toggleAccess}
                    toggleAdmin={this.toggleAdmin}
                    togglePlay={this.togglePlay}
                    setVerseElement={this.setVerseElement}
                    selectOrSlideVerseElement={this.selectOrSlideVerseElement}
                    advanceToNextSong={this.advanceToNextSong}
                    resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}
                />
                <AccessManager
                    getRef={node => (this.accessManager = node)}
                />
                <AnnotationManager
                    getRef={node => (this.annotationManager = node)}
                    updatePath={updatePath}
                />
                <AudioManager
                    getRef={node => (this.audioManager = node)}
                    selectSong={this.selectSong}
                />
                <CarouselManager
                    getRef={node => (this.carouselManager = node)}
                    accessNavSong={this.accessNavSong}
                    selectBookColumn={this.selectBookColumn}
                />
                <DebugManager
                    getRef={node => (this.debugManager = node)}
                />
                <DotsManager
                    getRef={node => (this.dotsManager = node)}
                    accessDot={this.accessDot}
                />
                <LyricManager
                    getRef={node => (this.lyricManager = node)}
                    deselectAnnotation={this.deselectAnnotation}
                />
                <NavManager
                    getRef={node => (this.navManager = node)}
                />
                <OverviewManager
                    getRef={node => (this.overviewManager = node)}
                />
                <RenderManager
                    getRef={node => (this.renderManager = node)}
                />
                <ScoreManager
                    getRef={node => (this.scoreManager = node)}
                />
                <SceneManager
                    getRef={node => (this.sceneManager = node)}
                    selectVerse={this.selectVerse}
                />
                <SliderManager
                    getRef={node => (this.sliderManager = node)}
                    selectOrSlideVerseElement={this.selectOrSlideVerseElement}
                    selectTime={this.selectTime}
                    resetVerseBars={this.resetVerseBars}
                />
                <SongManager
                    getRef={node => (this.songManager = node)}
                />
                <TimeManager
                    getRef={node => (this.timeManager = node)}
                />
                <TipsManager
                    getRef={node => (this.tipsManager = node)}
                />
                <TitleManager
                    getRef={node => (this.titleManager = node)}
                />
                <VerseManager
                    getRef={node => (this.verseManager = node)}
                />
                <WikiManager
                    getRef={node => (this.wikiManager = node)}
                />
                <WindowManager
                    deselectAnnotation={this.deselectAnnotation}
                    selectLyricExpand={this.selectLyricExpand}
                    selectScore={this.selectScore}
                />
            </Fragment>
        )
    }
}

/*********
 * STORE *
 *********/

const mapStateToProps = (state) => (state)

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAccessIndex, selectAdminIndex, selectSongIndex, selectTimePlayed, selectVerseIndex, accessAnnotationIndex, accessAnnotationAnchorIndex, accessNavSongIndex, setShowOneOfTwoLyricColumns, setAppMounted, setIsScoreLoaded, setIsHeavyRenderReady, setRenderReadySongIndex, setRenderReadyAnnotationIndex, setRenderReadyVerseIndex, setInteractivatedVerseIndex, setCurrentSceneIndex, setIsVerseBarAbove, setIsVerseBarBelow, setSelectedVerseElement, setShownBookColumnIndex, setDeviceIndex, setWindowHeight, setWindowWidth, setStageCoordinates, setIsPlaying, setUpdatedTimePlayed, setSliderVerseElement
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(App)
