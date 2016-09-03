import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSongIndex,
         selectAnnotationIndex,
         toggleDotKey,
         selectOverviewIndex,
         selectWikiUrl } from 'redux/actions'
import Album from './album'
import { ACTIVE_SONG_INDEX,
         ACTIVE_ANNOTATION_INDEX,
         ACTIVE_DOT_KEYS,
         ACTIVE_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from 'helpers/constants'
import AlbumHelper from 'helpers/album-view-helper'
import { intersects } from 'helpers/dot-helper'
import LogHelper from 'helpers/log-helper'
import SessionHelper from 'helpers/session-helper'

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    activeSongIndex,
    activeAnnotationIndex,
    activeDotKeys,
    activeOverviewIndex,
    activeWikiUrl
}) => ({
    // Pass Redux state into component props.
    activeSongIndex,
    activeAnnotationIndex,
    activeDotKeys,
    activeOverviewIndex,
    activeWikiUrl
})

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
        selectSongIndex,
        selectAnnotationIndex,
        toggleDotKey,
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
        this.handleDotToggle = this.handleDotToggle.bind(this)
        this.handlePortalSelect = this.handlePortalSelect.bind(this)
        this.handleWikiUrlSelect = this.handleWikiUrlSelect.bind(this)
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
                activeSongIndex,
                activeAnnotationIndex } = this.props,

            activeSong = AlbumHelper.getSong(activeSongIndex, songs),
            annotation = AlbumHelper.getAnnotation(activeAnnotationIndex, activeSong),
            lyricObject = LogHelper.getLyricObjectForAnnotationIndex(activeAnnotationIndex, activeSong.lyrics)

        LogHelper.logObject('lyric', lyricObject)
        return LogHelper.logObject('annotation', annotation)
    }

    handleTitleSelect() {
        this.handleSongSelect(0)
    }

    handleSongSelect(activeIndex = 0, activeIndexKey = ACTIVE_SONG_INDEX) {
        if (activeIndex >= 0 && activeIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(activeIndex)
            SessionHelper.setInSession(activeIndexKey, activeIndex)

            /**
             * Also reset the stored annotation and overview indices if
             * changing the active song index. Right now, default for
             * overview is 1 for narrative.
             */
            if (activeIndexKey === ACTIVE_SONG_INDEX) {
                this.handleAnnotationSelect()
                this.handleOverviewSelect(DEFAULT_OVERVIEW_INDEX)
            }
        }
    }

    handleOverviewSelect(activeIndex) {
        this.props.selectOverviewIndex(activeIndex)
        SessionHelper.setInSession(ACTIVE_OVERVIEW_INDEX, activeIndex)
    }

    handleDotToggle(dotKey) {
        const isActive = !this.props.activeDotKeys[dotKey]
        this.props.toggleDotKey(dotKey, isActive)
        SessionHelper.setDotInSession(dotKey, isActive)

        // If this is the last active dot key, then close the annotation.
        if (!isActive) {
            this._deselectAnnotationWithNoActiveDots(dotKey)
        }
    }

    _deselectAnnotationWithNoActiveDots(dotKey) {
        const { activeAnnotationIndex,
                activeSongIndex,
                activeDotKeys,
                songs } = this.props

        const activeSong = AlbumHelper.getSong(activeSongIndex, songs),
            annotation = AlbumHelper.getAnnotation(activeAnnotationIndex, activeSong),
            presentDotKeys = annotation ? annotation.dotKeys : null,

            // The dotKey being toggled inactive is still active at this stage.
            postActiveDotKeys = Object.assign(activeDotKeys, { [dotKey]: false })

        // Deselect annotation if all its dot keys are inactive.
        if (annotation && !intersects(presentDotKeys, postActiveDotKeys)) {
            this.handleAnnotationSelect()
        }
    }

    handleAnnotationSelect(activeIndex = 0, e) {

        // Prevent verse from also being clicked.
        if (e) {
            e.stopPropagation();
        }

        this.props.selectAnnotationIndex(activeIndex)
        SessionHelper.setInSession(ACTIVE_ANNOTATION_INDEX, activeIndex)
    }

    handleWikiUrlSelect(activeWiki) {
        const activeWikiUrl = activeWiki ?
            `https://en.m.wikipedia.org/wiki/${activeWiki}` : null

        // Dispatch Redux action.
        this.props.selectWikiUrl(activeWikiUrl)
    }

    handlePortalSelect(activeSongIndex, activeAnnotationIndex) {
        this.handleSongSelect(activeSongIndex, ACTIVE_SONG_INDEX)
        this.handleAnnotationSelect(activeAnnotationIndex)
    }

    render() {

        const {
                // From album data.
                songs,
                title,
                overviews,
                tasks,

                // From Redux.
                activeSongIndex,
                activeOverviewIndex,
                activeAnnotationIndex,
                activeDotKeys,
                activeWikiUrl

            } = this.props

        return (
            <div className="app">
                <Album
                    songs={songs}
                    albumTitle={title}
                    albumOverviews={overviews}
                    albumTasks={tasks}

                    activeSongIndex={activeSongIndex}
                    activeOverviewIndex={activeOverviewIndex}
                    activeAnnotationIndex={activeAnnotationIndex}
                    activeDotKeys={activeDotKeys}
                    activeWikiUrl={activeWikiUrl}

                    onSongClick={this.handleSongSelect}
                    onPortalClick={this.handlePortalSelect}
                    onWikiUrlClick={this.handleWikiUrlSelect}
                    onAnnotationClick={this.handleAnnotationSelect}
                    onOverviewClick={this.handleOverviewSelect}
                    onDotClick={this.handleDotToggle}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps, bindDispatchToProps)(App)
