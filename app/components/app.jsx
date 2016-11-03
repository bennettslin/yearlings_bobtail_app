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
         selectWikiUrl,
         accessOn,
         accessSectionIndex } from 'redux/actions'
import Album from './album'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_WIKI_URL,
         ACCESSED_ON,
         ACCESSED_SECTION_INDEX,

         PLAYER,
         OVERVIEW,
         LYRICS,
         DOTS,
         SECTION_KEYS,

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
    selectedWikiUrl,
    accessedOn,
    accessedSectionIndex
}) => ({
    // Pass Redux state into component props.
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTime,
    selectedDotKeys,
    selectedOverviewIndex,
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
        selectTime,
        selectDotKey,
        selectOverviewIndex,
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
        this.selectTitle = this.selectTitle.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
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
            accessedAnnotationIndex: props.selectedAnnotationIndex,
            accessedAnnotationOutlined: false,
            accessedSongIndex: props.selectedSongIndex,
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
        window.t = LogHelper.logStorage.bind(LogHelper)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
    }

    /*************************
     * STATE CHANGE HANDLERS *
     *************************/

    selectTitle(e) {
        this.selectSong(e, 0)
    }

    selectSong(e, selectedIndex = 0, selectedIndexKey = SELECTED_SONG_INDEX) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

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
            const lyricsScrollHome = document.getElementsByClassName(`lyrics-scroll-home`)[0]

            if (lyricsScrollHome) {
                scrollIntoViewIfNeeded(lyricsScrollHome, false, {
                    duration: 100
                })
            }

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
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        /**
         * Stored as integer. 0 is auto show bubble, 1 is auto hide.
         */
        this.props.selectOverviewIndex((this.props.selectedOverviewIndex + 1) % 2)
    }

    selectDot(e, selectDotKey) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        const isSelected = !this.props.selectedDotKeys[selectDotKey]
        this.props.selectDotKey(selectDotKey, isSelected)

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected) {
            this._deselectAnnotationWithNoSelectedDots(selectDotKey)
        }
    }

    selectAnnotation(e, selectedIndex = 0) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        this.props.selectAnnotationIndex(selectedIndex)

        this.selectWiki(e)

        // Keep accessed index, even if annotation is deselected.
        if (selectedIndex > 0) {
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
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        const selectedWikiUrl = selectedWiki ?
            `https://en.m.wikipedia.org/wiki/${selectedWiki}` : ''

        // Dispatch Redux action.
        this.props.selectWikiUrl(selectedWikiUrl)
    }

    selectPortal(e, selectedSongIndex, selectedAnnotationIndex) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        this.selectSong(e, selectedSongIndex, SELECTED_SONG_INDEX)
        this.selectAnnotation(e, selectedAnnotationIndex)
    }

    selectVerse(e, selectedVerseIndex = 0) {
        if (e) {
            e.stopPropagation()
            this._handleAccessOn(0)
        }

        this.props.selectVerseIndex(selectedVerseIndex)
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
            while (SECTION_KEYS[accessedSectionIndex] === LYRICS || SECTION_KEYS[accessedSectionIndex] === DOTS) {
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

    // TODO: If called from handleAccessOn, reset all. If called from handleSectionAccess, only reset the sections that aren't accessed. Will need all sections accessible to fully test.
    _resetAccessedIndices(accessedSectionKey) {

        const accessedSongIndex = accessedSectionKey === PLAYER ? this.state.accessedSongIndex : this.props.selectedSongIndex

        this.setState({
            accessedSongIndex
        })
    }

    _handleSongAccess(keyName) {
        // Include option of no song.
        const songsLength = this.props.songs.length + 1
        let accessedSongIndex = this.state.accessedSongIndex

        switch (keyName) {
            case ARROW_UP:
                // Accommodate Javascript unable to handle negative modulo.
                accessedSongIndex  = ((((accessedSongIndex - 1) % songsLength) + songsLength) % songsLength)
                break
            case ARROW_DOWN:
                accessedSongIndex = (accessedSongIndex + 1) % songsLength
                break
            case ENTER:
                this.selectSong(undefined, accessedSongIndex)
                break
        }

        this.setState({
            accessedSongIndex
        })
    }

    _onKeyDown(e) {
        const { key: keyName } = e

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
                    case PLAYER:
                        this._handleSongAccess(keyName)
                        break
                    case OVERVIEW:
                        this._handleOverviewAccess(keyName)
                        break
                    case LYRICS:
                        this._handleLyricsAccess(keyName)
                        break
                    case DOTS:
                        break
                }
            }
        }
    }

    _onBodyClick(e) {
        this._handleAccessOn(0)
        this.selectAnnotation()
        this.selectWiki()

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
                selectedAnnotationIndex,
                selectedVerseIndex,
                selectedTime,
                selectedDotKeys,
                selectedWikiUrl,
                accessedOn,
                accessedSectionIndex } = this.props,

            { accessedAnnotationIndex,
              accessedAnnotationOutlined,
              accessedSongIndex,
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

                    accessedOn={accessedOn}
                    accessedSectionKey={accessedSectionKey}

                    accessedAnnotationIndex={accessedAnnotationIndex}
                    accessedAnnotationOutlined={accessedAnnotationOutlined}
                    accessedSongIndex={accessedSongIndex}
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

                    onSongClick={this.selectSong}
                    onPortalClick={this.selectPortal}
                    onWikiUrlClick={this.selectWiki}
                    onAnnotationClick={this.selectAnnotation}
                    onOverviewClick={this.selectOverview}
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
