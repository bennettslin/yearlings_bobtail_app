import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TitleSection from './classes/title/title-section.jsx';
import SongsSection from './classes/songs/songs-section.jsx';
import NotesSection from './classes/notes/notes-section.jsx';
import AnnotationPopup from './classes/annotation/annotation-popup.jsx';
import WikiPopup from './classes/wiki/wiki-popup.jsx';
import StatsSection from './classes/stats/stats-section.jsx';
import OverviewsSection from './classes/overviews/overviews-section.jsx';
import TasksSection from './classes/tasks/tasks-section.jsx';
import DotsSection from './classes/dots/dots-section.jsx';
import LyricsSection from './classes/lyrics/lyrics-section.jsx';
import { PLAYED_SONG_INDEX_KEY,
         SELECTED_SONG_INDEX_KEY,
         SELECTED_ANNOTATION_INDEX_KEY,
         SELECTED_OVERVIEW_INDEX_KEY,
         DEFAULT_OVERVIEW_INDEX } from './constants/constants.js';
import AppHelper from './helpers/app-helper.js';
import EventHelper from './helpers/event-helper.js';
import LogHelper from './helpers/log-helper.js';
import ProgressHelper from './helpers/progress-helper.js';
import SessionHelper from './helpers/session-helper.js';

/*************
 * CONTAINER *
 *************/

class App extends React.Component {

    constructor(props) {
        const playedSongIndex = SessionHelper.getFromSession(PLAYED_SONG_INDEX_KEY),
            selectedSongIndex = SessionHelper.getFromSession(SELECTED_SONG_INDEX_KEY),
            selectedAnnotationIndex = SessionHelper.getFromSession(SELECTED_ANNOTATION_INDEX_KEY),
            selectedOverviewIndex = SessionHelper.getFromSession(SELECTED_OVERVIEW_INDEX_KEY) || DEFAULT_OVERVIEW_INDEX;

        super(props);

        this.handleTitleSelect = this.handleTitleSelect.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this.handlePortalClick = this.handlePortalClick.bind(this);
        this.handleUrlClick = this.handleUrlClick.bind(this);

        this.state = {
            playedSongIndex,
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedOverviewIndex,
            url: null
        };
    }

    componentWillMount() {
        const state = this.state;
        /**
         * Retrieve stored indices, if any. Indices start at 1.
         * (Played song index isn't presently being used.)
         */
        this.handleSongChange(state.playedSongIndex, PLAYED_SONG_INDEX_KEY);
        this.handleSongChange(state.selectedSongIndex, SELECTED_SONG_INDEX_KEY);
        this.handleAnnotationSelect(state.selectedAnnotationIndex);
        this.handleOverviewSelect(state.selectedOverviewIndex);

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
        const { songs } = this.props,
            { selectedSongIndex,
              selectedAnnotationIndex } = this.state,

            selectedSongObject = AppHelper.getSelectedSongObject(selectedSongIndex, songs),
            annotationObject = AppHelper.getAnnotationObject(selectedAnnotationIndex, selectedSongObject),
            lyricObject = LogHelper.getLyricObjectForAnnotationIndex(selectedAnnotationIndex, selectedSongObject.lyrics);

        LogHelper.logObject('lyric', lyricObject);
        return LogHelper.logObject('annotation', annotationObject);
    }

    _selectIndex(selectedIndex, selectedIndexKey) {
        SessionHelper.setInSession(selectedIndexKey, selectedIndex);

        this.setState({
            [selectedIndexKey]: selectedIndex
        })
    }

    handleTitleSelect() {
        this.handleSongChange(0);
    }

    handleSongChange(selectedIndex = 0, selectedIndexKey = SELECTED_SONG_INDEX_KEY) {
        if (selectedIndex >= 0 && selectedIndex <= this.props.songs.length) {
            // Store song index in session.
            this._selectIndex(selectedIndex, selectedIndexKey);

            /**
             * Also reset the stored annotation and overview indices if
             * changing the selected song index. Right now, default for
             * overview is 1 for narrative.
             */
            if (selectedIndexKey === SELECTED_SONG_INDEX_KEY) {
                this.handleAnnotationSelect();
                this.handleOverviewSelect(DEFAULT_OVERVIEW_INDEX);
            }
        }
    }

    handleOverviewSelect(selectedIndex) {
        this._selectIndex(selectedIndex, SELECTED_OVERVIEW_INDEX_KEY);
    }

    handleAnnotationSelect(selectedIndex) {
        this._selectIndex(selectedIndex, SELECTED_ANNOTATION_INDEX_KEY);
    }

    handleUrlClick(urlString) {
        const url = urlString ?
            `https://en.m.wikipedia.org/wiki/${urlString}` : null;

        this.setState({
            url
        });
    }

    handlePortalClick(selectedSongIndex, selectedAnnotationIndex) {
        this.handleSongChange(selectedSongIndex, SELECTED_SONG_INDEX_KEY);
        this.handleAnnotationSelect(selectedAnnotationIndex);
    }

    render() {

        const { songs,
                overviews,
                tasks } = this.props,

            { playedSongIndex,
              selectedSongIndex,
              selectedAnnotationIndex,
              selectedOverviewIndex,
              url } = this.state,

            selectedSongObject = AppHelper.getSelectedSongObject(selectedSongIndex, songs),
            selectedSongLyrics = selectedSongObject.lyrics,
            selectedSongAnnotations = selectedSongObject.annotations,
            selectedSongDotKeys = selectedSongObject.dotKeys,

            overviewRichText = AppHelper.getOverviewRichText(selectedOverviewIndex, selectedSongObject, overviews),
            taskObjects = AppHelper.getTaskObjects(selectedSongObject, tasks),
            allTaskObjects = ProgressHelper.getAllTaskObjects(tasks, songs),
            annotationObject = AppHelper.getAnnotationObject(selectedAnnotationIndex, selectedSongObject),
            portalObjects = AppHelper.getPortalObjects(annotationObject, songs);

        return (
            <AppView {...this.props}
                selectedSongIndex={selectedSongIndex}
                selectedOverviewIndex={selectedOverviewIndex}

                selectedSongLyrics={selectedSongLyrics}
                selectedSongAnnotations={selectedSongAnnotations}
                selectedSongDotKeys={selectedSongDotKeys}

                wikiUrl={url}
                overviewRichText={overviewRichText}

                taskObjects={taskObjects}
                allTaskObjects={allTaskObjects}
                annotationObject={annotationObject}
                portalObjects={portalObjects}

                onTitleClick={this.handleTitleSelect}
                onSongClick={this.handleSongChange}
                onPortalClick={this.handlePortalClick}
                onUrlClick={this.handleUrlClick}
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
    selectedSongIndex,
    selectedOverviewIndex,

    selectedSongLyrics,
    selectedSongAnnotations,
    selectedSongDotKeys,

    wikiUrl,
    overviewRichText,

    taskObjects,
    allTaskObjects,
    annotationObject,
    portalObjects,

    onTitleClick,
    onSongClick,
    onPortalClick,
    onUrlClick,
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
                selectedSongIndex={selectedSongIndex}
                onSongClick={onSongClick}
            />
        </div>
        <div className="field centre-field">
            <AnnotationPopup
                annotationObject={annotationObject}
                portalObjects={portalObjects}
                onPortalClick={onPortalClick}
                onUrlClick={onUrlClick}
                onCloseClick={onAnnotationClick}
            />
            <WikiPopup
                url={wikiUrl}
                onCloseClick={onUrlClick}
            />
            {/* Show scrap notes if no selected song, otherwise show dots. */}
            {!selectedSongIndex ?
                <NotesSection /> :
                <DotsSection dotKeys={selectedSongDotKeys} />
            }
            <StatsSection
                lyrics={selectedSongLyrics}
                annotations={selectedSongAnnotations}
            />
            <OverviewsSection
                overviewRichText={overviewRichText}
                selectedOverviewIndex={selectedOverviewIndex}
                onOverviewClick={onOverviewClick}
            />
            <TasksSection
                tasks={taskObjects}
            />
        </div>
        {selectedSongIndex ?
             <div className="field right-field">
                <LyricsSection
                    selectedSongLyrics={selectedSongLyrics}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
    </div>
);

function mapReduxStateToProps(reduxState) {
    // From Udemy tutorial. Passes Redux state into component props.
    return {};
}

function mapDispatchToProps(dispatch) {
    /**
     * When an action is called, the result is passed to all reducers, which
     * then pass it back into component props.
     */
    return bindActionCreators({}, dispatch);
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(App);
