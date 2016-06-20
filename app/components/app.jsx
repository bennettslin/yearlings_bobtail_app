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
import GlobalHelper from './helpers/global-helper.js';

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
        const playedSongIndex = GlobalHelper.getFromSession(PLAYED_SONG_INDEX),
            selectedSongIndex = GlobalHelper.getFromSession(SELECTED_SONG_INDEX),
            selectedAnnotationIndex = GlobalHelper.getFromSession(SELECTED_ANNOTATION_INDEX),
            selectedOverviewIndex = GlobalHelper.getFromSession(SELECTED_OVERVIEW_INDEX) || DEFAULT_OVERVIEW_INDEX;

        super(props);

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
            !GlobalHelper.hasParentWithTagName(e.target, 'a')) {

            this.handleAnnotationSelect(0, true);
        }
    }

    handleSongChange(songIndex = 0, actionType = 'selected', setState = false) {
        if (songIndex >= 0 && songIndex <= this.props.songs.length) {
            // Store song index in session.
            GlobalHelper.setInSession(actionType + 'SongIndex', songIndex);

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
        GlobalHelper.setInSession(SELECTED_OVERVIEW_INDEX, selectedOverviewIndex);

        if (setState) {
            this.setState({
                selectedOverviewIndex
            });
        }
    }

    handleAnnotationSelect(selectedAnnotationIndex, setState) {
        GlobalHelper.setInSession(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex);

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

    _getPortalObjects(annotationObject) {
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
    }

    render() {
        const props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            selectedSongIndex = state.selectedSongIndex,

            selectedSong = selectedSongIndex ?
                props.songs[selectedSongIndex - 1] : {},

            overviewRichText = (selectedSongIndex && state.selectedOverviewIndex) ?
                selectedSong.overviews[state.selectedOverviewIndex - 1] :
                props.overviews[state.selectedOverviewIndex - 1],

            tasks = selectedSongIndex ?
                selectedSong.tasks :
                props.tasks,
            annotationObject = (selectedSongIndex && state.selectedAnnotationIndex) ?
                selectedSong.annotations[state.selectedAnnotationIndex - 1] : null,
            portalObjects = annotationObject ?
                this._getPortalObjects(annotationObject) : null;

        // Includes album tasks and song tasks.
        let allTasks = props.songs.map(song => {
            return song.tasks;
        });
        allTasks.push(props.tasks);

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="field left-field">
                    <TitleSection
                        titleText={props.title}
                        handleSongReset={this.handleSongChange.bind(null, 0, 'selected', true)}
                    />
                    <SongsSection
                        songs={props.songs}
                        allTasks={allTasks}
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
                        <DotsSection dotKeys={selectedSong.dotKeys} />
                    }
                    <OverviewsSection
                        overviewRichText={overviewRichText}
                        selectedOverviewIndex={state.selectedOverviewIndex}
                        handleOverviewSelect={this.handleOverviewSelect}
                    />
                    <StatsSection
                        lyrics={selectedSong.lyrics}
                        annotations={selectedSong.annotations}
                    />
                    <TasksSection
                        tasks={tasks}
                    />
                </div>
                {selectedSongIndex ?
                     <div className="field right-field">
                        <LyricsSection
                            selectedSongLyrics={selectedSong.lyrics}
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