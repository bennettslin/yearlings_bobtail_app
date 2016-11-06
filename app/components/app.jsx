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
         selectWikiUrl,
         accessOn,
         accessSectionIndex } from 'redux/actions'
import Album from './album'
import { SONGS_SECTION,
         AUDIO_SECTION,
         OVERVIEW_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         ANNOTATION_SECTION,
         WIKI_SECTION,
         SECTION_KEYS,

         ESCAPE,
         SPACE } from 'helpers/constants'
import { getSong, getAnnotation } from 'helpers/album-view-helper'
import AccessHelper from 'helpers/access-helper'
import { intersects } from 'helpers/dot-helper'
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
    selectedWikiUrl,
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
    selectedWikiUrl,
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
        selectWikiUrl,
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
            accessedAnnotationIndex: props.selectedAnnotationIndex,
            accessedAnnotationOutlined: false,
            accessedSongIndex: props.selectedSongIndex,
            accessedDotIndex: 0,
            hoveredDotIndex: 0,
            hoveredLineIndex: 0,
            isNarrowScreen: false,
            selectedLyricColumnIndex: 0
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
        this.selectScreenWidth = this.selectScreenWidth.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this._handleAccessOn = this._handleAccessOn.bind(this)
        this._handleSectionAccess = this._handleSectionAccess.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)
        this._onKeyDown = this._onKeyDown.bind(this)
    }

    _assignLogFunctions() {
        window.t = LogHelper.logStorage.bind(LogHelper)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
    }

    // Focus for accessibility.
    _focusApp(element = this.refs.app) {
        ReactDOM.findDOMNode(this.refs.app).focus()
    }

    _stopPropagation(e) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }
    }

    /*************************
     * STATE CHANGE HANDLERS *
     *************************/

    togglePlay(e) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(AUDIO_SECTION) }

        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    selectSong(e, selectedIndex = 0) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(SONGS_SECTION) }

        if (selectedIndex >= 0 && selectedIndex <= this.props.songs.length) {

            // Scroll to top of lyrics.
            scrollElementIntoView('lyrics-scroll', 'home')

            // Reset the stored annotation, time, and overview.
            this.selectAnnotation()
            this.selectVerse()

            // Show overview bubble text for selected song.
            this.props.selectOverviewIndex(0)

            this.props.selectSongIndex(selectedIndex)

            /**
             * Keep annotation anchor access outlined if already so, and just
             * set the index to 1. Otherwise set it to 0.
             */
            this.setState({
                accessedAnnotationIndex: this.state.accessedAnnotationOutlined ? 1 : 0,
                accessedSongIndex: selectedIndex
            })
        }
    }

    selectOverview(e) {
        // Stored as integer. 0 is to show bubble, 1 is to hide it.
        const selectedOverviewIndex = (this.props.selectedOverviewIndex + 1) % 2
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(OVERVIEW_SECTION) }

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
        if (e) { this._handleSectionAccess(AUDIO_SECTION) }

        /**
         * Stored as integer. 0 is to "continue after next," 1 is to "repeat," 2 is to "pause after song."
         */
        this.props.selectAudioOptionIndex((this.props.selectedAudioOptionIndex + direction + optionsLength) % optionsLength)
    }

    selectDot(e, selectedDotKey) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(DOTS_SECTION) }

        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected) {
            this._deselectAnnotationWithNoSelectedDots(selectedDotKey)
        }
    }

    selectAnnotation(e, selectedIndex = 0) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(ANNOTATION_SECTION) }

        this.props.selectAnnotationIndex(selectedIndex)
        this.selectWiki()

        // Keep accessed index, even if annotation is deselected.
        if (selectedIndex > 0) {

            // Hide overview bubble text.
            this.props.selectOverviewIndex(1)

            this.setState({
                accessedAnnotationIndex: selectedIndex,
            })
        }

        // Remove outline if annotation was clicked.
        if (e && e.type === 'click') {
            this.setState({
                accessedAnnotationOutlined: false
            })
        }
    }

    selectWiki(e, selectedWiki) {
        this._stopPropagation(e)
        if (e) { this._handleSectionAccess(WIKI_SECTION) }

        const selectedWikiUrl = selectedWiki ?
            `https://en.m.wikipedia.org/wiki/${selectedWiki}` : ''

        // Dispatch Redux action.
        this.props.selectWikiUrl(selectedWikiUrl)

        this._focusApp()
    }

    selectPortal(e, selectedSongIndex, selectedAnnotationIndex) {
        this._stopPropagation(e)

        this.selectSong(undefined, selectedSongIndex)
        this.selectAnnotation(undefined, selectedAnnotationIndex)
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
        if (e) { this._handleSectionAccess(LYRICS_SECTION) }

        let selectedTimePlayed,
            scroll

        // A new song has been selected.
        if (selectedVerseIndex === 0) {

            // Set verse to 1 by default.
            selectedVerseIndex = 1
            selectedTimePlayed = 0
            scroll = false

        } else {
            const selectedSong = getSong(this.props)

            // Select corresponding time.
            selectedTimePlayed = selectedSong.times[selectedVerseIndex - 1]
            scroll = true
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

        this.props.selectVerseIndex(selectedVerseIndex)
        this.props.selectTimePlayed(selectedTimePlayed)
    }

    selectScreenWidth(e) {
        const { isNarrowScreen } = this.state,
            newLyricColumnIndex = !isNarrowScreen ? 1 : 0

        this.selectLyricColumn(undefined, newLyricColumnIndex)

        this.setState({
            isNarrowScreen: !isNarrowScreen
        })
    }

    selectLyricColumn(e, selectedIndex = 0) {
        this.setState({
            selectedLyricColumnIndex: selectedIndex
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

    _onBodyClick(e) {
        this._handleAccessOn(0)
        this.selectAnnotation()
        this.selectWiki()

        this.setState({
            accessedAnnotationOutlined: false
        })
    }

    /*******************
     * ACCESS HANDLERS *
     *******************/

    _handleAccessOn(accessedOn = (this.props.accessedOn + 1) % 2) {
        // Stored as integer. 0 is false, 1 is true.
        this.props.accessOn(accessedOn)
    }

    _handleSectionAccess(accessedSectionKey, accessOn) {
        const accessedSectionIndex = AccessHelper.handleSectionAccess({
            selectedSongIndex: this.props.selectedSongIndex,
            currentAccessedSectionIndex: this.props.accessedSectionIndex,
            accessedSectionKey,
            accessOn,
            handleAccessOn: this._handleAccessOn
        })

        this.props.accessSectionIndex(accessedSectionIndex)
    }

    _onKeyDown(e) {
        const { key: keyName } = e

        // TODO: Focus strategically, based on accessed section.
        if (keyName !== 'Tab') {
            this._focusApp()
        }

        // If universal key, handle and return.
        if (AccessHelper.handleKeyIfUniversal({
            keyName,
            handleSectionAccess: this._handleSectionAccess,
            selectOverview: this.selectOverview,
            selectAudioOption: this.selectAudioOption,
            togglePlay: this.togglePlay
        })) { return }

        // If access is off, any key besides Escape turns it on.
        if (!this.props.accessedOn) {
            if (keyName !== ESCAPE && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                this._handleAccessOn()
            }

        // If access is on...
        } else {
            // Spacebar accesses next section...
            if (keyName === SPACE) {
                this._handleSectionAccess()

            // Escape turns off access...
            } else if (keyName === ESCAPE) {
                this._handleAccessOn()

            // Otherwise, it depends on what section is accessed.
            } else {
                const accessedSectionKey = SECTION_KEYS[this.props.accessedSectionIndex]
                let newState

                switch (accessedSectionKey) {
                    case SONGS_SECTION:
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
                    case LYRICS_SECTION:
                        const { selectedAnnotationIndex } = this.props,
                            { accessedAnnotationIndex,
                              accessedAnnotationOutlined } = this.state,
                            selectedSong = getSong(this.props),
                            annotationsLength = selectedSong.annotations ? selectedSong.annotations.length : 0

                        newState = AccessHelper.handleLyricsAccess({
                            keyName,
                            selectedAnnotationIndex,
                            annotationsLength,
                            accessedAnnotationIndex,
                            accessedAnnotationOutlined,
                            selectAnnotation: this.selectAnnotation,
                            scrollElementIntoView
                        })
                        break
                    case DOTS_SECTION:
                        newState = AccessHelper.handleDotAccess({
                            keyName,
                            accessedDotIndex: this.state.accessedDotIndex,
                            selectDot: this.selectDot
                        })
                        break
                    case ANNOTATION_SECTION:
                        AccessHelper.handleAnnotationAccess({
                            keyName
                        })
                        break
                    case WIKI_SECTION:
                        AccessHelper.handleWikiAccess({
                            keyName
                        })
                        break
                }

                this.setState(newState)
            }
        }
    }

    _deselectAnnotationWithNoSelectedDots(dotKey) {
        const { selectedDotKeys } = this.props,
            annotation = getAnnotation(this.props),
            presentDotKeys = annotation ? annotation.dotKeys : null,

            // The dotKey being deselected is still selected at this stage.
            postSelectedDotKeys = Object.assign(selectedDotKeys, { [dotKey]: false })

        // Deselect annotation if all its dot keys are deselected.
        if (annotation && !intersects(presentDotKeys, postSelectedDotKeys)) {
            this.selectAnnotation()
        }
    }

    render() {
        const accessedSectionKey = SECTION_KEYS[this.props.accessedSectionIndex]
        return (
            <div
                ref="app"
                className="app"
                onClick={this._onBodyClick}
                onKeyDown={this._onKeyDown}
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
                    onScreenWidthClick={this.selectScreenWidth}
                    onLyricColumnClick={this.selectLyricColumn}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
