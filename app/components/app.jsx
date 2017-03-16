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
         accessOn,
         accessSectionIndex } from 'redux/actions'
import EventManager from './event-manager'
import { NAV_SECTION,
         AUDIO_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         ANNOTATION_SECTION,
         WIKI_SECTION,
         SECTION_KEYS,

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
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

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
    accessedOn,
    accessedSectionIndex
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
    accessedOn,
    accessedSectionIndex
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
        accessOn,
        accessSectionIndex
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

            manualWidth: false,

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
            appMounted: false,

            cancelScrollIntoView: null
        }
    }

    componentWillMount() {
        this._assignLogFunctions()

        this.windowResize()
        window.onresize = this.windowResize
    }

    componentDidMount() {
        // Allows app to begin listening for keyboard events.
        // this._focusApp()

        // FIXME: Scrolling to selected verse here, but animation is janky.
        // setTimeout(this.scrollElementIntoView.bind(this, 'verse', this.props.selectedVerseIndex), 250)

        this.setState({
            appMounted: true
        })
    }

    /***********
     * HELPERS *
     ***********/

    windowResize(e, adminToggle) {
        const resizedWindowObject = resizeWindow(e ? e.target : undefined, adminToggle ? this.state.deviceIndex : undefined)

        this.setState(resizedWindowObject)
    }

    _bindEventHandlers() {
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.selectDot = this.selectDot.bind(this)
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
        this.updateSelectedVerseElement = this.updateSelectedVerseElement.bind(this)
        this.updateSliderVerseElement = this.updateSliderVerseElement.bind(this)
        this.scrollLyricSection = this.scrollLyricSection.bind(this)
        this.selectVerseBar = this.selectVerseBar.bind(this)
        this._handleAccessOn = this._handleAccessOn.bind(this)
        this._handleSectionAccess = this._handleSectionAccess.bind(this)
        this.clickBody = this.clickBody.bind(this)
        this.pressDownKey = this.pressDownKey.bind(this)
        this.clickPopupContainer = this.clickPopupContainer.bind(this)
        this.windowResize = this.windowResize.bind(this)
        this.mouseOrTouchSliderBegin = this.mouseOrTouchSliderBegin.bind(this)
        this._waitToSaySliderIsMoving = this._waitToSaySliderIsMoving.bind(this)
        this.mouseOrTouchBodyMove = this.mouseOrTouchBodyMove.bind(this)
        this.mouseOrTouchBodyEnd = this.mouseOrTouchBodyEnd.bind(this)
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

    // // Focus for accessibility.
    // _focusApp(element = this.myApp) {
    //     element.focus()
    // }

    _stopPropagation(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()
            this._handleAccessOn(0)
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

        // Hide overview.
        if (exemptSection !== AUDIO_SECTION && OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            this.selectOverview(undefined, undefined, overrideClosePopupsDefaultWithOverviewOption || HIDDEN)
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

        if (accessOff) {
            this._handleAccessOn(0)
        }

        return popupWasOpen
    }

    /**
     * scrollIntoViewIfNeeded should return a cancel function. It presently
     * does not, even though it says it does?
     * https://www.npmjs.com/package/scroll-into-view-if-needed
     */
    scrollElementIntoView(className, index, duration = 125) {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0]

        if (this.state.cancelScrollIntoView) {
            this.state.cancelScrollIntoView()
        }

        if (element) {
            console.warn(`Scrolling ${selector} into view.`);
            const cancelScrollIntoView = scrollIntoViewIfNeeded(element, false, {
                duration
            })

            this.setState({
                cancelScrollIntoView
            })
        }
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    mouseOrTouchSliderBegin(e) {
        if (e.nativeEvent.screenX) {
            const rect = e.target.getBoundingClientRect(),
                sliderLeft = rect.left,
                sliderWidth = rect.width,
                sliderRatio = getSliderRatioForScreenX(e.nativeEvent.screenX, sliderLeft, sliderWidth),

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
             * If the move doesn't happen for a while, we recognise it anyway
             * is moving anyway for styling purposes.
             */
            setTimeout(this._waitToSaySliderIsMoving, 125)
        }
    }

    _waitToSaySliderIsMoving() {
        if (this.state.sliderMousedOrTouched && !this.state.sliderMoving) {
            this.setState({
                sliderMoving: true
            })
        }
    }

    mouseOrTouchBodyMove(e) {
        if (this.state.sliderMousedOrTouched) {
            const { sliderLeft,
                    sliderWidth } = this.state,
                sliderRatio = getSliderRatioForScreenX(e.nativeEvent.screenX, sliderLeft, sliderWidth),

                sliderTime = sliderRatio * getSong(this.props).totalTime,
                sliderVerseIndex = getVerseIndexForTime(this.props, sliderTime)

            this.setState({
                sliderRatio,
                sliderVerseIndex,
                sliderMoving: true
            })
        }
    }

    mouseOrTouchBodyEnd() {
        if (this.state.sliderMousedOrTouched) {
            const selectedTime = this.state.sliderRatio * getSong(this.props).totalTime,
                selectedVerseIndex = getVerseIndexForTime(this.props, selectedTime),
                songTimes = getSongTimes(this.props),
                verseTime = songTimes[selectedVerseIndex]

            /**
             * We will start at the beginning of the selected verse.
             */
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

    toggleAdmin() {
        this.props.selectAdminIndex((this.props.selectedAdminIndex + 1) % 2)
    }

    togglePlay(e) {
        this._stopPropagation(e)
        if (e) {
            this._handleSectionAccess({
                accessedSectionKey: AUDIO_SECTION,
                bypassClosingPopups: true
            })
        }

        const isPlaying = !this.state.isPlaying

        // Select first song if play button in logue is toggled on.
        if (getIsLogue(this.props) && isPlaying) {
            this.selectSong(undefined, 1)
        }

        this.setState({
            isPlaying
        })
    }

    selectSong(e, selectedSongIndex = 0, direction, fromPortal) {
        this._stopPropagation(e)

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
            this.scrollElementIntoView('lyrics-scroll', 'home')

            if (!e.skipHandleSectionAccess) {
                this._handleSectionAccess({
                    accessedSectionKey: direction ? AUDIO_SECTION : NAV_SECTION,
                    selectedSongIndex,
                    overrideClosePopupsDefaultWithOverviewOption
                })
            }
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
            skipHandleSectionAccess: true,

            // FIXME: This should be set based on whether an annotation, score, or wiki popup is currently shown.
            preservePreviousPopupIndex: true
        }, selectedSongIndex + willAdvance)
    }

    selectAudioOption(e, direction = 1) {
        const optionsLength = AUDIO_OPTIONS.length

        this._stopPropagation(e)
        if (e) {
            this._handleSectionAccess({
                accessedSectionKey: AUDIO_SECTION,
                bypassClosingPopups: true
            })
        }

        this.props.selectAudioOptionIndex((this.props.selectedAudioOptionIndex + direction + optionsLength) % optionsLength)
    }

    interactivateVerse(e, interactivatedVerseIndex = -1) {
        this._stopPropagation(e)

        this.setState({
            interactivatedVerseIndex
        })
    }

    selectLyricExpand(e, isLyricExpanded = !this.state.isLyricExpanded) {
        // Don't bother if lyric is not expandable, or if it's a logue.
        if (getIsLyricExpandable(this.state) && !getIsLogue(this.props)) {

            this.setState({
                isLyricExpanded,

                // Start with lyric buttons shown when lyric column is expanded.
                showLyricButtons: true
            })

            if (e) {
                this._handleSectionAccess({
                    accessedSectionKey: LYRICS_SECTION,
                    overrideClosePopupsDefaultWithSection: LYRICS_SECTION
                })
            }
        }
    }

    selectNavExpand(e, selectedNavIndex) {
        this._stopPropagation(e)

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
        this._stopPropagation(e)

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

                this._handleSectionAccess({
                    accessedSectionKey: DOTS_SECTION,
                    selectedAnnotationIndex: 0
                })

            } else {
                this._handleSectionAccess({
                    accessedSectionKey: e.overrideClosePopupsDefaultWithSection || AUDIO_SECTION,
                    bypassClosingPopups: e.bypassClosingPopups
                })
            }
        }
    }

    selectOverview(e, selectedOverviewIndex, selectedOverviewKey) {
        this._stopPropagation(e)

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
            this._handleAccessOn(0)
        }
    }

    selectTips(e, selectedTipsIndex) {
        const tipsLength = TIPS_OPTIONS.length

        this._stopPropagation(e)
        if (typeof selectedTipsIndex === 'undefined') {
            selectedTipsIndex = (this.props.selectedTipsIndex + 1) % tipsLength
        }

        this.props.selectTipsIndex(selectedTipsIndex)
    }

    selectDot(e, selectedDotKey) {
        this._stopPropagation(e)

        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)

        let annotationDeselected

        // Close wiki popup if deselected.
        if (!isSelected && selectedDotKey === REFERENCE && this.props.selectedWikiIndex) {
            this._closePopupIfOpen({})
        }

        // Advance to the next accesible annotation and popup anchor, if needed.
        this.setState({
            accessedAnnotationIndex: getAnnotationIndexForDirection(this.props, this.state.accessedAnnotationIndex),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(this.props, this.state.accessedPopupAnchorIndex)
        })

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected && allDotsDeselected(this.props, selectedDotKey)) {
            this.selectAnnotation()
            annotationDeselected = true
        }

        if (e) {
            this._handleSectionAccess({
                accessedSectionKey: DOTS_SECTION,

                // App does not yet know that popups have been deselected.
                selectedAnnotationIndex: annotationDeselected ? 0 : undefined
            })
        }
    }

    /**
     * When selecting a portal, selectedSongIndex argument is passed in because
     * props does not yet know new selected song. Ugly workaround, but it works.
     */
    selectAnnotation(e, selectedAnnotationIndex = 0, selectedSongIndex) {
        // Note that e is set to true from closePopup method.
        this._stopPropagation(e)

        // Called from arrow buttons in popup.
        if (typeof selectedAnnotationIndex === 'object') {
            const { direction } = selectedAnnotationIndex,
                lyricColumnShown = LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex]

            selectedAnnotationIndex = getAnnotationIndexForDirection(this.props, this.props.selectedAnnotationIndex, direction, undefined, lyricColumnShown)

            this.scrollElementIntoView('annotation', selectedAnnotationIndex)
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

        if (e) {
            const accessedSectionKey = e.overrideClosePopupsDefaultWithSection ||
                (selectedAnnotationIndex ? ANNOTATION_SECTION : LYRICS_SECTION)

            this.selectDotsExpand(undefined, 0)

            this._handleSectionAccess({
                accessedSectionKey,
                selectedAnnotationIndex,
                bypassClosingPopups: e.bypassClosingPopups,
                overrideClosePopupsDefaultWithSection: accessedSectionKey
            })
        }
    }

    selectWiki(e, selectedWikiIndex = 0) {
        // Note that e is set to true from closePopup method.
        this._stopPropagation(e)

        this.props.selectWikiIndex(selectedWikiIndex)
        // if (selectedWikiIndex) {
        //     this._focusApp()
        // }

        if (e) {
            const accessedSectionKey = e.overrideClosePopupsDefaultWithSection ||
                (selectedWikiIndex ? WIKI_SECTION : ANNOTATION_SECTION)

            this._handleSectionAccess({
                accessedSectionKey,
                selectedWikiIndex,
                bypassClosingPopups: e.bypassClosingPopups
            })
        }
    }

    selectScore(e, selectedScoreIndex) {
        this._stopPropagation(e)

        if (isNaN(selectedScoreIndex)) {
            selectedScoreIndex = (this.props.selectedScoreIndex + 1) % 2
        }

        this.props.selectScoreIndex(selectedScoreIndex)
    }

    selectFromPortal(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, columnIndex) {
        this._stopPropagation(e)

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

            // FIXME: Don't scroll for now. Figure out later.
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

        this._stopPropagation(e)

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
            this._handleSectionAccess({
                accessedSectionKey: direction ? AUDIO_SECTION : LYRICS_SECTION,

                // Selecting verse and time should have no effect on popups.
                bypassClosingPopups: true
            })

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
            this.scrollElementIntoView('verse', selectedVerseIndex)
        }

        if (e) {
            newState.updatedTimePlayed = selectedTimePlayed
        }

        this.setState(newState)

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    selectLyricColumn(e, selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2, selectedSongIndex) {

        this._stopPropagation(e)

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
         * column, if nav is collapsed, or if lyric is expanded.
         */
        if (e) {
            if (!getShowSingleBookColumn(this.state) || !this.props.selectedNavIndex || (getIsLyricExpandable(this.state) && this.state.isLyricExpanded)) {
                return
            }
        }

        const selectedBookColumnIndex = reset ? getSelectedBookColumnIndex(this.props, selectedSongIndex) : this.state.selectedBookColumnIndex % 2 + 1

        this.setState({
            selectedBookColumnIndex
        })
    }

    updateSelectedVerseElement(selectedVerseElement) {

        if (selectedVerseElement !== this.state.selectedVerseElement) {

            // Determine if new selected verse element shows or hides verse bar.
            this.scrollLyricSection(undefined, selectedVerseElement)

            // App has a reference to the selected verse.
            this.setState({
                selectedVerseElement
            })
        }
    }

    updateSliderVerseElement(sliderVerseElement) {

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

    selectVerseBar() {
        this.scrollElementIntoView('verse', this.props.selectedVerseIndex)
    }

    clickPopupContainer(e) {
        this._stopPropagation(e)
        this._handleAccessOn(0)
        // this._focusApp()
    }

    clickBody() {
        this._handleAccessOn(0)

        // Hide popups, but don't collapse lyrics column.
        this._closePopupIfOpen({ exemptSection: LYRICS_SECTION })

        this.interactivateVerse()
    }

    pressDownKey(e) {
        let { key: keyName,
              keyCode } = e

        // Workaround for Safari, which doesn't recognise key on event.
        if (keyName === 'Unidentified') {
            keyName = String.fromCharCode(keyCode)
        }

        // Do not handle if any modifier keys are present.
        if (e && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || keyName === 'Tab')) {
            return
        } else {
            // TODO: Focus strategically, based on accessed section.
            // this._focusApp()
            e.preventDefault()
        }

        // Make all single characters lowercase.
        if (keyName.length === 1) {
            keyName = keyName.toLowerCase()
        }

        // If universal key, handle and return.
        if (AccessHelper.handleKeyIfUniversal({
            keyName,
            handleSectionAccess: this._handleSectionAccess,
            selectOverview: this.selectOverview,
            selectDotsExpand: this.selectDotsExpand,
            selectAudioOption: this.selectAudioOption,
            selectTips: this.selectTips,
            togglePlay: this.togglePlay,
            toggleAdmin: this.toggleAdmin,
            windowResize: this.windowResize,
            selectedTimePlayed: this.props.selectedTimePlayed,
            selectLyricExpand: this.selectLyricExpand,
            selectNavExpand: this.selectNavExpand,
            selectBookColumn: this.selectBookColumn,
            selectTime: this.selectTime
        })) {
            return
        }

        // If Escape to close popup, close it and return.
        if (keyName === ESCAPE) {
            const popupWasOpen = this._closePopupIfOpen({ accessOff: true })

            if (popupWasOpen) {
                return
            }
        }

        // If access is off, any key besides Escape turns it on.
        if (!this.props.accessedOn) {
            if (keyName !== ESCAPE) {
                this._handleAccessOn()
            }

        // If access is on...
        } else {
            // Escape turns off access.
            if (keyName === ESCAPE) {
                this._handleAccessOn()

            // Space closes popup if open, otherwise accesses next section.
            } else if (keyName === SPACE) {
                if (!this._closePopupIfOpen({ closedFromSpace: true })) {
                    this._handleSectionAccess({})
                }

            // Assign handler based on which section is accessed.
            } else {
                const accessedSectionKey = SECTION_KEYS[this.props.accessedSectionIndex]
                let newState

                switch (accessedSectionKey) {
                    case NAV_SECTION:
                        newState = AccessHelper.handleSongAccess({
                            keyName,
                            songsLength: this.props.songs.length,
                            accessedSongIndex: this.state.accessedSongIndex,
                            selectSong: this.selectSong,
                            selectedBookColumnIndex: this.state.selectedBookColumnIndex,
                            bookStartingIndices: this.props.bookStartingIndices,
                            selectBookColumn: this.selectBookColumn
                        })
                        break
                    case AUDIO_SECTION:
                        AccessHelper.handleAudioAccess({
                            keyName,
                            selectAudioOption: this.selectAudioOption,
                            selectVerse: this.selectVerse,
                            selectSong: this.selectSong
                        })
                        break
                    case ANNOTATION_SECTION:
                    case LYRICS_SECTION: {
                        const fromAnnotationSection = accessedSectionKey === ANNOTATION_SECTION,
                            lyricColumnShown = getShowSingleLyricColumn(this.props, this.state) ? (LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex]) : undefined

                        newState = AccessHelper.handleLyricsAndAnnotationAccess({
                            keyName,
                            fromAnnotationSection,
                            props: this.props,
                            accessedAnnotationIndex: this.state.accessedAnnotationIndex,
                            accessedVerseIndex: this.state.accessedVerseIndex,
                            accessedLyricElement: this.state.accessedLyricElement,
                            lyricColumnShown,
                            selectAnnotation: this.selectAnnotation,
                            scrollElementIntoView: this.scrollElementIntoView
                        }) || {}

                        if (accessedSectionKey === LYRICS_SECTION) {
                            const newLyricState = AccessHelper.handleLyricsAccess({
                                keyName,
                                props: this.props,
                                accessedAnnotationIndex: this.state.accessedAnnotationIndex,
                                accessedVerseIndex: this.state.accessedVerseIndex,
                                accessedLyricElement: this.state.accessedLyricElement,
                                selectVerse: this.selectVerse,
                                selectLyricColumn: this.selectLyricColumn,
                                scrollElementIntoView: this.scrollElementIntoView,
                                lyricColumnShown
                            })

                            if (newLyricState) {
                                newState = Object.assign(newState, newLyricState)
                            }

                        } else if (accessedSectionKey === ANNOTATION_SECTION) {
                            const accessedPopupAnchorIndex = AccessHelper.handleAnnotationAccess({
                                keyName,
                                props: this.props,
                                accessedPopupAnchorIndex: this.state.accessedPopupAnchorIndex,
                                selectWikiOrPortal: this.selectWikiOrPortal
                            })

                            if (accessedPopupAnchorIndex) {
                                newState.accessedPopupAnchorIndex = accessedPopupAnchorIndex
                            }
                        }
                        break
                    }
                    case DOTS_SECTION:
                        newState = AccessHelper.handleDotAccess({
                            keyName,
                            accessedDotIndex: this.state.accessedDotIndex,
                            selectDot: this.selectDot
                        })
                        break
                }

                if (newState) {
                    this.setState(newState)
                }
            }
        }
    }

    /*******************
     * ACCESS HANDLERS *
     *******************/

    _selectDefaultSectionElementIndex(accessedSectionIndex, selectedSongIndex) {
        const accessedSectionKey = SECTION_KEYS[accessedSectionIndex]
        let newState

        switch (accessedSectionKey) {
            case NAV_SECTION:
                this.selectBookColumn(undefined, true, selectedSongIndex)
                newState = { accessedSongIndex: this.props.selectedSongIndex }
                break
            case LYRICS_SECTION:
                newState = {
                    accessedVerseIndex: this.props.selectedVerseIndex,
                    accessedAnnotationIndex: getAnnotationIndexForVerseIndex(this.props, this.props.selectedVerseIndex)
                 }
                break
            default:
                break
        }

        if (newState) {
             this.setState(newState)
        }
    }

    _handleAccessOn(accessedOn = (this.props.accessedOn + 1) % 2, accessedSectionIndex = this.props.accessedSectionIndex) {
        // this._focusApp()

        if (accessedOn) {
            this._selectDefaultSectionElementIndex(accessedSectionIndex)

            // If accessed section is dots section, expand the popup.
            if (SECTION_KEYS[accessedSectionIndex] === DOTS_SECTION) {
                this.selectDotsExpand(undefined, 1)
            }

            // Hide overview if shown.
            if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === SHOWN) {
                this.selectOverview(undefined, undefined, HIDDEN)
            }
        }

        // Stored as integer. 0 is false, 1 is true.
        this.props.accessOn(accessedOn)
    }

    _handleSectionAccess({ accessedSectionKey,
                           accessOn,
                           selectedSongIndex = this.props.selectedSongIndex,
                           selectedAnnotationIndex = this.props.selectedAnnotationIndex,
                           bypassClosingPopups,
                           overrideClosePopupsDefaultWithSection,
                           overrideClosePopupsDefaultWithOverviewOption }) {

        const accessedSectionIndex = AccessHelper.handleSectionAccess({
                deviceIndex: this.state.deviceIndex,
                isLogue: getIsLogue({ selectedSongIndex, songs: this.props.songs }),
                accessOn,
                accessedSectionKey,
                currentAccessedSectionIndex: this.props.accessedSectionIndex,
                handleAccessOn: this._handleAccessOn
            }),
            sectionKey = accessedSectionKey || SECTION_KEYS[accessedSectionIndex]

        // If accessed section is dots section, expand the popup...
        if (sectionKey === DOTS_SECTION) {
            this.selectDotsExpand(undefined, 1)
        }

        this._selectDefaultSectionElementIndex(accessedSectionIndex, selectedSongIndex)
        this.props.accessSectionIndex(accessedSectionIndex)

        if (!bypassClosingPopups) {
            this._closePopupIfOpen({
                exemptSection: sectionKey,
                overrideClosePopupsDefaultWithSection,
                overrideClosePopupsDefaultWithOverviewOption,
                selectedAnnotationIndex
            })
        }
        // this._focusApp()
    }

    render() {
        return (
            <EventManager {...this.props} {...this.state}

                // FIXME: Move these to event manager.
                advanceToNextSong={this.advanceToNextSong}
                resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}

                clickBody={this.clickBody}
                clickPopupContainer={this.clickPopupContainer}
                interactivateVerse={this.interactivateVerse}

                mouseOrTouchSliderBegin={this.mouseOrTouchSliderBegin}
                mouseOrTouchBodyMove={this.mouseOrTouchBodyMove}
                mouseOrTouchBodyEnd={this.mouseOrTouchBodyEnd}

                pressDownKey={this.pressDownKey}
                selectAnnotation={this.selectAnnotation}
                selectAudioOption={this.selectAudioOption}
                selectBookColumn={this.selectBookColumn}
                selectDot={this.selectDot}
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
                selectVerseBar={this.selectVerseBar}
                selectWiki={this.selectWiki}
                togglePlay={this.togglePlay}
                updateSelectedVerseElement={this.updateSelectedVerseElement}
                updateSliderVerseElement={this.updateSliderVerseElement}
            />
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
