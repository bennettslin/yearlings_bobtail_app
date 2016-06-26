import React from 'react';
import TitleSection from './classes/title-section.jsx';
import SongsSection from './classes/songs/songs-section.jsx';
import NotesSection from './classes/notes-section.jsx';
import AnnotationPopup from './classes/annotation/annotation-popup.jsx';
import StatsSection from './classes/stats-section.jsx';
import OverviewsSection from './classes/overviews-section.jsx';
import TasksSection from './classes/tasks-section.jsx';
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

const storageObject = window.localStorage,
    PLAYED_SONG_INDEX = Constants.sessionKeys.PLAYED_SONG_INDEX,
    SELECTED_SONG_INDEX = Constants.sessionKeys.SELECTED_SONG_INDEX,
    SELECTED_ANNOTATION_INDEX = Constants.sessionKeys.SELECTED_ANNOTATION_INDEX,
    SELECTED_OVERVIEW_INDEX = Constants.sessionKeys.SELECTED_OVERVIEW_INDEX,
    DEFAULT_OVERVIEW_INDEX = 1;

class App extends React.Component {

    constructor(props) {
        const playedSongIndex = SessionHelper.getFromSession(PLAYED_SONG_INDEX),
            selectedSongIndex = SessionHelper.getFromSession(SELECTED_SONG_INDEX),
            selectedAnnotationIndex = SessionHelper.getFromSession(SELECTED_ANNOTATION_INDEX),
            selectedOverviewIndex = SessionHelper.getFromSession(SELECTED_OVERVIEW_INDEX) || DEFAULT_OVERVIEW_INDEX;

        super(props);

        this._assignLogFunctions();

        this._handleBodyClick = this._handleBodyClick.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this.handlePortalClick = this.handlePortalClick.bind(this);

        /**
         * Retrieve stored song indices, if any. Song indices start at 1.
         * (Played song index isn't presently being used.)
         */
        this.handleSongChange(playedSongIndex, 'played');
        this.handleSongChange(selectedSongIndex, 'selected');

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(selectedAnnotationIndex);

        // Retrieve stored speech bubble key, if there is one.
        this.handleOverviewSelect(selectedOverviewIndex);

        this.state = {
            playedSongIndex: playedSongIndex,
            selectedSongIndex: selectedSongIndex,
            selectedAnnotationIndex: selectedAnnotationIndex,
            selectedOverviewIndex: selectedOverviewIndex
        };
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
        const annotation = this.refs.annotationPopup.refs.annotationSection ?
            this.refs.annotationPopup.refs.annotationSection.refs.annotation : null;

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another link.
         */
        if (annotation &&
            annotation !== e.target &&
            !annotation.contains(e.target) &&
            !EventHelper.hasParentWithTagName(e.target, 'a')) {

            this.handleAnnotationSelect(0, true);
        }
    }

    handleSongChange(songIndex = 0, actionType = 'selected', setState = false) {
        if (songIndex >= 0 && songIndex <= this.props.songs.length) {
            // Store song index in session.
            SessionHelper.setInSession(actionType + 'SongIndex', songIndex);

            if (setState) {
                /**
                 * Also reset the stored annotation and overview indices if
                 * changing the selected song index. Right now, default for
                 * overview is 1 for narrative.
                 */
                if (actionType === 'selected') {
                    this.handleAnnotationSelect(0, true);
                    this.handleOverviewSelect(DEFAULT_OVERVIEW_INDEX, true);

                    this.setState({
                        selectedSongIndex: songIndex
                    });

                } else if (actionType === 'played') {
                    this.setState({
                        playedSongIndex: songIndex
                    });
                }
            }
        }
    }

    // TODO: Can these two methods be combined into one?
    handleOverviewSelect(selectedOverviewIndex, setState) {
        SessionHelper.setInSession(SELECTED_OVERVIEW_INDEX, selectedOverviewIndex);

        if (setState) {
            this.setState({
                selectedOverviewIndex
            });
        }
    }

    handleAnnotationSelect(selectedAnnotationIndex, setState) {
        SessionHelper.setInSession(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex);

        if (setState) {
            this.setState({
                selectedAnnotationIndex
            });
        }
    }

    handlePortalClick(selectedSongIndex, selectedAnnotationIndex) {
        this.handleSongChange(selectedSongIndex, 'selected', true);
        this.handleAnnotationSelect(selectedAnnotationIndex, true);
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

        return (annotations && selectedAnnotationIndex) ?
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
                        handleSongReset={this.handleSongChange.bind(null, 0, 'selected', true)}
                    />
                    <SongsSection
                        songs={props.songs}
                        allTasks={allTaskObjects}
                        selectedSongIndex={selectedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="field centre-field">
                    <AnnotationPopup
                        ref="annotationPopup"
                        annotationObject={annotationObject}
                        portalObjects={portalObjects}
                        handlePortalClick={this.handlePortalClick}
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
                        handleOverviewSelect={this.handleOverviewSelect}
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