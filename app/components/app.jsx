import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSongIndex,
         selectAnnotationIndex,
         selectTime,
         selectDotKey,
         selectOverviewIndex,
         selectWikiUrl } from 'redux/actions'
import Album from './album'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from 'helpers/constants'
import AlbumHelper from 'helpers/album-view-helper'
import { intersects } from 'helpers/dot-helper'
import LogHelper from 'helpers/log-helper'
import SessionHelper from 'helpers/session-helper'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedTime,
    selectedDotKeys,
    selectedOverviewIndex,
    selectedWikiUrl
}) => ({
    // Pass Redux state into component props.
    selectedSongIndex,
    selectedAnnotationIndex,
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
        this.handleTitleSelect = this.handleTitleSelect.bind(this)
        this.handleSongSelect = this.handleSongSelect.bind(this)
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this)
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this)
        this.handleTimeSelect = this.handleTimeSelect.bind(this)
        this.handleDotSelect = this.handleDotSelect.bind(this)
        this.handleDotHover = this.handleDotHover.bind(this)
        this.handleLineHover = this.handleLineHover.bind(this)
        this.handlePortalSelect = this.handlePortalSelect.bind(this)
        this.handleWikiUrlSelect = this.handleWikiUrlSelect.bind(this)
        this._onBodyClick = this._onBodyClick.bind(this)

        this.state = {
            hoveredDotIndex: 0,
            hoveredLineIndex: 0
        }
    }

    componentWillMount() {
        this._assignLogFunctions()
    }

    _assignLogFunctions() {
        window.s = this._logStorage
        window.a = this._logAnchorAnnotation.bind(this)
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

    handleTitleSelect(e) {
        this.handleSongSelect(e, 0)
    }

    handleSongSelect(e, selectedIndex = 0, selectedIndexKey = SELECTED_SONG_INDEX) {
        if (e) { e.stopPropagation() }

        if (selectedIndex >= 0 && selectedIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(selectedIndex)
            SessionHelper.setInSession(selectedIndexKey, selectedIndex)

            /**
             * Also reset the stored annotation, time, and overview if changing
             * the selected song index. Right now, default for overview is 1 for
             * narrative.
             */
            if (selectedIndexKey === SELECTED_SONG_INDEX) {
                this.handleAnnotationSelect()
                this.handleOverviewSelect(e, DEFAULT_OVERVIEW_INDEX)
                this.handleTimeSelect()
            }
        }
    }

    handleOverviewSelect(e, selectedIndex) {
        if (e) { e.stopPropagation() }

        this.props.selectOverviewIndex(selectedIndex)
        SessionHelper.setInSession(SELECTED_OVERVIEW_INDEX, selectedIndex)
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
        SessionHelper.setDotInSession(selectDotKey, isSelected)

        // If this is the last selected dot key, then close the annotation.
        if (!isSelected) {
            this._deselectAnnotationWithNoSelectedDots(selectDotKey)
        }
    }

    handleAnnotationSelect(e, selectedIndex = 0) {
        if (e) { e.stopPropagation() }

        this.props.selectAnnotationIndex(selectedIndex)
        SessionHelper.setInSession(SELECTED_ANNOTATION_INDEX, selectedIndex)

        this.handleWikiUrlSelect(e)
    }

    handleWikiUrlSelect(e, selectedWiki) {
        if (e) { e.stopPropagation() }

        const selectedWikiUrl = selectedWiki ?
            `https://en.m.wikipedia.org/wiki/${selectedWiki}` : null

        // Dispatch Redux action.
        this.props.selectWikiUrl(selectedWikiUrl)
    }

    handlePortalSelect(e, selectedSongIndex, selectedAnnotationIndex) {
        if (e) { e.stopPropagation() }

        this.handleSongSelect(e, selectedSongIndex, SELECTED_SONG_INDEX)
        this.handleAnnotationSelect(e, selectedAnnotationIndex)
    }

    handleTimeSelect(e, selectedTime = 0) {
        if (e) { e.stopPropagation() }

        this.props.selectTime(selectedTime)
        SessionHelper.setInSession(SELECTED_TIME, selectedTime)
    }

    _onBodyClick(e) {
        this.handleAnnotationSelect()
        this.handleWikiUrlSelect()
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

    render() {

        const {
                // From album data.
                songs,
                title,
                overviews,
                tasks,

                // From Redux.
                selectedSongIndex,
                selectedOverviewIndex,
                selectedAnnotationIndex,
                selectedTime,
                selectedDotKeys,
                selectedWikiUrl

            } = this.props,
            { hoveredDotIndex,
              hoveredLineIndex } = this.state

        return (
            <div className="app" onClick={this._onBodyClick}>
                <Album
                    songs={songs}
                    albumTitle={title}
                    albumOverviews={overviews}
                    albumTasks={tasks}

                    selectedSongIndex={selectedSongIndex}
                    selectedOverviewIndex={selectedOverviewIndex}
                    selectedAnnotationIndex={selectedAnnotationIndex}
                    selectedTime={selectedTime}
                    selectedDotKeys={selectedDotKeys}
                    selectedWikiUrl={selectedWikiUrl}
                    hoveredDotIndex={hoveredDotIndex}
                    hoveredLineIndex={hoveredLineIndex}

                    onSongClick={this.handleSongSelect}
                    onPortalClick={this.handlePortalSelect}
                    onWikiUrlClick={this.handleWikiUrlSelect}
                    onAnnotationClick={this.handleAnnotationSelect}
                    onOverviewClick={this.handleOverviewSelect}
                    onTimeClick={this.handleTimeSelect}
                    onDotClick={this.handleDotSelect}
                    onDotHover={this.handleDotHover}
                    onLineHover={this.handleLineHover}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
