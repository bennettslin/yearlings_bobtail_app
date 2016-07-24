import React, { Component } from 'react';
import AnnotationPopup from '../annotation/annotation-popup.jsx';
import WikiPopup from '../wiki/wiki-popup.jsx';
import DotsSection from '../dots/dots-section.jsx';
import NotesSection from '../notes/notes-section.jsx';
import StatsSection from '../stats/stats-section.jsx';
import OverviewsSection from '../overviews/overviews-section.jsx';
import TasksSection from '../tasks/tasks-section.jsx';
import LyricsSection from '../lyrics/lyrics-section.jsx';
import AppHelper from '../../helpers/app-helper.js';

/*************
 * CONTAINER *
 *************/

const SongSection = (props) => {

    const { songs,
            activeSongIndex,
            activeOverviewIndex,
            activeAnnotationIndex,
            albumOverviews,
            albumTasks } = props,

        activeSong = AppHelper.getSong(activeSongIndex, songs),
        overviewText = AppHelper.getOverviewText(activeOverviewIndex, activeSong, albumOverviews),
        annotation = AppHelper.getAnnotation(activeAnnotationIndex, activeSong),
        tasks = AppHelper.getTasks(activeSong, albumTasks);

    return (
        <SongSectionView {...props}
            activeSongLyrics={activeSong.lyrics}
            activeSongAnnotations={activeSong.annotations}
            activeSongDotKeys={activeSong.dotKeys}
            annotation={annotation}
            overviewText={overviewText}
            tasks={tasks}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const SongSectionView = ({

    // From props.
    songs,
    dotKeys,
    activeSongIndex,
    activeOverviewIndex,
    activeWikiUrl,

    onDotClick,
    onOverviewClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,

    // From controller.
    activeSongLyrics,
    activeSongAnnotations,
    activeSongDotKeys,
    annotation,
    overviewText,
    tasks

}) => (

    <div className="column song-column">
        <div className="field data-field">
            <AnnotationPopup
                songs={songs}
                annotation={annotation}
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
                <DotsSection
                    dotKeys={activeSongDotKeys}
                    onDotClick={onDotClick}
                />
            }
            <StatsSection
                lyrics={activeSongLyrics}
                annotations={activeSongAnnotations}
            />
            <OverviewsSection
                overviewText={overviewText}
                activeOverviewIndex={activeOverviewIndex}
                onOverviewClick={onOverviewClick}
            />
            <TasksSection
                tasks={tasks}
            />
        </div>
        {activeSongIndex ?
             <div className="field lyrics-field">
                <LyricsSection
                    songLyrics={activeSongLyrics}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
    </div>
);

export default SongSection;
