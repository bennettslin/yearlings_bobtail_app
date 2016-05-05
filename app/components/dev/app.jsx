import React from 'react';
import TitleSection from './title-section.jsx';
import SongsSection from './songs-section.jsx';
import NotesSection from './notes-section.jsx';
import AnnotationPopup from './annotation-popup.jsx';
import StatsSection from './stats-section.jsx';
import OverviewsSection from './overviews-section.jsx';
import TasksSection from './tasks-section.jsx';
import LyricsSection from './lyrics-section.jsx';
import GlobalHelper from '../helpers/global-helper.js';

const defaultProps = {
    title: 'Yearling\'s Bobtail',
    songs: [],
    overviews: []
};

class App extends React.Component {

    constructor(props) {
        super(props);

        this._handleBodyClick = this._handleBodyClick.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleOverviewSelect = this.handleOverviewSelect.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);

        /**
         * Retrieve stored song indices, if any. Song indices start at 1.
         * (Played song index isn't presently being used.)
         */
        this.handleSongChange(window.sessionStorage.playedSongIndex, 'played');
        this.handleSongChange(window.sessionStorage.selectedSongIndex, 'selected');

        // Retrieve stored speech bubble key, if there is one.
        this.handleOverviewSelect(window.sessionStorage.selectedOverviewKey);

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(window.sessionStorage.selectedAnnotationIndex);

        this.state = {
            playedSongIndex: parseInt(window.sessionStorage.playedSongIndex) || 0,
            selectedSongIndex: parseInt(window.sessionStorage.selectedSongIndex) || 0,
            selectedAnnotationIndex: parseInt(window.sessionStorage.selectedAnnotationIndex) || 0,
            selectedOverviewKey: window.sessionStorage.selectedOverviewKey,
        };
    }

    _handleBodyClick(e) {
        const annotation = this.refs.annotationPopup.refs.annotationSection ?
            this.refs.annotationPopup.refs.annotationSection.refs.annotation : null;

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation &&
            annotation !== e.target &&
            !annotation.contains(e.target) &&
            !GlobalHelper.hasParentWithTagName(e.target, 'a')) {

            this.handleAnnotationSelect(null, true);
        }
    }

    handleSongChange(songIndex = 0, actionType = 'selected', setState = false) {

        if (typeof songIndex === 'string') {
            songIndex = parseInt(songIndex) || 0;
        }

        if (songIndex >= 0 && songIndex <= this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage[actionType + 'SongIndex'] = songIndex;

            if (setState) {
                /**
                 * Also reset the stored annotation and speech bubble keys if
                 * changing the selected song index.
                 */
                if (actionType === 'selected') {
                    this.handleAnnotationSelect(null, true);
                    this.handleOverviewSelect(null, true);

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

    handleOverviewSelect(selectedOverviewKey, setState) {
        selectedOverviewKey = selectedOverviewKey || 'narrative';
        window.sessionStorage.selectedOverviewKey = selectedOverviewKey;

        if (setState) {
            this.setState({
                selectedOverviewKey
            });
        }
    }

    handleAnnotationSelect(selectedAnnotationIndex, setState) {
        if (typeof selectedAnnotationIndex === 'string') {
            selectedAnnotationIndex = parseInt(selectedAnnotationIndex) || 0;
        }

        window.sessionStorage.selectedAnnotationIndex = selectedAnnotationIndex || 0;

        if (setState) {
            this.setState({
                selectedAnnotationIndex
            });
        }
    }

    render() {
        const props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            selectedSongIndex = state.selectedSongIndex,
            selectedSong = selectedSongIndex ?
                props.songs[selectedSongIndex - 1] : {},
            overviewRichText = (selectedSongIndex && state.selectedOverviewKey) ?
                selectedSong.overviews[state.selectedOverviewKey] :
                props.overviews[state.selectedOverviewKey],
            tasks = selectedSongIndex ?
                selectedSong.tasks :
                props.tasks,
            annotationData = (selectedSongIndex && state.selectedAnnotationIndex) ?
                selectedSong.annotations[state.selectedAnnotationIndex - 1] : null;

        // Includes album tasks and song tasks.
        let allTasks = props.songs.map(song => {
            return song.tasks;
        });
        allTasks.push(props.tasks);

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="field songs-field">
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
                <div className="field notes-field">
                    <AnnotationPopup
                        ref="annotationPopup"
                        annotationData={annotationData}
                    />
                    {!selectedSongIndex ?
                        <NotesSection /> : null
                    }
                    <StatsSection
                        lyrics={selectedSong.lyrics}
                        annotations={selectedSong.annotations}
                    />
                    <OverviewsSection
                        overviewRichText={overviewRichText}
                        selectedOverviewKey={state.selectedOverviewKey}
                        handleOverviewSelect={this.handleOverviewSelect}
                    />
                    <TasksSection
                        tasks={tasks}
                    />
                </div>
                {selectedSongIndex ?
                     <div className="field lyrics-field">
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