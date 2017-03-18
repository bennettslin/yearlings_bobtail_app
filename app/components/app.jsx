import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectAdminIndex,
         selectSongIndex,
         selectAnnotationIndex,
         selectVerseIndex,
         selectTimePlayed,
         selectDotKey,
         selectOverviewIndex,
         selectAudioOptionIndex,
         selectLyricColumnIndex,
         selectTipsIndex,
         selectWikiIndex,
         selectScoreIndex,
         selectNavIndex,
         selectDotsIndex,
         accessOn } from 'redux/actions'
import EventManager from './event-manager'
import { NAV_SECTION,
         AUDIO_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         ANNOTATION_SECTION,
         WIKI_SECTION,

         SHOWN,
         HIDDEN,
         DISABLED,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS,
         AUDIO_OPTIONS,

         CONTINUE,
         PAUSE_AT_END,

         LYRIC_VERSE_ELEMENT,
         LYRIC_ANNOTATION_ELEMENT,
         LYRIC_COLUMN_KEYS,

         REFERENCE,

         ESCAPE,
         SPACE } from 'helpers/constants'
import { getSong, getIsLogue, getAnnotation, getAnnotationIndexForDirection, getPopupAnchorIndexForDirection, getAnnotationIndexForVerseIndex, getVerseIndexForDirection, getVerseIndexForAnnotationIndex, getSongTimes, getVerseIndexForTime, getLyricsStartAtZero, getSelectedBookColumnIndex, getSliderRatioForScreenX, getVerseBarStatus } from 'helpers/album-view-helper'
import { resizeWindow, getShowSingleLyricColumn, getIsLyricExpandable, getShowSingleBookColumn } from 'helpers/responsive-helper'
import AccessHelper from 'helpers/access-helper'
import { allDotsDeselected } from 'helpers/dot-helper'
import LogHelper from 'helpers/log-helper'
import TempHelper from 'helpers/temp-app-helper'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    selectedAdminIndex,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTimePlayed,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedAudioOptionIndex,
    selectedLyricColumnIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    selectedScoreIndex,
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn
}) => ({
    // Pass Redux state into component props.
    selectedAdminIndex,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTimePlayed,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedAudioOptionIndex,
    selectedLyricColumnIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    selectedScoreIndex,
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn
})

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
        selectAdminIndex,
        selectSongIndex,
        selectAnnotationIndex,
        selectVerseIndex,
        selectTimePlayed,
        selectDotKey,
        selectOverviewIndex,
        selectAudioOptionIndex,
        selectLyricColumnIndex,
        selectTipsIndex,
        selectWikiIndex,
        selectScoreIndex,
        selectNavIndex,
        selectDotsIndex,
        accessOn
    }, dispatch)
)

/*************
 * CONTAINER *
 *************/

class App extends Component {

    constructor(props) {
        super(props)

        // Bind this to event handlers.
        this._bindEventHandlers()

        this.state = {
            isPlaying: false,

            popupAnnotationIndex: props.selectedAnnotationIndex,
            popupWikiIndex: props.selectedWikiIndex,

            accessedSongIndex: props.selectedSongIndex,
            accessedVerseIndex: props.selectedVerseIndex,
            // If no annotation selected, default to 1.
            accessedAnnotationIndex: getAnnotationIndexForDirection(props, props.selectedAnnotationIndex || 1),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(props, 1),

            /**
             * If there is an annotation popup open, accessed element is
             * annotation.
             */
            accessedLyricElement: props.selectedAnnotationIndex ?
                LYRIC_ANNOTATION_ELEMENT : LYRIC_VERSE_ELEMENT,
            accessedDotIndex: 0,
            selectedBookColumnIndex: getSelectedBookColumnIndex(props),
            isLyricExpanded: false,

            lyricSectionTop: 0,
            showLyricButtons: true,

            // Start at persisted time.
            updatedTimePlayed: props.selectedTimePlayed,

            isSelectedVerseAbove: false,
            isSelectedVerseBelow: false,
            sliderVerseIndex: -1,
            selectedVerseElement: null,
            sliderVerseElement: null,
            sliderMousedOrTouched: false,

            interactivatedVerseIndex: -1,

            // Prevent verse bar from showing upon load.
            appMounted: false
        }
    }

    componentWillMount() {
        this._assignLogFunctions()

        this.windowResize()
        window.onresize = this.windowResize
    }

    componentDidMount() {
        this.setState({
            appMounted: true
        })
    }

    /***********
     * HELPERS *
     ***********/

    windowResize(e) {
        const resizedWindowObject = resizeWindow(e ? e.target : undefined)

        this.setState(resizedWindowObject)
    }

    _bindEventHandlers() {
        this.toggleAccess = this.toggleAccess.bind(this)
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.toggleDotKey = this.toggleDotKey.bind(this)
        this.selectFromPortal = this.selectFromPortal.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.selectWikiOrPortal = this.selectWikiOrPortal.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectNavExpand = this.selectNavExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.advanceToNextSong = this.advanceToNextSong.bind(this)
        this.selectVerseElement = this.selectVerseElement.bind(this)
        this.slideVerseElement = this.slideVerseElement.bind(this)
        this.scrollLyricSection = this.scrollLyricSection.bind(this)
        this.clickBody = this.clickBody.bind(this)
        this.clickPopupContainer = this.clickPopupContainer.bind(this)
        this.windowResize = this.windowResize.bind(this)
        this.touchSliderBegin = this.touchSliderBegin.bind(this)
        this.touchBodyMove = this.touchBodyMove.bind(this)
        this.touchBodyEnd = this.touchBodyEnd.bind(this)
    }

    _assignLogFunctions() {
        window.d = LogHelper.logDrawings.bind(LogHelper, this)
        window.t = LogHelper.logStorage.bind(LogHelper)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
        window.n = LogHelper.logAnnotationsDotKeys.bind(LogHelper, this)
        window.c = LogHelper.logAccessedAnnotation.bind(LogHelper, this)
        window.p = LogHelper.logPortalLinks.bind(LogHelper, this.props)
    }

    _stopPropagationOfClick(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()
            // this._handleAccessOn(0)

            // Turn access off.
            this.toggleAccess(false)
        }
    }

    _closePopupIfOpen({
        accessOff,
        exemptSection,
        closedFromSpace,
        overrideClosePopupsDefaultWithSection,
        overrideClosePopupsDefaultWithOverviewOption,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex
    }) {
        const { selectedWikiIndex,
                selectedScoreIndex,
                selectedDotsIndex,
                selectedOverviewIndex } = this.props

        let popupWasOpen = false,
            collapseLyric = true


        this.selectNavExpand(undefined, 0)
        this.selectDotsExpand(undefined, 0)

        if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            this.selectOverview(undefined, undefined, HIDDEN)
        }

        // Hide dots.
        if (exemptSection !== DOTS_SECTION && selectedDotsIndex === 1) {
            this.selectDotsExpand({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection }, 0)

            /**
             * If dots popup was closed from space bar, leave lyric column
             * expanded.
             */
            if (closedFromSpace) {
                collapseLyric = false
            }

            popupWasOpen = true
        }

        if (selectedScoreIndex) {
            this.selectScore(undefined, 0)
        }

        // Hide wiki or annotation.
        if (selectedAnnotationIndex) {
            if (selectedWikiIndex) {
                if (exemptSection !== WIKI_SECTION) {
                    this.selectWiki({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection })
                }
            } else if (selectedScoreIndex) {
                this.selectScore()
            } else {
                if (exemptSection !== ANNOTATION_SECTION && exemptSection !== WIKI_SECTION) {
                    this.selectAnnotation({ bypassClosingPopups: true, overrideClosePopupsDefaultWithSection })
                    /**
                    * If closing annotation, set lyric element to annotation, and
                    * set accessed annotation index to closed annotation.
                    */

                    this.setState({
                        accessedLyricElement: LYRIC_ANNOTATION_ELEMENT,
                        accessedAnnotationIndex: selectedAnnotationIndex,
                        accessedVerseIndex: getVerseIndexForAnnotationIndex({
                            props: this.props,
                            index: selectedAnnotationIndex
                        })
                    })
                }
            }

            /**
             * If annotation popup was closed from space bar, leave lyric
             * column expanded.
             */
            if (closedFromSpace) {
                collapseLyric = false
            }

            popupWasOpen = true
        }

        /**
         * If audio section is accessed, it's fine to keep lyric expanded. Also,
         * annotation and dots popups will no longer collapse the lyric column
         * if expanded.
         */
        if (collapseLyric && this.state.isLyricExpanded && exemptSection !== AUDIO_SECTION && exemptSection !== LYRICS_SECTION && exemptSection !== ANNOTATION_SECTION && exemptSection !== DOTS_SECTION) {
            this.selectLyricExpand(undefined, false)
            popupWasOpen = true
        }

        // if (accessOff) {
        //     this._handleAccessOn(0)
        // }

        return popupWasOpen
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    togglePlay(isPlaying = !this.state.isPlaying) {

        // Select first song if play button in logue is toggled on.
        if (getIsLogue(this.props) && isPlaying) {
            this.selectSong(undefined, 1)
        }

        this.setState({
            isPlaying
        })
    }

    selectSong(e, selectedSongIndex = 0, direction, fromPortal) {
        this._stopPropagationOfClick(e)

        // Called from audio section's previous or next buttons.
        if (direction) {
            selectedSongIndex = this.props.selectedSongIndex + direction

            if (selectedSongIndex < 0 || selectedSongIndex > this.props.songs.length - 1) {
                return
            }
        }

        let overrideClosePopupsDefaultWithOverviewOption

        // Show overview if it's not disabled, and if not selected from portal.
        if (!fromPortal && OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] !== DISABLED) {
            overrideClosePopupsDefaultWithOverviewOption = SHOWN
            this.selectOverview(undefined, undefined, SHOWN)
        }

        const isLogue = getIsLogue({ selectedSongIndex,
                                     songs: this.props.songs }),
            newState = {
                accessedSongIndex: selectedSongIndex,

                // App does not know new index, so pass it directly.
                accessedAnnotationIndex: getAnnotationIndexForDirection({
                    songs: this.props.songs,
                    selectedDotKeys: this.props.selectedDotKeys,
                    selectedSongIndex
                }, 1)
            }

        if (isLogue) {
            newState.isPlaying = false
        }

        /**
         * Reset the stored annotation, time, and overview, unless selected
         * from portal.
         */
        if (e) {
            const selectedVerseIndex = getLyricsStartAtZero(this.props, selectedSongIndex) ? 1 : 0

            this.selectVerse(undefined, selectedVerseIndex)
            this.selectAnnotation()

            // Scroll to top of lyrics.
            // this.scrollElementIntoView('lyrics-scroll', 'home')

        }

        this.selectBookColumn(e, true, selectedSongIndex)
        this.interactivateVerse()

        this.props.selectSongIndex(selectedSongIndex)
        this.setState(newState)
    }

    advanceToNextSong() {
        /**
         * When selecting next song through audio player, reset annotation and
         * verse, and scroll element into view, but do not access nav section.
         */
        const { selectedSongIndex } = this.props,
            selectedAudioOption = AUDIO_OPTIONS[this.props.selectedAudioOptionIndex],
            willAdvance = selectedAudioOption === CONTINUE

        // If option is to pause at end, stop play as well.
        if (selectedAudioOption === PAUSE_AT_END) {
            this.togglePlay()
        }

        // FIXME: This currently doesn't work, because audio player stops playing when currentTime is changed.

        /**
         * If option is to continue, advance to next song. Otherwise, stay
         * on same song, and start at beginning. (True evaluates to 1, false 0.)
         */
        this.selectSong({

            // FIXME: This should be set based on whether an annotation, score, or wiki popup is currently shown.
            preservePreviousPopupIndex: true
        }, selectedSongIndex + willAdvance)
    }

    selectLyricExpand(e, isLyricExpanded = !this.state.isLyricExpanded) {
        // Don't bother if lyric is not expandable, or if it's a logue.
        if (getIsLyricExpandable(this.state) && !getIsLogue(this.props)) {

            this.setState({
                isLyricExpanded,

                // Start with lyric buttons shown when lyric column is expanded.
                showLyricButtons: true
            })
        }
    }

    selectNavExpand(e, selectedNavIndex) {
        this._stopPropagationOfClick(e)

        /**
         * User cannot change nav option if lyric is expanded in an
         * expanded width.
         */
        if (e && getIsLyricExpandable(this.state) && this.state.isLyricExpanded) {
            return
        }

        if (typeof selectedNavIndex === 'undefined') {
            selectedNavIndex = (this.props.selectedNavIndex + 1) % 2
        }

        // Reset book column upon nav expand.
        if (selectedNavIndex === 0) {
            this.selectBookColumn(undefined, true)
        }

        this.props.selectNavIndex(selectedNavIndex)
    }

    selectDotsExpand(e, selectedDotsIndex) {
        this._stopPropagationOfClick(e)

        if (typeof selectedDotsIndex === 'undefined') {
            selectedDotsIndex = (this.props.selectedDotsIndex + 1) % 2
        }

        // Dots section cannot be expanded in logue.
        if (getIsLogue(this.props) && selectedDotsIndex) {
            return
        }

        this.props.selectDotsIndex(selectedDotsIndex)

        if (e) {
            if (selectedDotsIndex) {
                // Hide overview and collapse lyrics if shown.
                if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === SHOWN) {
                    this.selectOverview(undefined, undefined, HIDDEN)
                }

                this.selectAnnotation()

            }
        }
    }

    selectOverview(e, selectedOverviewIndex, selectedOverviewKey) {
        this._stopPropagationOfClick(e)

        /**
         * User cannot change overview option if lyric is expanded in an
         * expanded width, or if it's a logue.
         */
        if ((getIsLyricExpandable(this.state) && this.state.isLyricExpanded) || getIsLogue(this.props)) {
            return
        }

        // If option is disabled, bypass hidden option and show overview.
        if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === DISABLED) {
            selectedOverviewKey = SHOWN
        }

        // If there is a key, choose index based on it.
        if (selectedOverviewKey) {
            let index = 0
            while (index < OVERVIEW_OPTIONS.length && typeof selectedOverviewIndex === 'undefined') {
                if (selectedOverviewKey === OVERVIEW_OPTIONS[index]) {
                    selectedOverviewIndex = index
                }
                index++
            }
        }

        if (typeof selectedOverviewIndex === 'undefined') {
            selectedOverviewIndex = (this.props.selectedOverviewIndex + 1) % OVERVIEW_OPTIONS.length
        }

        // Stored as integer. 0 is to show overview, 1 is to hide it.
        this.props.selectOverviewIndex(selectedOverviewIndex)

        // If showing overview...
        if (e && OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            // Close annotation and wiki sections.
            this.selectAnnotation()

            // Collapse lyric section.
            this.selectLyricExpand(undefined, false)

            // Hide dots section.
            this.selectDotsExpand(undefined, 0)

            // Turn access off.
            // this._handleAccessOn(0)
        }
    }

    /**
     * When selecting a portal, selectedSongIndex argument is passed in because
     * props does not yet know new selected song. Ugly workaround, but it works.
     */
    selectAnnotation(e, selectedAnnotationIndex = 0, selectedSongIndex) {
        // Note that e is set to true from closePopup method.
        this._stopPropagationOfClick(e)

        // Called from arrow buttons in popup.
        if (typeof selectedAnnotationIndex === 'object') {
            const { direction } = selectedAnnotationIndex,
                lyricColumnShown = LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex]

            selectedAnnotationIndex = getAnnotationIndexForDirection(this.props, this.props.selectedAnnotationIndex, direction, undefined, lyricColumnShown)

            // this.scrollElementIntoView('annotation', selectedAnnotationIndex)
        }

        this.props.selectAnnotationIndex(selectedAnnotationIndex)
        this.selectWiki()

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {

            // Hide overview if shown.
            if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === SHOWN) {
                this.selectOverview(undefined, undefined, HIDDEN)
            }

            this.setState({
                accessedAnnotationIndex: selectedAnnotationIndex,

                // App does not know new index, so pass it directly.
                accessedPopupAnchorIndex: getPopupAnchorIndexForDirection({
                    selectedAnnotationIndex,
                    songs: this.props.songs,
                    selectedSongIndex: selectedSongIndex || this.props.selectedSongIndex,
                    selectedDotKeys: this.props.selectedDotKeys
                }, 1)
            })
        }
    }

    selectWiki(e, selectedWikiIndex = 0) {
        // Note that e is set to true from closePopup method.
        this._stopPropagationOfClick(e)

        this.props.selectWikiIndex(selectedWikiIndex)
        // if (selectedWikiIndex) {
        //     this._focusApp()
        // }
    }

    selectFromPortal(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, columnIndex) {
        this._stopPropagationOfClick(e)

        // TODO: Don't reset time if it's the same song.
        this.selectSong(undefined, selectedSongIndex, undefined, true)
        this.selectAnnotation(undefined, selectedAnnotationIndex, selectedSongIndex)

        // This also selects time.
        // FIXME: This should animate to verse, but doesn't always. (For example, "stand unsure.") This may be because "stand unsure" is verse 49, which doesn't exist yet until the song has been changed.
        this.selectVerse(true, selectedVerseIndex, undefined, selectedSongIndex)

        if (!isNaN(columnIndex)) {
            this.selectLyricColumn(undefined, columnIndex, selectedSongIndex)
        }
    }

    selectWikiOrPortal() {
        const annotation = getAnnotation(this.props)
        if (annotation.popupAnchors && annotation.popupAnchors.length) {
            const popupAnchorObject = annotation.popupAnchors[this.state.accessedPopupAnchorIndex - 1]

            if (typeof popupAnchorObject === 'string') {
                this.selectWiki(true, this.state.accessedPopupAnchorIndex)
            } else {
                this.selectFromPortal(undefined, popupAnchorObject.songIndex, popupAnchorObject.annotationIndex)
            }
        }
    }

    selectTime(e, selectedTimePlayed = 0) {
        const selectedVerseIndex = getVerseIndexForTime(this.props, selectedTimePlayed)

        if (selectedVerseIndex !== null) {

            this._storeTimeAndVerse({ e, selectedTimePlayed, selectedVerseIndex, scroll: false })
        }
    }

    resetUpdatedTimePlayed() {
        this.setState({
            updatedTimePlayed: null
        })
    }

    selectVerse(e, selectedVerseIndex = 0, direction, selectedSongIndex) {
        const songTimes = getSongTimes(this.props, selectedSongIndex)

        this._stopPropagationOfClick(e)

        /**
         * This was called from audio rewind and forward buttons, which do not
         * have modulo selection.
         */
        // if (direction) {
        //     selectedVerseIndex = getVerseIndexForDirection({
        //         props: this.props,
        //         index: this.props.selectedVerseIndex,
        //         direction,
        //         lyricColumnShown: LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex],
        //         noModulo: true
        //     })
        //     if (selectedVerseIndex < 0 || selectedVerseIndex >= songTimes.length) {
        //         return
        //     }
        //
        // }

        let selectedTimePlayed,
            scroll

        if (e) {
            // Select corresponding time.
            selectedTimePlayed = songTimes[selectedVerseIndex]
            scroll = true

        // A new song has been selected.
        } else {
            selectedTimePlayed = 0
            scroll = false
        }

        this._storeTimeAndVerse({ e, selectedTimePlayed, selectedVerseIndex, scroll })
    }

    _storeTimeAndVerse({ e, selectedTimePlayed, selectedVerseIndex, scroll }) {
        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        /**
         * Don't let player change time before it has been updated to reflect
         * the new time selected by user.
         */
        if (this.state.updatedTimePlayed !== null) {
            return
        }

        const newState = {
            accessedVerseIndex: selectedVerseIndex
        }

        /**
        * TODO: Make this more robust, so that a verse change prompted by the
        * audio will only scroll the lyrics if the previous verse is visible
        * and the selected verse is not.
        */
        if (scroll && selectedVerseIndex !== this.props.selectedVerseIndex) {
            // this.scrollElementIntoView('verse', selectedVerseIndex)
        }

        if (e) {
            newState.updatedTimePlayed = selectedTimePlayed
        }

        this.setState(newState)

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    selectLyricColumn(e, selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2, selectedSongIndex) {

        this._stopPropagationOfClick(e)

        /**
         * User shouldn't be able to select lyric column if not in a song that
         * has double columns.
         */
        if (!getShowSingleLyricColumn(this.props, this.state, selectedSongIndex)) {
            return
        }

        const lyricColumnShown = LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]
        let newState = {}

        /**
         * If accessed lyric element is annotation that's in a column, select
         * its verse.
         */
        if (this.state.accessedLyricElement === LYRIC_ANNOTATION_ELEMENT) {
            const annotation = getAnnotation(this.props, this.state.accessedAnnotationIndex)

            if (annotation && annotation.column) {
                newState.accessedLyricElement = LYRIC_VERSE_ELEMENT
                newState.accessedVerseIndex = getVerseIndexForAnnotationIndex({
                    props: this.props,
                    index: this.state.accessedAnnotationIndex,
                    lyricColumnShown
                })
            }
        } else {
            newState.accessedVerseIndex =  getVerseIndexForDirection({
                props: this.props,
                index: this.state.accessedVerseIndex,
                lyricColumnShown
            })
        }

        this.props.selectLyricColumnIndex(selectedLyricColumnIndex)
        this.setState(newState)
    }

    selectBookColumn(e, reset, selectedSongIndex = this.props.selectedSongIndex) {
        // Either reset or else toggle.

        /**
         * User shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (e) {
            if (!getShowSingleBookColumn(this.state) || !this.props.selectedNavIndex) {
                return
            }
        }

        const selectedBookColumnIndex = reset ? getSelectedBookColumnIndex(this.props, selectedSongIndex) : this.state.selectedBookColumnIndex % 2 + 1

        this.setState({
            selectedBookColumnIndex
        })
    }

    selectVerseElement(selectedVerseElement) {

        if (selectedVerseElement !== this.state.selectedVerseElement) {

            // Determine if new selected verse element shows or hides verse bar.
            this.scrollLyricSection(undefined, selectedVerseElement)

            // App has a reference to the selected verse.
            this.setState({
                selectedVerseElement
            })
        }
    }

    slideVerseElement(sliderVerseElement) {

        if (sliderVerseElement !== this.state.sliderVerseElement) {
            const newState = getVerseBarStatus(this.state, sliderVerseElement)

            newState.sliderVerseElement = sliderVerseElement

            /**
             * Slider verse element overrides selected verse element, as long
             * as the slider is touched.
             */
            this.setState(newState)
        }
    }

    scrollLyricSection(lyricSectionElement, selectedVerseElement = this.state.selectedVerseElement, lyricColumnJustTransitioned) {

        /**
         * Prevent verse bar from showing upon initial load.
         */
        if (!this.state.appMounted) {
            return
        }

        const newState = getVerseBarStatus(this.state, selectedVerseElement)

        if (!newState) {
            return
        }

        // Update the lyric section element.
        // TODO: Can we be smarter about when to update the lyric section element?
        newState.lyricSectionElement = lyricSectionElement

        // Always show buttons if this is from a height transition
        if (lyricColumnJustTransitioned) {
            newState.showLyricButtons = true

        } else if (lyricSectionElement) {
            // Decide whether to show ear and expand buttons.
            const lyricSectionTop =  lyricSectionElement.scrollTop

            newState.lyricSectionTop = lyricSectionTop

            // FIXME: Currently, the buttons fade in and out simply based on whether scroll was up or down. Make this more user-friendly?
            newState.showLyricButtons = lyricSectionTop < this.state.lyricSectionTop

            // When lyrics are scrolled, verse should no longer be interactivated.
            // this.interactivateVerse()
        }

        this.setState(newState)
    }

    clickPopupContainer(e) {
        this._stopPropagationOfClick(e)
        // this._handleAccessOn(0)
        // this._focusApp()
    }

    clickBody(e) {
        this._stopPropagationOfClick(e)
        // this._handleAccessOn(0)

        // Hide popups, but don't collapse lyrics column.
        this._closePopupIfOpen({ exemptSection: LYRICS_SECTION })
        //


        // Deinteractivate verse.
        this.interactivateVerse()
    }

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

    /**********
     * ACCESS *
     **********/

    toggleAccess(accessedOn = (this.props.accessedOn + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        if (typeof accessedOn === 'boolean') {
            accessedOn = accessedOn ? 1 : 0
        }

        this.props.accessOn(accessedOn)
    }

    /*********
     * ADMIN *
     *********/

    toggleAdmin(selectedAdminIndex = (this.props.selectedAdminIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectAdminIndex(selectedAdminIndex)
    }

    /*********
     * AUDIO *
     *********/

    selectAudioOption(selectedAudioOptionIndex =
        (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length) {
        // If no argument passed, then just toggle amongst audio options.

        this.props.selectAudioOptionIndex(selectedAudioOptionIndex)
    }

    /*******
     * DOT *
     *******/

    toggleDotKey(selectedDotKey) {
        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)
    }

    /*******
     * NAV *
     *******/


    /*********
     * SCORE *
     *********/

    selectScore(selectedScoreIndex =
        (this.props.selectedScoreIndex + 1) % 2) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectScoreIndex(selectedScoreIndex)
    }

    /********
     * TIPS *
     ********/

    selectTips(selectedTipsIndex =
        (this.props.selectedTipsIndex + 1) % TIPS_OPTIONS.length) {
        // If no argument passed, then just toggle amongst tips options.

        this.props.selectTipsIndex(selectedTipsIndex)
    }

    /*********
     * TOUCH *
     *********/

    touchSliderBegin(clientRect, screenX) {
        const sliderLeft = clientRect.left,
            sliderWidth = clientRect.width,
            sliderRatio = getSliderRatioForScreenX(screenX, sliderLeft, sliderWidth),

            sliderTime = sliderRatio * getSong(this.props).totalTime,
            sliderVerseIndex = getVerseIndexForTime(this.props, sliderTime)

        this.setState({
            sliderLeft,
            sliderWidth,
            sliderRatio,
            sliderVerseIndex,
            sliderMousedOrTouched: true
        })

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(() => {
            if (this.state.sliderMousedOrTouched && !this.state.sliderMoving) {
                this.setState({
                    sliderMoving: true
                })
            }
        }, 125)
    }

    touchBodyMove(screenX) {
        if (this.state.sliderMousedOrTouched) {
            const { sliderLeft,
                    sliderWidth } = this.state,
                sliderRatio = getSliderRatioForScreenX(screenX, sliderLeft, sliderWidth),

                sliderTime = sliderRatio * getSong(this.props).totalTime,
                sliderVerseIndex = getVerseIndexForTime(this.props, sliderTime)

            this.setState({
                sliderRatio,
                sliderVerseIndex,
                sliderMoving: true
            })
        }
    }

    touchBodyEnd() {
        if (this.state.sliderMousedOrTouched) {
            const selectedTime = this.state.sliderRatio * getSong(this.props).totalTime,
                selectedVerseIndex = getVerseIndexForTime(this.props, selectedTime),
                songTimes = getSongTimes(this.props),
                verseTime = songTimes[selectedVerseIndex]

            /**
             * We will start at the beginning of the selected verse.
             */
            // FIXME: handle this!
            this.selectTime(true, verseTime)

            this.setState({
                sliderLeft: 0,
                sliderWidth: 0,
                sliderRatio: 0,
                sliderVerseIndex: -1,
                sliderMousedOrTouched: false,
                sliderMoving: false,
                sliderVerseElement: null
            })
        }
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse(interactivatedVerseIndex = -1) {
        this.setState({
            interactivatedVerseIndex
        })
    }

    render() {
        return (
            <EventManager

                // Dom manager props.
                domProps={this.props}
                domState={this.state}

                // Event manager props.
                clickBody={this.clickBody}
                clickPopupContainer={this.clickPopupContainer}
                touchSliderBegin={this.touchSliderBegin}
                touchBodyMove={this.touchBodyMove}
                touchBodyEnd={this.touchBodyEnd}
                selectAnnotation={this.selectAnnotation}
                selectAudioOption={this.selectAudioOption}
                selectBookColumn={this.selectBookColumn}
                toggleDotKey={this.toggleDotKey}
                selectDotsExpand={this.selectDotsExpand}
                selectFromPortal={this.selectFromPortal}
                selectLyricColumn={this.selectLyricColumn}
                selectLyricExpand={this.selectLyricExpand}
                scrollLyricSection={this.scrollLyricSection}
                selectNavExpand={this.selectNavExpand}
                selectOverview={this.selectOverview}
                selectScore={this.selectScore}
                selectSong={this.selectSong}
                selectTime={this.selectTime}
                selectTips={this.selectTips}
                selectVerse={this.selectVerse}
                interactivateVerse={this.interactivateVerse}
                selectWiki={this.selectWiki}
                toggleAccess={this.toggleAccess}
                toggleAdmin={this.toggleAdmin}
                togglePlay={this.togglePlay}
                selectVerseElement={this.selectVerseElement}
                slideVerseElement={this.slideVerseElement}

                advanceToNextSong={this.advanceToNextSong}
                resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}
            />
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
