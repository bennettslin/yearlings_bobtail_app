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
         selectPlayerOptionIndex,
         selectWikiUrl,
         accessOn,
         accessSectionIndex } from 'redux/actions'
import Album from './album'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME_PLAYED,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_PLAYER_OPTION_INDEX,
         SELECTED_WIKI_URL,
         ACCESSED_ON,
         ACCESSED_SECTION_INDEX,

         SONGS_SECTION,
         PLAYER_SECTION,
         OVERVIEW_SECTION,
         LYRICS_SECTION,
         DOTS_SECTION,
         SECTION_KEYS,

         ALL_DOT_KEYS,

         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER,
         ESCAPE,
         SPACE } from 'helpers/constants'
import AlbumHelper from 'helpers/album-view-helper'
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
    selectedPlayerOptionIndex,
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
    selectedPlayerOptionIndex,
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
        selectPlayerOptionIndex,
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
        this.togglePlay = this.togglePlay.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectPlayerOption = this.selectPlayerOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectDot = this.selectDot.bind(this)
        this.hoverDot = this.hoverDot.bind(this)
        this.hoverLine = this.hoverLine.bind(this)
        this.selectPortal = this.selectPortal.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectScreenWidth = this.selectScreenWidth.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)
        this._onKeyDown = this._onKeyDown.bind(this)

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

    _assignLogFunctions() {
        window.t = LogHelper.logStorage.bind(LogHelper)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
    }

    /***********
     * HELPERS *
     ***********/

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
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    selectTitle(e) {
        this.selectSong(e, 0)
    }

    selectSong(e, selectedIndex = 0, selectedIndexKey = SELECTED_SONG_INDEX) {
        this._stopPropagation(e)

        if (selectedIndex >= 0 && selectedIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(selectedIndex)

            /**
             * Also reset the stored annotation, time, and overview if changing
             * the selected song index.
             */
            if (selectedIndexKey === SELECTED_SONG_INDEX) {
                this.selectAnnotation()
                this.selectVerse()
            }

            // Scroll to top of lyrics.
            scrollElementIntoView('lyrics-scroll', 'home')

            // Show overview bubble text for selected song.
            this.props.selectOverviewIndex(0)

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

        this.props.selectOverviewIndex(selectedOverviewIndex)

        // Close annotation and wiki sections if showing bubble.
        if (selectedOverviewIndex === 0) {
            this.selectAnnotation()
        }
    }

    selectPlayerOption(e, direction = 1) {
        // TODO: Make not hard-coded.
        const optionsLength = 3

        this._stopPropagation(e)

        /**
         * Stored as integer. 0 is to "continue after next," 1 is to "repeat," 2 is to "pause after song."
         */
        this.props.selectPlayerOptionIndex((this.props.selectedPlayerOptionIndex + direction + optionsLength) % optionsLength)
    }

    selectDot(e, selectedDotKey) {
        this._stopPropagation(e)

        const isSelected = !this.props.selectedDotKeys[selectedDotKey]
        this.props.selectDotKey(selectedDotKey, isSelected)

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected) {
            this._deselectAnnotationWithNoSelectedDots(selectedDotKey)
        }
    }

    selectAnnotation(e, selectedIndex = 0) {
        this._stopPropagation(e)

        this.props.selectAnnotationIndex(selectedIndex)
        this.selectWiki(e)

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

        const selectedWikiUrl = selectedWiki ?
            `https://en.m.wikipedia.org/wiki/${selectedWiki}` : ''

        // Dispatch Redux action.
        this.props.selectWikiUrl(selectedWikiUrl)

        this._focusApp()
    }

    selectPortal(e, selectedSongIndex, selectedAnnotationIndex) {
        this._stopPropagation(e)

        this.selectSong(e, selectedSongIndex, SELECTED_SONG_INDEX)
        this.selectAnnotation(e, selectedAnnotationIndex)
    }

    selectTime(e, selectedTimePlayed = 0) {
        const { selectedSongIndex,
                songs } = this.props,
            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs)

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

        // A new song has been selected.
        if (selectedVerseIndex === 0) {

            // Set verse to 1 by default.
            selectedVerseIndex = 1
            selectedTimePlayed = 0
            scroll = false

        } else {
            const { selectedSongIndex,
                songs } = this.props,
                selectedSong = AlbumHelper.getSong(selectedSongIndex, songs)

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
        * player will only scroll the lyrics if the previous verse is visible
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

        this.selectLyricColumn(e, newLyricColumnIndex)

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

    _handleLyricsAccess(keyName) {
        const { selectedAnnotationIndex,
                selectedSongIndex,
                songs } = this.props,
            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            annotationsLength = selectedSong.annotations ? selectedSong.annotations.length : 0

        let { accessedAnnotationIndex,
              accessedAnnotationOutlined } = this.state,
            willSelectAnnotation = false,
            willScrollToAnchor = false

        switch (keyName) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
                if (!selectedAnnotationIndex && !accessedAnnotationOutlined) {
                    accessedAnnotationIndex = accessedAnnotationIndex || 1
                } else {
                    willScrollToAnchor = true
                    if (keyName === ARROW_LEFT) {
                        accessedAnnotationIndex--
                        if (accessedAnnotationIndex <= 0) {
                            accessedAnnotationIndex = annotationsLength
                        }
                    } else if (keyName === ARROW_RIGHT) {
                        accessedAnnotationIndex++
                        if (accessedAnnotationIndex > annotationsLength) {
                            accessedAnnotationIndex = 1
                        }
                    }
                    if (selectedAnnotationIndex) {
                        willSelectAnnotation = true
                    }
                }
                accessedAnnotationOutlined = true
                break
            case ENTER:
            case SPACE:
                // Select or deselect annotation, but keep access outline.
                if (accessedAnnotationOutlined) {
                    if (selectedAnnotationIndex) {
                        this.selectAnnotation()
                    } else {
                        willScrollToAnchor = true
                        willSelectAnnotation = true
                    }
                }
                break
            case ESCAPE:
                // Deselect annotation, and lose access outline.
                accessedAnnotationOutlined = false
                if (selectedAnnotationIndex) {
                    this.selectAnnotation()
                }
                break
        }

        if (willSelectAnnotation) {
            this.selectAnnotation(undefined, accessedAnnotationIndex)
        }

        if (willScrollToAnchor) {
            scrollElementIntoView('annotation', accessedAnnotationIndex)
        }

        this.setState({
            accessedAnnotationIndex,
            accessedAnnotationOutlined
        })
    }

    // For dev purposes only.
    _handleAccessedVerseSelect(keyName) {
        const { selectedSongIndex,
                selectedVerseIndex,
                songs } = this.props,
            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            timesLength = selectedSong.times ? selectedSong.times.length : 0

        if (keyName === ARROW_UP) {
            this.selectVerse(undefined, selectedVerseIndex - 1)
        } else if (keyName === ARROW_DOWN) {
            this.selectVerse(undefined, selectedVerseIndex + 1)
        }
    }

    _handleAccessOn(accessedOn) {
        // Stored as integer. 0 is false, 1 is true.
        const toBeAccesssedOn = typeof accessedOn !== 'undefined' ? accessedOn : (this.props.accessedOn + 1) % 2

        this.props.accessOn(toBeAccesssedOn)

        if (!toBeAccesssedOn) {
            this._resetAccessedIndices()
        }
    }

    _handleSectionAccess() {
        let accessedSectionIndex = (this.props.accessedSectionIndex + 1) % SECTION_KEYS.length

        // Skip lyrics and dots sections if no selected song.
        if (this.props.selectedSongIndex === 0) {
            while (SECTION_KEYS[accessedSectionIndex] === LYRICS_SECTION || SECTION_KEYS[accessedSectionIndex] === DOTS_SECTION) {
                accessedSectionIndex = (accessedSectionIndex + 1) % SECTION_KEYS.length
            }
        }

        this.props.accessSectionIndex(accessedSectionIndex)
        this._resetAccessedIndices(SECTION_KEYS[accessedSectionIndex])
    }

    _handleOverviewAccess(keyName) {
        if (keyName === ENTER) {
            this.selectOverview()
        }
    }

    _handleSongAccess(keyName) {
        // Include option of no song.
        const songsLength = this.props.songs.length + 1
        let accessedSongIndex = this.state.accessedSongIndex

        switch (keyName) {
            case ARROW_UP:
                accessedSongIndex = (accessedSongIndex + (songsLength - 1)) % songsLength
                break
            case ARROW_DOWN:
                accessedSongIndex = (accessedSongIndex + 1) % songsLength
                break
            // FIXME: Left and right arrows are for dev purposes only.
            case ARROW_LEFT:
                this.selectTime(undefined, this.props.selectedTimePlayed - 1)
                break
            case ARROW_RIGHT:
                this.selectTime(undefined, this.props.selectedTimePlayed + 1)
                break
            case ENTER:
                this.selectSong(undefined, accessedSongIndex)
                break
        }

        this.setState({
            accessedSongIndex
        })
    }

    _handlePlayerAccess(keyName) {
        const selectedPlayerOptionIndex = this.props.selectedPlayerOptionIndex

        switch (keyName) {
            case ENTER:
                this.togglePlay()
                break
            case ARROW_LEFT:
                this.selectPlayerOption(undefined, -1)
                break
            case ARROW_RIGHT:
                this.selectPlayerOption()
                break
        }
    }

    _handleDotAccess(keyName) {
        if (keyName === ENTER) {
            this.selectDot(undefined, ALL_DOT_KEYS[this.state.accessedDotIndex])

        } else if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            let accessedDotIndex,
                direction

            switch (keyName) {
                case ARROW_LEFT:
                    direction = ALL_DOT_KEYS.length - 1
                    break
                case ARROW_RIGHT:
                    direction = 1
                    break
            }

            accessedDotIndex = (this.state.accessedDotIndex + direction) % ALL_DOT_KEYS.length

            this.setState({
                accessedDotIndex
            })
        }
    }

    // TODO: If called from handleAccessOn, reset all. If called from handleSectionAccess, only reset the sections that aren't accessed. Will need all sections accessible to fully test.
    _resetAccessedIndices(accessedSectionKey) {

        const accessedSongIndex = accessedSectionKey === SONGS_SECTION ? this.state.accessedSongIndex : this.props.selectedSongIndex

        this.setState({
            accessedSongIndex
        })
    }

    _onKeyDown(e) {
        const { key: keyName } = e

        // TODO: Focus strategically, based on accessed section.
        if (keyName !== 'Tab') {
            this._focusApp()
        }

        switch (keyName) {
            // Toggle selected overview index.
            case 'b':
            case 'B':
                this.selectOverview()
                break
            // Toggle player option index.
            case 'o':
            case 'O':
                this.selectPlayerOption()
                break
            // Toggle isPlaying.
            case 'p':
            case 'P':
                this.togglePlay()
                break
            default:
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

                        switch (accessedSectionKey) {
                            case SONGS_SECTION:
                                this._handleSongAccess(keyName)
                                break
                            case PLAYER_SECTION:
                                this._handlePlayerAccess(keyName)
                                break
                            case OVERVIEW_SECTION:
                                this._handleOverviewAccess(keyName)
                                break
                            case LYRICS_SECTION:
                                this._handleLyricsAccess(keyName)
                                break
                            case DOTS_SECTION:
                                this._handleDotAccess(keyName)
                                break
                        }
                    }
                }
                break
        }
    }

    _deselectAnnotationWithNoSelectedDots(dotKey) {
        const { selectedAnnotationIndex,
                selectedSongIndex,
                selectedDotKeys,
                songs } = this.props

        const selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            annotation = AlbumHelper.getAnnotation(selectedAnnotationIndex, selectedSong),
            presentDotKeys = annotation ? annotation.dotKeys : null,

            // The dotKey being deselected is still selected at this stage.
            postSelectedDotKeys = Object.assign(selectedDotKeys, { [dotKey]: false })

        // Deselect annotation if all its dot keys are deselected.
        if (annotation && !intersects(presentDotKeys, postSelectedDotKeys)) {
            this.selectAnnotation()
        }
    }

    render() {
        const { songs,
                title,
                overview,
                tasks,

                // From Redux.
                selectedSongIndex,
                selectedOverviewIndex,
                selectedPlayerOptionIndex,
                selectedAnnotationIndex,
                selectedVerseIndex,
                selectedTimePlayed,
                selectedDotKeys,
                selectedWikiUrl,
                accessedOn,
                accessedSectionIndex } = this.props,

            { isPlaying,
              accessedAnnotationIndex,
              accessedAnnotationOutlined,
              accessedSongIndex,
              accessedDotIndex,
              hoveredDotIndex,
              hoveredLineIndex,
              selectedLyricColumnIndex,
              isNarrowScreen } = this.state,

            accessedSectionKey = SECTION_KEYS[accessedSectionIndex]

        return (
            <div
                ref="app"
                className="app"
                onClick={this._onBodyClick}
                onKeyDown={this._onKeyDown}
                tabIndex="0"
            >
                <Album
                    songs={songs}
                    albumTitle={title}
                    albumOverview={overview}
                    albumTasks={tasks}

                    isPlaying={isPlaying}

                    accessedOn={accessedOn}
                    accessedSectionKey={accessedSectionKey}

                    accessedAnnotationIndex={accessedAnnotationIndex}
                    accessedAnnotationOutlined={accessedAnnotationOutlined}
                    accessedSongIndex={accessedSongIndex}
                    accessedDotIndex={accessedDotIndex}
                    selectedSongIndex={selectedSongIndex}
                    selectedOverviewIndex={selectedOverviewIndex}
                    selectedPlayerOptionIndex={selectedPlayerOptionIndex}
                    selectedAnnotationIndex={selectedAnnotationIndex}
                    selectedVerseIndex={selectedVerseIndex}
                    selectedTimePlayed={selectedTimePlayed}
                    selectedDotKeys={selectedDotKeys}
                    selectedWikiUrl={selectedWikiUrl}
                    hoveredDotIndex={hoveredDotIndex}
                    hoveredLineIndex={hoveredLineIndex}
                    selectedLyricColumnIndex={selectedLyricColumnIndex}
                    isNarrowScreen={isNarrowScreen}

                    onSongClick={this.selectSong}
                    onPortalClick={this.selectPortal}
                    onWikiUrlClick={this.selectWiki}
                    onAnnotationClick={this.selectAnnotation}
                    onOverviewClick={this.selectOverview}
                    onPlayerOptionClick={this.selectPlayerOption}
                    onPlayButtonClick={this.togglePlay}
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
