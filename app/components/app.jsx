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
         selectWikiIndex,
         accessOn,
         accessSectionIndex } from 'redux/actions'
import Album from './album'
import { NAV_SECTION,
         AUDIO_SECTION,
         OVERVIEW_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         ANNOTATION_SECTION,
         WIKI_SECTION,
         SECTION_KEYS,

         LYRIC_VERSE_ELEMENT,
         LYRIC_ANNOTATION_ELEMENT,

         WIKI,

         LEFT,
         RIGHT,

         ESCAPE,
         SPACE } from 'helpers/constants'
import { getSong, getAnnotation, getAnnotationIndexForDirection, getPopupAnchorIndexForDirection, getAnnotationIndexForVerseIndex, getVerseIndexForAnnotationIndex } from 'helpers/album-view-helper'
import AccessHelper from 'helpers/access-helper'
import { allDotsDeselected } from 'helpers/dot-helper'
import { scrollElementIntoView } from 'helpers/general-helper'
import LogHelper from 'helpers/log-helper'

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
    selectedWikiIndex,
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
    selectedWikiIndex,
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
        selectWikiIndex,
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

        /**
         * TODO: Putting these hovered states in app for now rather than the
         * relevant child components, because I anticipate that in mobile these
         * states will be toggled and persisted by clicks. (And untoggled upon
         * scroll.) Revisit whether this is the best idea.
         */
        this.state = {
            isPlaying: false,
            accessedSongIndex: props.selectedSongIndex,
            accessedVerseIndex: props.selectedVerseIndex,
            // If no annotation selected, default to 1.
            accessedAnnotationIndex: getAnnotationIndexForDirection(props, props.selectedAnnotationIndex || 1),
            accessedPopupAnchorIndex: getPopupAnchorIndexForDirection(props, 1),
            accessedLyricElement: LYRIC_VERSE_ELEMENT,
            accessedDotIndex: 0,
            hoveredDotIndex: 0,
            hoveredLineIndex: 0,
            isSingleLyricColumn: true,
            selectedLyricColumnIndex: 1
        }
    }

    componentWillMount() {
        this._assignLogFunctions()
    }

    componentDidMount() {
        // Allows app to begin listening for keyboard events.
        this._focusApp()
    }

    /***********
     * HELPERS *
     ***********/

    _bindEventHandlers() {
        this.togglePlay = this.togglePlay.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.selectDot = this.selectDot.bind(this)
        this.hoverDot = this.hoverDot.bind(this)
        this.hoverLine = this.hoverLine.bind(this)
        this.selectPortal = this.selectPortal.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectWikiOrPortal = this.selectWikiOrPortal.bind(this)
        this.selectLyricColumnWidth = this.selectLyricColumnWidth.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this._handleAccessOn = this._handleAccessOn.bind(this)
        this._handleSectionAccess = this._handleSectionAccess.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleAnnotationSectionClick = this.handleAnnotationSectionClick.bind(this)
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
        if (typeof e === 'object') {
            e.stopPropagation()
            this._handleAccessOn(0)
        }
    }

    _closePopupIfOpen(accessOff) {
        const { selectedAnnotationIndex,
                selectedWikiIndex } = this.props

        // If there is a popup, close it.
        if (selectedAnnotationIndex) {
            if (selectedWikiIndex) {
                this.selectWiki(true)
            } else {
                this.selectAnnotation(true)

                /**
                 * If closing annotation, set lyric element to annotation, and
                 * set accessed annotation index to closed annotation.
                 */
                this.setState({
                    accessedLyricElement: LYRIC_ANNOTATION_ELEMENT,
                    accessedAnnotationIndex: selectedAnnotationIndex,
                    accessedVerseIndex: getVerseIndexForAnnotationIndex(this.props, selectedAnnotationIndex)
                })
            }

            if (accessOff) { this._handleAccessOn(0) }
            return true
        }

        return false
    }

    /*******************
     * EVENT LISTENERS *
     *******************/

    togglePlay(e) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess({ accessedSectionKey: AUDIO_SECTION }) }

        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    selectSong(e, selectedSongIndex = 0) {
        this._stopPropagation(e)

        // Show overview bubble text for selected song.
        this.props.selectOverviewIndex(0)

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
            this._handleSectionAccess({ accessedSectionKey: NAV_SECTION })
            this.selectAnnotation()
            this.selectVerse()

            // Scroll to top of lyrics.
            scrollElementIntoView('lyrics-scroll', 'home')
        }
    }

    selectOverview(e) {
        // Stored as integer. 0 is to show bubble, 1 is to hide it.
        const selectedOverviewIndex = (this.props.selectedOverviewIndex + 1) % 2
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess({ accessedSectionKey: OVERVIEW_SECTION }) }
        this.props.selectOverviewIndex(selectedOverviewIndex)

        // Close annotation and wiki sections if showing bubble.
        if (selectedOverviewIndex === 0) {
            this.selectAnnotation()
        }
    }

    selectAudioOption(e, direction = 1) {
        // TODO: Make not hard-coded.
        const optionsLength = 3

        this._stopPropagation(e)
        if (e) { this._handleSectionAccess({ accessedSectionKey: AUDIO_SECTION }) }
        /**
         * Stored as integer. 0 is to "continue after next," 1 is to "repeat," 2 is to "pause after song."
         */
        this.props.selectAudioOptionIndex((this.props.selectedAudioOptionIndex + direction + optionsLength) % optionsLength)
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

        if (e) { this._handleSectionAccess({
            accessedSectionKey: DOTS_SECTION,

            // App does not yet know that popups have been deselected.
            selectedAnnotationIndex: annotationDeselected ? 0 : undefined,
            selectedWikiIndex: annotationDeselected ? 0 : undefined
        }) }
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

            scrollElementIntoView('annotation', selectedAnnotationIndex)
        }

        this.props.selectAnnotationIndex(selectedAnnotationIndex)
        this.selectWiki()

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {

            // Hide overview bubble text.
            this.props.selectOverviewIndex(1)

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
            this._handleSectionAccess({
                accessedSectionKey: selectedAnnotationIndex ? ANNOTATION_SECTION : LYRICS_SECTION,
                selectedAnnotationIndex
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
            this._handleSectionAccess({
                accessedSectionKey: selectedWikiIndex ? WIKI_SECTION : ANNOTATION_SECTION,
                selectedWikiIndex
            })
        }
    }

    selectPortal(e,  selectedSongIndex, selectedAnnotationIndex) {
        this._stopPropagation(e)

        this.selectSong(undefined, selectedSongIndex)
        this.selectAnnotation(undefined, selectedAnnotationIndex, selectedSongIndex)
    }

    selectWikiOrPortal() {
        const annotation = getAnnotation(this.props)
        if (annotation.popupAnchors && annotation.popupAnchors.length) {
            const popupAnchorObject = annotation.popupAnchors[this.state.accessedPopupAnchorIndex - 1]

            if (typeof popupAnchorObject === 'string') {
                this.selectWiki(true, this.state.accessedPopupAnchorIndex)
            } else {
                this.selectPortal(undefined, popupAnchorObject.songIndex, popupAnchorObject.annotationIndex)
            }
        }
    }

    selectTime(e, selectedTimePlayed = 0) {
        const selectedSong = getSong(this.props)

        if (selectedTimePlayed >= 0 && selectedTimePlayed < selectedSong.totalTime) {

            // Select corresponding verse.
            let selectedVerseIndex = 1
            while (selectedTimePlayed >= selectedSong.times[selectedVerseIndex]) {
                selectedVerseIndex++
            }

            this._storeTimeAndVerse({ selectedTimePlayed, selectedVerseIndex, scroll: true })
        }
    }

    selectVerse(e, selectedVerseIndex = 0) {
        this._stopPropagation(e)

        let selectedTimePlayed,
            scroll

        if (e) {
            const selectedSong = getSong(this.props)

            // Select corresponding time.
            selectedTimePlayed = selectedSong.times[selectedVerseIndex - 1]
            scroll = true

            this._handleSectionAccess({ accessedSectionKey: LYRICS_SECTION })

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
            scrollElementIntoView('verse', selectedVerseIndex)
        }

        this.setState({
            accessedVerseIndex: selectedVerseIndex
        })

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    selectLyricColumnWidth(e) {
        const isSingleLyricColumn = !this.state.isSingleLyricColumn,
            newLyricColumnIndex = isSingleLyricColumn ? 1 : 0

        this.selectLyricColumn(undefined, newLyricColumnIndex, isSingleLyricColumn)

        this.setState({
            isSingleLyricColumn
        })
    }

    selectLyricColumn(e, selectedIndex = 0, isSingleLyricColumn = this.state.isSingleLyricColumn) {
        this.setState({
            selectedLyricColumnIndex: isSingleLyricColumn ? selectedIndex : 0
        })
    }

    hoverDot(e, hoveredDotIndex = 0) {
        // Hovered dot index sets the text, as well as the position of the tooltip.

        this.setState({
            hoveredDotIndex
        })
    }

    hoverLine(e, hoveredLineIndex = 0) {
        this.setState({
            hoveredLineIndex
        })
    }

    handleAnnotationSectionClick(e) {
        this._handleAccessOn(0)

        if (this.props.selectedWikiIndex) {
            this.selectWiki()
        }

        this._focusApp()
    }

    _onBodyClick(e) {
        this._handleAccessOn(0)
        this.selectAnnotation()
        this.selectWiki()
    }

    handleKeyDown(e) {
        const { key: keyName } = e

        if (e) {
            e.preventDefault()
        }

        // TODO: Focus strategically, based on accessed section.
        if (keyName !== 'Tab') {
            this._focusApp()
        }

        // If universal key, handle and return.
        if (AccessHelper.handleKeyIfUniversal({
            keyName,
            canAccessSections: !this.props.selectedWikiIndex && !this.props.selectedAnnotationIndex,
            handleSectionAccess: this._handleSectionAccess,
            selectOverview: this.selectOverview,
            selectAudioOption: this.selectAudioOption,
            togglePlay: this.togglePlay
        })) { return }

        // If Escape to close popup, close it and return.
        if (keyName === ESCAPE && this._closePopupIfOpen(true)) { return }

        // If access is off, any key besides Escape turns it on.
        if (!this.props.accessedOn) {
            if (keyName !== ESCAPE && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
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
                            // Include option of no song.
                            songsLength: this.props.songs.length + 1,
                            accessedSongIndex: this.state.accessedSongIndex,
                            selectedTimePlayed: this.props.selectedTimePlayed,
                            selectTime: this.selectTime,
                            selectSong: this.selectSong
                        })
                        break
                    case AUDIO_SECTION:
                        AccessHelper.handleAudioAccess({
                            keyName,
                            togglePlay: this.togglePlay,
                            selectAudioOption: this.selectAudioOption
                        })
                        break
                    case OVERVIEW_SECTION:
                        AccessHelper.handleOverviewAccess({
                            keyName,
                            selectOverview: this.selectOverview
                        })
                        break
                    case ANNOTATION_SECTION:
                    case LYRICS_SECTION:
                        const fromAnnotationSection = accessedSectionKey === ANNOTATION_SECTION,
                            lyricColumnShown = this.state.isSingleLyricColumn ? (this.state.selectedLyricColumnIndex === 1 ? LEFT : RIGHT) : undefined

                        newState = AccessHelper.handleLyricsAndAnnotationAccess({
                            keyName,
                            fromAnnotationSection,
                            props: this.props,
                            accessedAnnotationIndex: this.state.accessedAnnotationIndex,
                            accessedVerseIndex: this.state.accessedVerseIndex,
                            accessedLyricElement: this.state.accessedLyricElement,
                            selectAnnotation: this.selectAnnotation,
                            selectLyricColumn: this.selectLyricColumn,
                            lyricColumnShown
                        }) || {}

                        if (accessedSectionKey === LYRICS_SECTION) {
                            const newLyricState = AccessHelper.handleLyricsAccess({
                                keyName,
                                props: this.props,
                                accessedAnnotationIndex: this.state.accessedAnnotationIndex,
                                accessedVerseIndex: this.state.accessedVerseIndex,
                                accessedLyricElement: this.state.accessedLyricElement,
                                selectVerse: this.selectVerse
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
                    case WIKI_SECTION:
                        AccessHelper.handleWikiAccess({
                            keyName
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

    _selectDefaultSectionElementIndex(accessedSectionIndex) {
        const accessedSectionKey = SECTION_KEYS[accessedSectionIndex]
        let newState

        switch (accessedSectionKey) {
            case NAV_SECTION:
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

    _handleAccessOn(accessedOn = (this.props.accessedOn + 1) % 2) {
        this._focusApp()
        this._selectDefaultSectionElementIndex(this.props.accessedSectionIndex)

        // Stored as integer. 0 is false, 1 is true.
        this.props.accessOn(accessedOn)
    }

    _handleSectionAccess({ accessedSectionKey,
                           accessOn,
                           selectedWikiIndex = this.props.selectedWikiIndex,
                           selectedAnnotationIndex = this.props.selectedAnnotationIndex }) {

        // Accessed section can only be the top popup section.
        if (accessedSectionKey) {
            if ((selectedWikiIndex && accessedSectionKey !== WIKI_SECTION) || (selectedAnnotationIndex && accessedSectionKey !== ANNOTATION_SECTION && accessedSectionKey !== WIKI_SECTION)) {
                return
            }
        }

        const accessedSectionIndex = AccessHelper.handleSectionAccess({
            selectedSongIndex: this.props.selectedSongIndex,
            currentAccessedSectionIndex: this.props.accessedSectionIndex,
            accessedSectionKey,
            accessOn,
            handleAccessOn: this._handleAccessOn
        })

        this._selectDefaultSectionElementIndex(accessedSectionIndex)

        this.props.accessSectionIndex(accessedSectionIndex)
        this._focusApp()
    }

    render() {
        const accessedSectionKey = SECTION_KEYS[this.props.accessedSectionIndex]
        return (
            <div
                ref="app"
                className="app"
                onClick={this._onBodyClick}
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
            >
                <Album {...this.props} {...this.state}
                    accessedSectionKey={accessedSectionKey}
                    onSongClick={this.selectSong}
                    onPortalClick={this.selectPortal}
                    onWikiUrlClick={this.selectWiki}
                    onAnnotationClick={this.selectAnnotation}
                    onOverviewClick={this.selectOverview}
                    onAudioOptionClick={this.selectAudioOption}
                    onPlayClick={this.togglePlay}
                    onVerseClick={this.selectVerse}
                    onDotClick={this.selectDot}
                    onDotHover={this.hoverDot}
                    onLineHover={this.hoverLine}
                    onScreenWidthClick={this.selectLyricColumnWidth}
                    onLyricColumnClick={this.selectLyricColumn}
                    onAnnotationSectionClick={this.handleAnnotationSectionClick}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
