import React from 'react';
import TitleSection from './classes/title-section.jsx';
import SongsSection from './classes/songs/songs-section.jsx';
import NotesSection from './classes/notes-section.jsx';
import AnnotationPopup from './classes/annotation/annotation-popup.jsx';
import UrlPopup from './classes/url/url-popup.jsx';
import StatsSection from './classes/stats/stats-section.jsx';
import OverviewsSection from './classes/overviews/overviews-section.jsx';
import TasksSection from './classes/tasks/tasks-section.jsx';
import DotsSection from './classes/dots/dots-section.jsx';
import LyricsSection from './classes/lyrics/lyrics-section.jsx';
import Constants from './constants/constants.js';
import EventHelper from './helpers/event-helper.js';
import LogHelper from './helpers/log-helper.js';
import ProgressHelper from './helpers/progress-helper.js';
import SessionHelper from './helpers/session-helper.js';

const defaultProps = {
    title: 'Yearling\'s Bobtail',
    songs: [],
    overviews: []
};

const PLAYED_SONG_INDEX_KEY = Constants.sessionKeys.PLAYED_SONG_INDEX_KEY,
    SELECTED_SONG_INDEX_KEY = Constants.sessionKeys.SELECTED_SONG_INDEX_KEY,
    SELECTED_ANNOTATION_INDEX_KEY = Constants.sessionKeys.SELECTED_ANNOTATION_INDEX_KEY,
    SELECTED_OVERVIEW_INDEX_KEY = Constants.sessionKeys.SELECTED_OVERVIEW_INDEX_KEY,
    DEFAULT_OVERVIEW_INDEX = 1;

class App extends React.Component {

    constructor(props) {
        const playedSongIndex = SessionHelper.getFromSession(PLAYED_SONG_INDEX_KEY),
            selectedSongIndex = SessionHelper.getFromSession(SELECTED_SONG_INDEX_KEY),
            selectedAnnotationIndex = SessionHelper.getFromSession(SELECTED_ANNOTATION_INDEX_KEY),
            selectedOverviewIndex = SessionHelper.getFromSession(SELECTED_OVERVIEW_INDEX_KEY) || DEFAULT_OVERVIEW_INDEX;

        super(props);

        this._handleBodyClick = this._handleBodyClick.bind(this);
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
        const state = this.state,
            selectedSongObject = this._getSelectedSongObject(),
            annotationObject = this._getAnnotationObject(selectedSongObject),
            lyricObject = LogHelper.getLyricObjectForAnnotationIndex(state.selectedAnnotationIndex, selectedSongObject.lyrics);

        LogHelper.logObject('lyric', lyricObject);
        return LogHelper.logObject('annotation', annotationObject);
    }

    _handleBodyClick(e) {
        // const annotation = this.refs.annotationPopup.refs.annotationSection ?
        //     this.refs.annotationPopup.refs.annotationSection.refs.annotation : null;

        // /**
        //  * Close annotation if anywhere outside annotation is clicked, with the
        //  * exception of another link.
        //  */
        // if (annotation &&
        //     annotation !== e.target &&
        //     !annotation.contains(e.target) &&
        //     !EventHelper.hasParentWithTagName(e.target, 'a')) {

        //     this.handleAnnotationSelect();
        // }

        // // FIXME: Duplicate code.
        // const url = this.refs.urlPopup.refs.urlSection ?
        //     this.refs.urlPopup.refs.urlSection.refs.url : null;

        // /**
        //  * Close url if anywhere outside url is clicked, with the
        //  * exception of another link.
        //  */
        // if (url &&
        //     url !== e.target &&
        //     !url.contains(e.target) &&
        //     !EventHelper.hasParentWithTagName(e.target, 'a')) {

        //     this.handleUrlClick();
        // }
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
        // FIXME: Allow for non-Wikipedia urls?
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

    _getSelectedSongObject() {
        const selectedSongIndex = this.state.selectedSongIndex;

        return selectedSongIndex ?
            this.props.songs[selectedSongIndex - 1] : {};
    }

    _getOverviewRichText(selectedSongObject) {
        const state = this.state,
            selectedOverviewIndex = state.selectedOverviewIndex;

        if (selectedOverviewIndex) {
            const songOverviews = selectedSongObject.overviews;

            // If no song overviews, then return album overviews.
            return songOverviews ?
                songOverviews[selectedOverviewIndex - 1] :
                this.props.overviews[selectedOverviewIndex - 1];
        } else {
            return null;
        }
    }

    _getTaskObjects(selectedSongObject) {
        const songTasks = selectedSongObject.tasks;

        // If no song tasks, then return album tasks.
        return songTasks ? songTasks : this.props.tasks;
    }

    _getAnnotationObject(selectedSongObject) {
        const annotations = selectedSongObject.annotations,
            selectedAnnotationIndex = this.state.selectedAnnotationIndex;

        return annotations ?
                annotations[selectedAnnotationIndex - 1] : null;
    }

    _getPortalObjects(annotationObject) {
        if (annotationObject) {
            const portalReferences = annotationObject.portalReferences;

            // Portal objects contain portal titles and indices.
            return portalReferences ? portalReferences.map((portalReference) => {
                const songIndex = portalReference.songIndex,
                    annotationIndex = portalReference.annotationIndex,
                    song = this.props.songs[songIndex - 1],
                    annotation = song.annotations[annotationIndex - 1];

                return {
                    songIndex: songIndex,
                    annotationIndex: annotationIndex,
                    songTitle: song.title,
                    annotationTitle: annotation.title
                }
            }) : null;
        } else {
            return null;
        }
    }

    render() {
        const props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            selectedSongIndex = state.selectedSongIndex,
            selectedSongObject = this._getSelectedSongObject(),
            overviewRichText = this._getOverviewRichText(selectedSongObject),
            taskObjects = this._getTaskObjects(selectedSongObject),
            allTaskObjects = ProgressHelper.getAllTaskObjects(props.tasks, props.songs),
            annotationObject = this._getAnnotationObject(selectedSongObject),
            portalObjects = this._getPortalObjects(annotationObject);

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="field left-field">
                    <TitleSection
                        titleText={props.title}
                        onClick={this.handleTitleSelect}
                    />
                    <SongsSection
                        songs={props.songs}
                        allTasks={allTaskObjects}
                        selectedSongIndex={selectedSongIndex}
                        onSongClick={this.handleSongChange}
                    />
                </div>
                <div className="field centre-field">
                    <AnnotationPopup
                        ref="annotationPopup"
                        annotationObject={annotationObject}
                        portalObjects={portalObjects}
                        handlePortalClick={this.handlePortalClick}
                        handleUrlClick={this.handleUrlClick}
                        onCloseClick={this.handleAnnotationSelect}
                    />
                    <UrlPopup
                        ref="urlPopup"
                        url={state.url}
                        onCloseClick={this.handleUrlClick}
                    />
                    {/* Show scrap notes if no selected song, otherwise show dots. */}
                    {!selectedSongIndex ?
                        <NotesSection /> :
                        <DotsSection dotKeys={selectedSongObject.dotKeys} />
                    }
                    <StatsSection
                        lyrics={selectedSongObject.lyrics}
                        annotations={selectedSongObject.annotations}
                    />
                    <OverviewsSection
                        overviewRichText={overviewRichText}
                        selectedOverviewIndex={state.selectedOverviewIndex}
                        onOverviewClick={this.handleOverviewSelect}
                    />
                    <TasksSection
                        tasks={taskObjects}
                    />
                </div>
                {selectedSongIndex ?
                     <div className="field right-field">
                        <LyricsSection
                            selectedSongLyrics={selectedSongObject.lyrics}
                            handleAnnotationSelect={this.handleAnnotationSelect}
                        />
                    </div> : null
                }
            </div>
        );
    }
}

App.defaultProps = defaultProps;
export default App;