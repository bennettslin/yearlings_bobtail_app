import React from 'react'
import NavRow from './nav-row'
import NavSong from './nav-song'
import ProgressFooter from '../admin/progress/progress-footer'
import ProgressHelper from 'helpers/progress-helper'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const NavSection = ({

    songs = [],
    isAdmin,
    allTasks,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,

...other }) => {

    const maxTotalNeededHours = isAdmin ? ProgressHelper.getMaxTotalNeededHoursFromSongs(songs) : null,
        sumAllTasks = allTasks && isAdmin ? ProgressHelper.calculateSumAllTasks(allTasks) : null,

        sectionAccessHighlighted = accessedOn && accessedSectionKey === NAV_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === NAV_SECTION

    return (
        <NavSectionView {...other}
            songs={songs}
            isAdmin={isAdmin}
            sumAllTasks={sumAllTasks}
            maxTotalNeededHours={maxTotalNeededHours}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavSectionView = ({

    // From props.
    isAdmin,
    songs,
    bookStartingIndices,
    selectedSongIndex,
    accessedSongIndex,
    onSongClick,

    // From controller.
    sumAllTasks,
    maxTotalNeededHours,
    sectionAccessHighlighted,
    sectionNextHighlighted

}) => {
    const getNavItem = (song, index) => {
            const isSelected = selectedSongIndex === index,
                accessHighlighted = sectionAccessHighlighted && accessedSongIndex === index,
                navItemProps = {
                    key: index,
                    songIndex: index,
                    song,
                    isSelected,
                    accessHighlighted,
                    onSongClick
                }

            return isAdmin ?
                <NavRow {...navItemProps}
                    maxTotalNeededHours={maxTotalNeededHours}
                /> :
                <NavSong {...navItemProps} />
        },
        songsLength = songs.length

    return (
        <div
            className={`section nav-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
        >
            {isAdmin ?
                <div className="row">
                    <div className="text-cell-wrapper">
                        <h3 className="text-cell text">song</h3>
                        <h3 className="text-cell figure">progress</h3>
                    </div>
                </div> : null
            }
            {isAdmin ?
                <div className="songs-block">
                    {songs.map((song, index) => {
                        return getNavItem(song, index)
                    })}
                </div> :
                <div className="books-block">
                    <div className="book-block logue">
                        {getNavItem(songs[0], 0)}
                    </div>
                    {bookStartingIndices.map((startingIndex, index) => {
                        const nextIndex = (index < bookStartingIndices.length - 1) ? bookStartingIndices[index + 1] : (songsLength - 1)

                        return (
                            <div
                                key={index}
                                className={`book-block book-${index + 1}`}
                            >
                                {Array.from(Array(nextIndex - startingIndex).keys()).map(currentIndex => {
                                    const songIndex = currentIndex + startingIndex,
                                        song = songs[songIndex]
                                    return getNavItem(song, songIndex)
                                })}
                            </div>
                        )
                    })}
                    <div className="book-block logue">
                        {getNavItem(songs[songsLength - 1], songsLength - 1)}
                    </div>
                </div>
            }
            {isAdmin ?
                <div className="row">
                    <ProgressFooter
                        sumTask={sumAllTasks}
                    />
                </div> : null
            }
        </div>
    )
}

export default NavSection
