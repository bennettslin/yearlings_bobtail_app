import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSongIndex,
         selectAnnotationIndex,
         selectOverviewIndex,
         selectWikiUrl } from '../redux/actionCreators/index.js';

import TitleSection from './title/title-section.jsx';
import SongsSection from './songs/songs-section.jsx';
import NotesSection from './notes/notes-section.jsx';
import AnnotationPopup from './annotation/annotation-popup.jsx';
import WikiPopup from './wiki/wiki-popup.jsx';
import StatsSection from './stats/stats-section.jsx';
import OverviewsSection from './overviews/overviews-section.jsx';
import TasksSection from './tasks/tasks-section.jsx';
import DotsSection from './dots/dots-section.jsx';
import LyricsSection from './lyrics/lyrics-section.jsx';
import { SONG_INDEX,
         ANNOTATION_INDEX,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX } from '../helpers/constants.js';
import AppHelper from '../helpers/app-helper.js';
import EventHelper from '../helpers/event-helper.js';
import LogHelper from '../helpers/log-helper.js';
import ProgressHelper from '../helpers/progress-helper.js';
import SessionHelper from '../helpers/session-helper.js';

/*************
 * CONTAINER *
 *************/

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleTitleSelect = this.handleTitleSelect.bind(this);
        this.handleSongSelect = this.handleSongSelect.bind(this);
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this.handlePortalSelect = this.handlePortalSelect.bind(this);
        this.handleWikiUrlSelect = this.handleWikiUrlSelect.bind(this);
    }

    componentWillMount() {
        const { activeSongIndex,
                activeAnnotationIndex,
                activeOverviewIndex } = this.props;
        /**
         * Retrieve stored indices, if any. Indices start at 1.
         */
        this.handleSongSelect(activeSongIndex, SONG_INDEX);
        this.handleAnnotationSelect(activeAnnotationIndex);
        this.handleOverviewSelect(activeOverviewIndex);

        this._assignLogFunctions();
    }

    _assignLogFunctions() {
        window.s = this._logStorage;
        window.a = this._logAnchorAnnotation.bind(this);
    }

    _logStorage() {
        // Global helper's storage object is the default.
        return LogHelper.logObject('window storage');
    }

    _logAnchorAnnotation() {
        const { songs,
                activeSongIndex,
                activeAnnotationIndex } = this.props,

            activeSongObject = AppHelper.getSongObject(activeSongIndex, songs),
            annotationObject = AppHelper.getAnnotationObject(activeAnnotationIndex, activeSongObject),
            lyricObject = LogHelper.getLyricObjectForAnnotationIndex(activeAnnotationIndex, activeSongObject.lyrics);

        LogHelper.logObject('lyric', lyricObject);
        return LogHelper.logObject('annotation', annotationObject);
    }

    handleTitleSelect() {
        this.handleSongSelect(0);
    }

    handleSongSelect(activeIndex = 0, activeIndexKey = SONG_INDEX) {
        if (activeIndex >= 0 && activeIndex <= this.props.songs.length) {
            // Store song index in session.

            this.props.selectSongIndex(activeIndex);
            SessionHelper.setInSession(activeIndexKey, activeIndex);

            /**
             * Also reset the stored annotation and overview indices if
             * changing the active song index. Right now, default for
             * overview is 1 for narrative.
             */
            if (activeIndexKey === SONG_INDEX) {
                this.handleAnnotationSelect();
                this.handleOverviewSelect(DEFAULT_OVERVIEW_INDEX);
            }
        }
    }

    handleOverviewSelect(activeIndex) {
        this.props.selectOverviewIndex(activeIndex);
        SessionHelper.setInSession(OVERVIEW_INDEX, activeIndex);
    }

    handleAnnotationSelect(activeIndex) {
        this.props.selectAnnotationIndex(activeIndex);
        SessionHelper.setInSession(ANNOTATION_INDEX, activeIndex);
    }

    handleWikiUrlSelect(urlString) {
        const activeWikiUrl = urlString ?
            `https://en.m.wikipedia.org/wiki/${urlString}` : null;

        // Dispatch Redux action.
        this.props.selectWikiUrl(activeWikiUrl);
    }

    handlePortalSelect(activeSongIndex, activeAnnotationIndex) {
        this.handleSongSelect(activeSongIndex, SONG_INDEX);
        this.handleAnnotationSelect(activeAnnotationIndex);
    }

    render() {
        const {

                // From album data.
                songs,
                overviews,
                tasks,

                // From Redux.
                activeSongIndex,
                activeAnnotationIndex,
                activeOverviewIndex,
                activeWikiUrl

            } = this.props,

            activeSongObject = AppHelper.getSongObject(activeSongIndex, songs),
            activeSongLyrics = activeSongObject.lyrics,
            activeSongAnnotations = activeSongObject.annotations,
            activeSongDotKeys = activeSongObject.dotKeys,

            overviewRichText = AppHelper.getOverviewRichText(activeOverviewIndex, activeSongObject, overviews),
            taskObjects = AppHelper.getTaskObjects(activeSongObject, tasks),
            allTaskObjects = ProgressHelper.getAllTaskObjects(tasks, songs),
            annotationObject = AppHelper.getAnnotationObject(activeAnnotationIndex, activeSongObject),
            portalObjects = AppHelper.getPortalObjects(annotationObject, songs);

        return (
            <AppView {...this.props}
                activeSongIndex={activeSongIndex}
                activeOverviewIndex={activeOverviewIndex}

                activeSongLyrics={activeSongLyrics}
                activeSongAnnotations={activeSongAnnotations}
                activeSongDotKeys={activeSongDotKeys}

                activeWikiUrl={activeWikiUrl}
                overviewRichText={overviewRichText}

                taskObjects={taskObjects}
                allTaskObjects={allTaskObjects}
                annotationObject={annotationObject}
                portalObjects={portalObjects}

                onTitleClick={this.handleTitleSelect}
                onSongClick={this.handleSongSelect}
                onPortalClick={this.handlePortalSelect}
                onWikiUrlClick={this.handleWikiUrlSelect}
                onAnnotationClick={this.handleAnnotationSelect}
                onOverviewClick={this.handleOverviewSelect}
            />
        );
    }
};

/****************
 * PRESENTATION *
 ****************/

const AppView = ({

    // From props.
    title,
    songs,

    // From controller.
    activeSongIndex,
    activeOverviewIndex,

    activeSongLyrics,
    activeSongAnnotations,
    activeSongDotKeys,

    activeWikiUrl,
    overviewRichText,

    taskObjects,
    allTaskObjects,
    annotationObject,
    portalObjects,

    onTitleClick,
    onSongClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onOverviewClick

}) => (

    <div className="app">
        <div className="field left-field">
            <TitleSection
                titleText={title}
                onClick={onTitleClick}
            />
            <SongsSection
                songs={songs}
                allTasks={allTaskObjects}
                activeSongIndex={activeSongIndex}
                onSongClick={onSongClick}
            />
        </div>
        <div className="field centre-field">
            <AnnotationPopup
                annotationObject={annotationObject}
                portalObjects={portalObjects}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onCloseClick={onAnnotationClick}
            />
            <WikiPopup
                activeWikiUrl={activeWikiUrl}
                onCloseClick={onWikiUrlClick}
            />
            {/* Show scrap notes if no active song, otherwise show dots. */}
            {!activeSongIndex ?
                <NotesSection /> :
                <DotsSection dotKeys={activeSongDotKeys} />
            }
            <StatsSection
                lyrics={activeSongLyrics}
                annotations={activeSongAnnotations}
            />
            <OverviewsSection
                overviewRichText={overviewRichText}
                activeOverviewIndex={activeOverviewIndex}
                onOverviewClick={onOverviewClick}
            />
            <TasksSection
                tasks={taskObjects}
            />
        </div>
        {activeSongIndex ?
             <div className="field right-field">
                <LyricsSection
                    songLyrics={activeSongLyrics}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
    </div>
);

/*********
 * STORE *
 *********/

const passReduxStateToProps = ({
    activeSongIndex,
    activeAnnotationIndex,
    activeOverviewIndex,
    activeWikiUrl
}) => ({
    // Pass Redux state into component props.
    activeSongIndex,
    activeAnnotationIndex,
    activeOverviewIndex,
    activeWikiUrl
});

const bindDispatchToProps = (dispatch) => (
    // Bind Redux action creators to component props.
    bindActionCreators({
        selectSongIndex,
        selectAnnotationIndex,
        selectOverviewIndex,
        selectWikiUrl
    }, dispatch)
);

export default connect(passReduxStateToProps, bindDispatchToProps)(App);
