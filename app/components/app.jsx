import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSongIndex,
         selectAnnotationIndex,
         selectVerseIndex,
         selectTime,
         selectDotKey,
         selectOverviewIndex,
         selectWikiUrl } from 'redux/actions'
import Album from './album'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_WIKI_URL,
         DEFAULT_OVERVIEW_INDEX,
         ARROW_LEFT,
         ARROW_RIGHT,
         ARROW_UP,
         ARROW_DOWN,
         ENTER,
         ESCAPE,
         SPACE } from 'helpers/constants'
import AlbumHelper from 'helpers/album-view-helper'
import { intersects } from 'helpers/dot-helper'
import LogHelper from 'helpers/log-helper'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTime,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedWikiUrl
}) => ({
    // Pass Redux state into component props.
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTime,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedWikiUrl
})

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
        selectSongIndex,
        selectAnnotationIndex,
        selectVerseIndex,
        selectTime,
        selectDotKey,
        selectOverviewIndex,
        selectWikiUrl
    }, dispatch)
)

/*************
 * CONTAINER *
 *************/

class App extends Component {

    constructor(props) {
        super(props)

        // Bind this to event handlers.
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleSongSelect = this.handleSongSelect.bind(this)
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this)
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this)
        this.handleVerseSelect = this.handleVerseSelect.bind(this)
        this.handleDotSelect = this.handleDotSelect.bind(this)
        this.handleDotHover = this.handleDotHover.bind(this)
        this.handleLineHover = this.handleLineHover.bind(this)
        this.handlePortalSelect = this.handlePortalSelect.bind(this)
        this.handleWikiUrlSelect = this.handleWikiUrlSelect.bind(this)
        this.handleScreenWidthSelect = this.handleScreenWidthSelect.bind(this)
        this.handleLyricColumnSelect = this.handleLyricColumnSelect.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)
        this._onKeyDown = this._onKeyDown.bind(this)

        /**
         * TODO: Putting these hovered states in app for now rather than the
         * relevant child components, because I anticipate that in mobile these
         * states will be toggled and persisted by clicks. (And untoggled upon
         * scroll.) Revisit whether this is the best idea.
         */
        this.state = {
            accessedAnnotationIndex: props.selectedAnnotationIndex,
            accessedAnnotationOutlined: false,
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
        ReactDOM.findDOMNode(this.refs.app).focus()
    }

    _assignLogFunctions() {
        window.s = this._logStorage
        window.a = this._logAnchorAnnotation.bind(this)
        window.g = this._logSong.bind(this)
    }

    _logStorage() {
        // Global helper's storage object is the default.
        return LogHelper.logObject('window storage')
    }

    _logAnchorAnnotation() {
        const { songs,
                selectedSongIndex,
                selectedAnnotationIndex } = this.props,

            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            annotation = AlbumHelper.getAnnotation(selectedAnnotationIndex, selectedSong),
            lyricObject = LogHelper.getLyricObjectForAnnotationIndex(selectedAnnotationIndex, selectedSong.lyrics)

        LogHelper.logObject('lyric', lyricObject)
        return LogHelper.logObject('annotation', annotation)
    }

    _logSong() {
        const { songs,
                selectedSongIndex } = this.props,

            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            copiedSong = Object.assign({}, selectedSong)

        delete copiedSong.annotations
        delete copiedSong.lyrics
        delete copiedSong.overviews
        delete copiedSong.tasks

        return LogHelper.logObject('copiedSong', copiedSong)
    }

    handleTitleSelect(e) {
        this.handleSongSelect(e, 0)
    }

    handleSongSelect(e, selectedIndex = 0, selectedIndexKey = SELECTED_SONG_INDEX) {
        if (e) { e.stopPropagation() }

        if (selectedIndex >= 0 && selectedIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(selectedIndex)

            /**
             * Also reset the stored annotation, time, and overview if changing
             * the selected song index. Right now, default for overview is 1 for
             * narrative.
             */
            if (selectedIndexKey === SELECTED_SONG_INDEX) {
                this.handleAnnotationSelect()
                this.handleOverviewSelect(e, DEFAULT_OVERVIEW_INDEX)
                this.handleVerseSelect()
            }

            // Scroll to top of lyrics.
            const lyricsScrollHome = document.getElementsByClassName(`lyrics-scroll-home`)[0]

            if (lyricsScrollHome) {
                scrollIntoViewIfNeeded(lyricsScrollHome, false, {
                    duration: 100
                })
            }

            /**
             * Keep annotation anchor access outlined if already so, and just
             * set the index to 1. Otherwise set it to 0.
             */
            this.setState({
                accessedAnnotationIndex: this.state.accessedAnnotationOutlined ? 1 : 0
            })
        }
    }

    handleOverviewSelect(e, selectedIndex) {
        if (e) { e.stopPropagation() }

        this.props.selectOverviewIndex(selectedIndex)
    }

    handleDotHover(e, hoveredDotIndex = 0) {
        // Hovered dot index sets the text, as well as the position of the tooltip.

        this.setState({
            hoveredDotIndex
        })
    }

    handleLineHover(e, hoveredLineIndex = 0) {
        this.setState({
            hoveredLineIndex
        })
    }

    handleDotSelect(e, selectDotKey) {
        if (e) { e.stopPropagation() }

        const isSelected = !this.props.selectedDotKeys[selectDotKey]
        this.props.selectDotKey(selectDotKey, isSelected)

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected) {
            this._deselectAnnotationWithNoSelectedDots(selectDotKey)
        }
    }

    handleAnnotationSelect(e, selectedIndex = 0) {
        if (e) { e.stopPropagation() }

        this.props.selectAnnotationIndex(selectedIndex)

        this.handleWikiUrlSelect(e)

        // Keep accessed index, even if annotation is deselected.
        if (selectedIndex !== 0) {
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

    handleWikiUrlSelect(e, selectedWiki) {
        if (e) { e.stopPropagation() }

        const selectedWikiUrl = selectedWiki ?
            `https://en.m.wikipedia.org/wiki/${selectedWiki}` : ''

        // Dispatch Redux action.
        this.props.selectWikiUrl(selectedWikiUrl)
    }

    handlePortalSelect(e, selectedSongIndex, selectedAnnotationIndex) {
        if (e) { e.stopPropagation() }

        this.handleSongSelect(e, selectedSongIndex, SELECTED_SONG_INDEX)
        this.handleAnnotationSelect(e, selectedAnnotationIndex)
    }

    handleVerseSelect(e, selectedVerseIndex = 0) {
        if (e) { e.stopPropagation() }

        this.props.selectVerseIndex(selectedVerseIndex)
    }

    _handleAccessedAnnotationSelect(keyName) {
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
                        this.handleAnnotationSelect()
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
                    this.handleAnnotationSelect()
                }
                break
        }

        if (willSelectAnnotation) {
            this.handleAnnotationSelect(undefined, accessedAnnotationIndex)
        }

        if (willScrollToAnchor) {
            const annotationAnchor = document.getElementsByClassName(`annotation-${accessedAnnotationIndex}`)[0]
            if (annotationAnchor) {
                scrollIntoViewIfNeeded(annotationAnchor, false, {
                    duration: 100
                })
            }
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
            this.handleVerseSelect(undefined, selectedVerseIndex - 1)
        } else if (keyName === ARROW_DOWN) {
            this.handleVerseSelect(undefined, selectedVerseIndex + 1)
        }
    }

    _onKeyDown(e) {
        const { key: keyName } = e
        switch (keyName) {
            case ARROW_LEFT:
            case ARROW_RIGHT:
            case ENTER:
            case ESCAPE:
            case SPACE:
                this._handleAccessedAnnotationSelect(keyName)
                break
            case ARROW_UP:
            case ARROW_DOWN:
                this._handleAccessedVerseSelect(keyName)
                break
        }
    }

    _onBodyClick(e) {
        this.handleAnnotationSelect()
        this.handleWikiUrlSelect()

        this.setState({
            accessedAnnotationOutlined: false
        })
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
            this.handleAnnotationSelect()
        }
    }

    handleScreenWidthSelect(e) {
        const { isNarrowScreen } = this.state,
            newLyricColumnIndex = !isNarrowScreen ? 1 : 0

        this.handleLyricColumnSelect(e, newLyricColumnIndex)

        this.setState({
            isNarrowScreen: !isNarrowScreen
        })
    }

    handleLyricColumnSelect(e, selectedIndex = 0) {
        this.setState({
            selectedLyricColumnIndex: selectedIndex
        })
    }

    render() {
        const { songs,
                title,
                overviews,
                tasks,

                // From Redux.
                selectedSongIndex,
                selectedOverviewIndex,
                selectedAnnotationIndex,
                selectedVerseIndex,
                selectedTime,
                selectedDotKeys,
                selectedWikiUrl } = this.props,

            { accessedAnnotationIndex,
              accessedAnnotationOutlined,
              hoveredDotIndex,
              hoveredLineIndex,
              selectedLyricColumnIndex,
              isNarrowScreen } = this.state

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
                    albumOverviews={overviews}
                    albumTasks={tasks}

                    accessedAnnotationIndex={accessedAnnotationIndex}
                    accessedAnnotationOutlined={accessedAnnotationOutlined}
                    selectedSongIndex={selectedSongIndex}
                    selectedOverviewIndex={selectedOverviewIndex}
                    selectedAnnotationIndex={selectedAnnotationIndex}
                    selectedVerseIndex={selectedVerseIndex}
                    selectedTime={selectedTime}
                    selectedDotKeys={selectedDotKeys}
                    selectedWikiUrl={selectedWikiUrl}
                    hoveredDotIndex={hoveredDotIndex}
                    hoveredLineIndex={hoveredLineIndex}
                    selectedLyricColumnIndex={selectedLyricColumnIndex}
                    isNarrowScreen={isNarrowScreen}

                    onSongClick={this.handleSongSelect}
                    onPortalClick={this.handlePortalSelect}
                    onWikiUrlClick={this.handleWikiUrlSelect}
                    onAnnotationClick={this.handleAnnotationSelect}
                    onOverviewClick={this.handleOverviewSelect}
                    onVerseClick={this.handleVerseSelect}
                    onDotClick={this.handleDotSelect}
                    onDotHover={this.handleDotHover}
                    onLineHover={this.handleLineHover}
                    onScreenWidthClick={this.handleScreenWidthSelect}
                    onLyricColumnClick={this.handleLyricColumnSelect}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
