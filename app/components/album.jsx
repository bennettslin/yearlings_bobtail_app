import React, { Component } from 'react';
import Shared from './shared.jsx';
import TitleSection from './title/title-section.jsx';
import NavSection from './nav/nav-section.jsx';
import ProgressHelper from '../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const Album = (props) => {

    const { songs,
            albumTasks } = props,

        allTasks = ProgressHelper.getAllTaskObjects(albumTasks, songs);

    return (
        <AlbumView {...props}
            allTasks={allTasks}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AlbumView = (props) => {

    const {
        // From props.
        songs,
        albumTitle,
        activeSongIndex,
        onSongClick,

        // From controller.
        allTasks

    } = props;

    return (
        <div className="column album-column">
            <div className="field album-field">
                <TitleSection
                    title={albumTitle}
                    onTitleClick={onSongClick}
                />
                <NavSection
                    songs={songs}
                    allTasks={allTasks}
                    activeSongIndex={activeSongIndex}
                    onSongClick={onSongClick}
                />
            </div>
            <Shared {...props} />
        </div>
    );
};

export default Album;
