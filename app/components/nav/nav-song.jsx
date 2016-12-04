import React from 'react'
import { getSongTitle } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const NavSong = ({

    song,
    songIndex,
    isSelected,
    onSongClick,

...other }) => {

    const isLogue = song.logue,
        songTitle = song.title,
        onClick = e => onSongClick(e, songIndex)

    return (
        <NavSongView {...other}
            isLogue={isLogue}
            songIndex={songIndex}
            isSelected={isSelected}
            songTitle={songTitle}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavSongView = ({

    // From props.
    songIndex,
    isSelected,
    accessHighlighted,
    maxTotalNeededHours,

    // From controller.
    isLogue,
    songTitle,
    onClick

}) => (
    <a
        className={`enabled nav-song${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
        onClick={onClick}
    >
        <div className="nav-circle-block">
            <div className="nav-circle">
                {isLogue ? null : songIndex}
            </div>
        </div>
        <div className="nav-title-block">
            <div className="nav-title">
                {songTitle}
            </div>
        </div>
    </a>
)

export default NavSong
