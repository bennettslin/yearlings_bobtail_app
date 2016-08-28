import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSongIndex,
         selectAnnotationIndex,
         toggleDotKeys,
         selectOverviewIndex,
         selectWikiUrl } from 'redux/actions'
import Album from './album'
import { SONG_INDEX,
         ANNOTATION_INDEX,
         ACTIVE_DOT_KEYS,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from 'helpers/constants'
import AlbumHelper from 'helpers/album-view-helper'
import LogHelper from 'helpers/log-helper'
import SessionHelper from 'helpers/session-helper'

// FIXME: Get rid of eventually.
import { ALL_DOT_KEYS } from 'helpers/constants'

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
        toggleDotKeys,
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

        this.state = {
            activeDotKeys: {}
        }
    }

    componentWillMount() {
        const { activeSongIndex,
                activeAnnotationIndex,
                // activeDotKeys,
                activeOverviewIndex } = this.props
        /**
         * Retrieve stored indices, if any. Indices start at 1.
         */
        this.handleSongSelect(activeSongIndex, SONG_INDEX)
        this.handleAnnotationSelect(activeAnnotationIndex)
        this.handleDotToggle()
        this.handleOverviewSelect(activeOverviewIndex)

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

    handleSongSelect(activeIndex = 0, activeIndexKey = SONG_INDEX) {
        if (activeIndex >= 0 && activeIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(activeIndex)
            SessionHelper.setInSession(activeIndexKey, activeIndex)

            /**
             * Also reset the stored annotation and overview indices if
             * changing the active song index. Right now, default for
             * overview is 1 for narrative.
             */
            if (activeIndexKey === SONG_INDEX) {
                this.handleAnnotationSelect()
                this.handleOverviewSelect(DEFAULT_OVERVIEW_INDEX)
            }
        }
    }

    handleOverviewSelect(activeIndex) {
        this.props.selectOverviewIndex(activeIndex)
        SessionHelper.setInSession(OVERVIEW_INDEX, activeIndex)
    }

    handleDotToggle(dotKey, isActive = null) {
        let activeDotKeys

        // Initialising, get from session.
        if (!dotKey) {
            activeDotKeys = SessionHelper.getFromSession(ACTIVE_DOT_KEYS)

        // Setting a single dot key.
        } else {
            activeDotKeys = Object.assign({}, this.state.activeDotKeys)
            activeDotKeys[dotKey] = (isActive !== null) ?
                isActive : !this.state.activeDotKeys[dotKey]
        }

        this.setState({
            activeDotKeys
        })

        SessionHelper.setInSession(ACTIVE_DOT_KEYS, JSON.stringify(activeDotKeys))
    }

    handleAnnotationSelect(activeIndex) {
        this.props.selectAnnotationIndex(activeIndex)
        SessionHelper.setInSession(ANNOTATION_INDEX, activeIndex)
    }

    handleWikiUrlSelect(activeWiki) {
        const activeWikiUrl = activeWiki ?
            `https://en.m.wikipedia.org/wiki/${activeWiki}` : null

        // Dispatch Redux action.
        this.props.selectWikiUrl(activeWikiUrl)
    }

    handlePortalSelect(activeSongIndex, activeAnnotationIndex) {
        this.handleSongSelect(activeSongIndex, SONG_INDEX)
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
                // activeDotKeys,
                activeWikiUrl

            } = this.props

        const activeDotKeys = this.state.activeDotKeys

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
