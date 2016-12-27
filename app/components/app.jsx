import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSongIndex,
         selectAnnotationIndex,
         selectVerseIndex,
         selectTimePlayed,
         selectDotKey,
         selectOverviewIndex,
         selectAudioOptionIndex,
         selectLyricColumnIndex,
         selectTipsIndex,
         selectWikiIndex,
         selectNavIndex,
         selectDotsIndex,
         accessOn,
         accessSectionIndex } from 'redux/actions'
import AdminToggle from './admin/admin-toggle'
import Switch from './switch'
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

         LYRIC_VERSE_ELEMENT,
         LYRIC_ANNOTATION_ELEMENT,
         LYRIC_COLUMN_KEYS,

         DEVICE_OBJECTS,

         WIKI,

         LEFT,
         RIGHT,

         ESCAPE,
         SPACE } from 'helpers/constants'
import { getSong, getSongTitle, getIsLogue, getAnnotation, getAnnotationIndexForDirection, getPopupAnchorIndexForDirection, getAnnotationIndexForVerseIndex, getVerseIndexForDirection, getVerseIndexForAnnotationIndex, getSongTimes, getLyricsStartAtZero, getSelectedBookColumnIndex } from 'helpers/album-view-helper'
import { resizeWindow, getShowSingleLyricColumn, getIsLyricExpandable, getShowSingleBookColumn, getIsDesktop } from 'helpers/responsive-helper'
import AccessHelper from 'helpers/access-helper'
import { allDotsDeselected } from 'helpers/dot-helper'
import LogHelper from 'helpers/log-helper'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
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
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn,
    accessedSectionIndex
}) => ({
    // Pass Redux state into component props.
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
    selectedNavIndex,
    selectedDotsIndex,
    accessedOn,
    accessedSectionIndex
})

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
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
            isAdmin: false,
            isPlaying: false,
            accessedSongIndex: props.selectedSongIndex,
            accessedVerseIndex: props.selectedVerseIndex,
            // If no annotation selected, default to 1.
            accessedAnnotationIndex: getAnnotationIndexForDirection(props, props.selectedAnnotationIndex || 1),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(props, 1),
            accessedLyricElement: LYRIC_VERSE_ELEMENT,
            accessedDotIndex: 0,
            showSingleLyricColumnInAdmin: false,
            selectedBookColumnIndex: getSelectedBookColumnIndex(props),
            isLyricExpanded: false,
            manualWidth: false
        }
    }

    componentWillMount() {
        this._assignLogFunctions()
        this.windowResize()
        window.onresize = this.windowResize
    }

    componentDidMount() {
        // Allows app to begin listening for keyboard events.
        this._focusApp()
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
        this.selectDot = this.selectDot.bind(this)
        this.selectFromPortal = this.selectFromPortal.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectWikiOrPortal = this.selectWikiOrPortal.bind(this)
        this.selectLyricColumnWidth = this.selectLyricColumnWidth.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectNavExpand = this.selectNavExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this._handleAccessOn = this._handleAccessOn.bind(this)
        this._handleSectionAccess = this._handleSectionAccess.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handlePopupContainerClick = this.handlePopupContainerClick.bind(this)
        this.windowResize = this.windowResize.bind(this)
    }

    _assignLogFunctions() {
        window.t = LogHelper.logStorage.bind(LogHelper)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
        window.n = LogHelper.logAnnotationsDotKeys.bind(LogHelper, this)
        window.c = LogHelper.logAccessedAnnotation.bind(LogHelper, this)
    }

    // Focus for accessibility.
    _focusApp(element = this.refs.app) {
        ReactDOM.findDOMNode(element).focus()
    }

    _stopPropagation(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }
    }

    _closePopupIfOpen(accessOff, exemptSection, overrideClosePopupsDefaultWithSection) {
        const { selectedAnnotationIndex,
                selectedWikiIndex,
                selectedDotsIndex,
                selectedOverviewIndex } = this.props

        let popupWasOpen = false

        if (exemptSection !== LYRICS_SECTION && this.state.isLyricExpanded) {
            this.selectLyricExpand(undefined, false)
            popupWasOpen = true
        }

        // Hide overview.
        if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
            this.selectOverview(undefined, undefined, HIDDEN)
            // popupWasOpen = true
        }

        // Hide dots.
        if (exemptSection !== DOTS_SECTION && selectedDotsIndex === 1) {
            this.selectDotsExpand({ popupsAlreadyClosed: true, overrideClosePopupsDefaultWithSection }, 0)
            popupWasOpen = true
        }

        // Hide wiki or annotation.
        if (selectedAnnotationIndex) {
            if (selectedWikiIndex) {
                if (exemptSection !== WIKI_SECTION) {
                    this.selectWiki({ popupsAlreadyClosed: true, overrideClosePopupsDefaultWithSection })
                }
            } else {
                if (exemptSection !== ANNOTATION_SECTION && exemptSection !== WIKI_SECTION) {
                    this.selectAnnotation({ popupsAlreadyClosed: true, overrideClosePopupsDefaultWithSection })
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

            if (accessOff) {
                this._handleAccessOn(0)
            }

            popupWasOpen = true
        }

        return popupWasOpen
    }

    /**
     * scrollIntoViewIfNeeded should return a cancel function. It presently
     * does not. Keeping this in app component for now, in case this function
     * is added later.
     * https://www.npmjs.com/package/scroll-into-view-if-needed
     */
    scrollElementIntoView(className, index, duration = 75) {
        const selector = `${className}-${index}`,
            element = document.getElementsByClassName(selector)[0]

        if (element) {
            scrollIntoViewIfNeeded(element, false, {
                duration
            })
        }
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    toggleAdmin(e) {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    togglePlay(e) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess({ accessedSectionKey: AUDIO_SECTION }) }

        this.setState({
            isPlaying: !this.state.isPlaying
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

        // Show overview if it's not disabled, and if not selected from portal.
        if (!fromPortal && OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] !== DISABLED) {
            this.selectOverview(undefined, undefined, SHOWN)
        }

        this.selectBookColumn(e, true, selectedSongIndex)
        this.props.selectSongIndex(selectedSongIndex)

        this.setState({
            accessedSongIndex: selectedSongIndex,

            // App does not know new index, so pass it directly.
            accessedAnnotationIndex: getAnnotationIndexForDirection({
                songs: this.props.songs,
                selectedDotKeys: this.props.selectedDotKeys,
                selectedSongIndex
            }, 1)
        })

        /**
         * Reset the stored annotation, time, and overview, unless selected
         * from portal.
         */
        if (e) {
            const selectedVerseIndex = getLyricsStartAtZero(this.props, selectedSongIndex) ? 1 : 0

            this._handleSectionAccess({
                accessedSectionKey: direction ? AUDIO_SECTION : NAV_SECTION,
                selectedSongIndex
            })
            this.selectAnnotation()
            this.selectVerse(undefined, selectedVerseIndex)

            // Scroll to top of lyrics.
            this.scrollElementIntoView('lyrics-scroll', 'home')
        }
    }

    selectAudioOption(e, direction = 1) {
        const optionsLength = AUDIO_OPTIONS.length

        this._stopPropagation(e)
        if (e) { this._handleSectionAccess({ accessedSectionKey: AUDIO_SECTION }) }

        this.props.selectAudioOptionIndex((this.props.selectedAudioOptionIndex + direction + optionsLength) % optionsLength)
    }

    selectLyricExpand(e, isLyricExpanded = !this.state.isLyricExpanded) {
        // Don't bother if lyric is not expandable, or if it's a logue.
        if (getIsLyricExpandable(this.state) && !getIsLogue(this.props)) {
            this.setState({
                isLyricExpanded
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

        this.props.selectDotsIndex(selectedDotsIndex)

        if (e) {

            if (selectedDotsIndex) {
                // Hide overview and collapse lyrics if shown.
                if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === SHOWN) {
                    this.selectOverview(undefined, undefined, HIDDEN)
                }

                this.selectLyricExpand(undefined, false)
                this.selectAnnotation()

                this._handleSectionAccess({
                    accessedSectionKey: DOTS_SECTION
                })

            } else {
                this._handleSectionAccess({
                    accessedSectionKey: e.overrideClosePopupsDefaultWithSection || NAV_SECTION,
                    popupsAlreadyClosed: e.popupsAlreadyClosed
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
        if (!isSelected && selectedDotKey === WIKI && this.props.selectedWikiIndex) {
            this._closePopupIfOpen()
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
                selectedAnnotationIndex: annotationDeselected ? 0 : undefined,
                selectedWikiIndex: annotationDeselected ? 0 : undefined
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
            const { direction } = selectedAnnotationIndex

            selectedAnnotationIndex = getAnnotationIndexForDirection(this.props, this.props.selectedAnnotationIndex, direction)

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
                popupsAlreadyClosed: e.popupsAlreadyClosed
            })
        }
    }

    selectWiki(e, selectedWikiIndex = 0) {
        // Note that e is set to true from closePopup method.
        this._stopPropagation(e)

        this.props.selectWikiIndex(selectedWikiIndex)
        if (selectedWikiIndex) {
            this._focusApp()
        }

        if (e) {
            const accessedSectionKey = e.overrideClosePopupsDefaultWithSection ||
                (selectedWikiIndex ? WIKI_SECTION : ANNOTATION_SECTION)

            this._handleSectionAccess({
                accessedSectionKey,
                selectedWikiIndex,
                popupsAlreadyClosed: e.popupsAlreadyClosed
            })
        }
    }

    selectFromPortal(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, columnIndex) {
        this._stopPropagation(e)

        // TODO: Don't reset time if it's the same song.
        this.selectSong(undefined, selectedSongIndex, undefined, true)
        this.selectAnnotation(undefined, selectedAnnotationIndex, selectedSongIndex)
        this.selectVerse(undefined, selectedVerseIndex)
        if (!isNaN(columnIndex)) {
            this.selectLyricColumn(undefined, columnIndex, selectedSongIndex)
        }

        // FIXME: This animation is jumpy.
        this.scrollElementIntoView('verse', selectedVerseIndex, 250)
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
        const selectedSong = getSong(this.props)

        if (selectedTimePlayed >= 0 && selectedTimePlayed < selectedSong.totalTime) {
            let selectedVerseIndex = 0

            // Title verse is selectable only if lyrics start after time 0.
            if (selectedTimePlayed === 0) {
                selectedVerseIndex = getLyricsStartAtZero(this.props) ? 1 : 0

            // Select corresponding verse.
            } else {
                while (selectedVerseIndex < selectedSong.times.length - 1 && selectedTimePlayed >= selectedSong.times[selectedVerseIndex + 1]) {
                    selectedVerseIndex++
                }
            }

            this._storeTimeAndVerse({ selectedTimePlayed, selectedVerseIndex, scroll: true })
        }
    }

    selectVerse(e, selectedVerseIndex = 0, direction) {
        const songTimes = getSongTimes(this.props),
            currentSongTime = songTimes[this.props.selectedVerseIndex]

        this._stopPropagation(e)

        /**
         * This was called from audio rewind and forward buttons, which do not
         * have modulo selection.
         */
        if (direction) {
            selectedVerseIndex = getVerseIndexForDirection({
                props: this.props,
                index: this.props.selectedVerseIndex,
                direction,
                lyricColumnShown: LYRIC_COLUMN_KEYS[this.props.selectedLyricColumnIndex],
                noModulo: true
            })
            if (selectedVerseIndex < 0 || selectedVerseIndex >= songTimes.length) {
                return
            }

        }

        let selectedTimePlayed,
            scroll

        if (e) {
            // Select corresponding time.
            selectedTimePlayed = songTimes[selectedVerseIndex]
            scroll = true
            this._handleSectionAccess({ accessedSectionKey: direction ? AUDIO_SECTION : LYRICS_SECTION })

        // A new song has been selected.
        } else {
            selectedTimePlayed = 0
            scroll = false
        }

        this._storeTimeAndVerse({ selectedTimePlayed, selectedVerseIndex, scroll })
    }

    _storeTimeAndVerse({ selectedTimePlayed, selectedVerseIndex, scroll }) {
        /**
         * Since time and verse are in sync, this helper method can be called
         * by either one.
         */

        /**
        * TODO: Make this more robust, so that a verse change prompted by the
        * audio will only scroll the lyrics if the previous verse is visible
        * and the selected verse is not.
        */
        if (scroll) {
            this.scrollElementIntoView('verse', selectedVerseIndex)
        }

        this.setState({
            accessedVerseIndex: selectedVerseIndex
        })

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    selectLyricColumnWidth(e) {
        this.setState({
            showSingleLyricColumnInAdmin: !this.state.showSingleLyricColumnInAdmin
        })
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
            if (!getShowSingleBookColumn(this.state) || this.props.selectedNavIndex || (getIsLyricExpandable(this.state) && this.state.isLyricExpanded)) {
                return
            }
        }

        const selectedBookColumnIndex = reset ? getSelectedBookColumnIndex(this.props, selectedSongIndex) : this.state.selectedBookColumnIndex % 2 + 1

        this.setState({
            selectedBookColumnIndex
        })
    }

    handlePopupContainerClick(e, className) {
        this._stopPropagation(e)
        this._handleAccessOn(0)

        /**
         * Clicking inside the annotation popup itself should keep it open, but
         * close the wiki popup.
         */
        if (className === 'annotation' && this.props.selectedWikiIndex) {
            this.selectWiki(true)
        }

        this._focusApp()
    }

    _onBodyClick(e) {
        this._handleAccessOn(0)
        this.selectAnnotation()
        this.selectWiki()
        this.selectDotsExpand(undefined, 0)

        // Hide overview if shown.
        if (OVERVIEW_OPTIONS[this.props.selectedOverviewIndex] === SHOWN) {
            this.selectOverview(undefined, undefined, HIDDEN)
        }
    }

    handleKeyDown(e) {
        let { key: keyName,
              keyCode,
              charCode } = e

        // Workaround for Safari, which doesn't recognise key on event.
        if (keyName === 'Unidentified') {
            keyName = String.fromCharCode(keyCode)
        }

        // Do not handle if any modifier keys are present.
        if (e && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || keyName === 'Tab')) {
            return
        } else {
            // TODO: Focus strategically, based on accessed section.
            this._focusApp()
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
            selectAudioOption: this.selectAudioOption,
            selectTips: this.selectTips,
            togglePlay: this.togglePlay,
            toggleAdmin: this.toggleAdmin,
            windowResize: this.windowResize,
            selectedTimePlayed: this.props.selectedTimePlayed,
            selectLyricExpand: this.selectLyricExpand,
            selectNavExpand: this.selectNavExpand,
            selectDotsExpand: this.selectDotsExpand,
            selectBookColumn: this.selectBookColumn,
            selectTime: this.selectTime
        })) { return }

        // If Escape to close popup, close it and return.
        if (keyName === ESCAPE && this._closePopupIfOpen(true)) { return }

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
                if (!this._closePopupIfOpen()) {
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
                            togglePlay: this.togglePlay,
                            selectAudioOption: this.selectAudioOption,
                            selectVerse: this.selectVerse,
                            selectSong: this.selectSong
                        })
                        break
                    case ANNOTATION_SECTION:
                    case LYRICS_SECTION:
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
                    case DOTS_SECTION:
                        newState = AccessHelper.handleDotAccess({
                            keyName,
                            accessedDotIndex: this.state.accessedDotIndex,
                            selectDot: this.selectDot
                        })
                        break
                }

                if (newState) { this.setState(newState) }
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
        this._focusApp()

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
                           selectedWikiIndex = this.props.selectedWikiIndex,
                           selectedAnnotationIndex = this.props.selectedAnnotationIndex,
                           popupsAlreadyClosed,
                           overrideClosePopupsDefaultWithSection }) {

        const accessedSectionIndex = AccessHelper.handleSectionAccess({
                deviceIndex: this.state.deviceIndex,
                selectedSongIndex,
                currentAccessedSectionIndex: this.props.accessedSectionIndex,
                accessedSectionKey,
                accessOn,
                handleAccessOn: this._handleAccessOn
            }),
            sectionKey = accessedSectionKey || SECTION_KEYS[accessedSectionIndex]

        // If accessed section is dots section, expand the popup...
        if (sectionKey === DOTS_SECTION) {
            this.selectDotsExpand(undefined, 1)
        }

        this._selectDefaultSectionElementIndex(accessedSectionIndex, selectedSongIndex)
        this.props.accessSectionIndex(accessedSectionIndex)

        if (!popupsAlreadyClosed) {
            this._closePopupIfOpen(undefined, sectionKey, overrideClosePopupsDefaultWithSection)
        }
        this._focusApp()
    }

    render() {
        const { props, state } = this,
            accessedSectionKey = SECTION_KEYS[props.accessedSectionIndex],
            nextSectionKey = AccessHelper.getNextSectionKey(props, this.state.deviceIndex),
            { songs,
              selectedSongIndex,
              selectedVerseIndex,
              selectedOverviewIndex } = props,
            { isAdmin,
              deviceIndex,
              windowWidth,
              windowHeight } = state,

            songTimes = getSongTimes(props),
            isDesktop = getIsDesktop(deviceIndex),
            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            showSingleLyricColumn = getShowSingleLyricColumn(props, state),
            isLyricExpandable = getIsLyricExpandable(state),
            isOverviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,

            isPrologue = selectedSongIndex === 0,
            isFirstSong = selectedSongIndex === 1,
            isLastSong = selectedSongIndex === songs.length - 2,
            isEpilogue = selectedSongIndex === songs.length - 1,

            selectedSongTitle = getSongTitle(props, isPrologue || isEpilogue),

            lyricsStartAtZero = getLyricsStartAtZero(props),
            isFirstVerse = selectedVerseIndex === (lyricsStartAtZero ? 1 : 0),
            isLastVerse = selectedVerseIndex === songTimes.length - 1

        return (
            <div
                ref="app"
                className={`app ${isAdmin ? 'admin' : 'live' + ' ' + deviceClassName} ${isDesktop ? 'is-desktop' : 'is-mobile'}`}
                onClick={this._onBodyClick}
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
            >
                <AdminToggle
                    isAdmin={isAdmin}
                    isLyricExpanded={this.state.isLyricExpanded}
                    deviceIndex={deviceIndex}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                    onClick={this.toggleAdmin}
                />
                <Switch {...this.props} {...this.state}
                    isPrologue={isPrologue}
                    isFirstSong={isFirstSong}
                    isLastSong={isLastSong}
                    isEpilogue={isEpilogue}
                    lyricsStartAtZero={lyricsStartAtZero}
                    isFirstVerse={isFirstVerse}
                    isLastVerse={isLastVerse}
                    selectedSongTitle={selectedSongTitle}
                    accessedSectionKey={accessedSectionKey}
                    nextSectionKey={nextSectionKey}
                    showSingleLyricColumn={showSingleLyricColumn}
                    isLyricExpandable={isLyricExpandable}
                    isOverviewShown={isOverviewShown}
                    onSongClick={this.selectSong}
                    onSongFromPortalClick={this.selectFromPortal}
                    onWikiUrlClick={this.selectWiki}
                    onAnnotationClick={this.selectAnnotation}
                    onOverviewClick={this.selectOverview}
                    onAudioOptionClick={this.selectAudioOption}
                    onPlayClick={this.togglePlay}
                    onVerseClick={this.selectVerse}
                    onDotClick={this.selectDot}
                    onScreenWidthClick={this.selectLyricColumnWidth}
                    onLyricColumnClick={this.selectLyricColumn}
                    onPopupContainerClick={this.handlePopupContainerClick}
                    onLyricExpandClick={this.selectLyricExpand}
                    onNavExpandClick={this.selectNavExpand}
                    onBookColumnClick={this.selectBookColumn}
                    onDotsExpandClick={this.selectDotsExpand}
                    onTipsClick={this.selectTips}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
