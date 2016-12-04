import React from 'react'
import NavBook from './nav-book'
import NavItem from './nav-item'
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
    selectedNavIndex,
    accessedSongIndex,
    selectedBookColumnIndex,
    showSingleBookColumn,
    onSongClick,
    onNavExpandClick,
    onBookColumnClick,

    // From controller.
    sumAllTasks,
    maxTotalNeededHours,
    sectionAccessHighlighted,
    sectionNextHighlighted

}) => {
    const navItemProps = {
        isAdmin,
        selectedSongIndex,
        accessedSongIndex,
        maxTotalNeededHours,
        sectionAccessHighlighted,
        onSongClick
    },
    songsLength = songs.length

    return (
        <div
            className={`section nav-section${showSingleBookColumn ? ' single-book-column' : ''}${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
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
                <div className="admin-block">
                    {songs.map((song, index) => {
                        return (
                            <NavItem {...navItemProps}
                                song={song}
                                index={index}
                            />
                        )
                    })}
                </div> :
                <div className="books-container">
                    <div className="books-toggle-block book-block nav-icon-block nav-toggle">
                        <a className="nav-expand-button nav-icon enabled" onClick={onNavExpandClick}>
                            {selectedNavIndex}
                        </a>
                    </div>
                    <div className="books-block">
                        <div className={`book-column-block${!showSingleBookColumn || selectedBookColumnIndex === 1 ? ' column-shown' : ''}`}>
                            {showSingleBookColumn ?
                                <div className="books-toggle-block book-block nav-icon-block book-toggle">
                                    <a className="nav-expand-button nav-icon enabled" onClick={onBookColumnClick}>
                                        +
                                    </a>
                                </div> : null
                            }
                            <div className={`book-column`}>
                                <div className="book-block logue">
                                    <NavItem {...navItemProps}
                                        song={songs[0]}
                                        index={0}
                                    />
                                </div>
                                <div className="book-block">
                                    {Array.from(Array(bookStartingIndices[1] - bookStartingIndices[0]).keys()).map(currentIndex => {
                                        const songIndex = currentIndex + bookStartingIndices[0]
                                        return (
                                            <NavItem {...navItemProps}
                                                key={currentIndex}
                                                song={songs[songIndex]}
                                                index={songIndex}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={`book-column-block${!showSingleBookColumn || selectedBookColumnIndex === 2 ? ' column-shown' : ''}`}>
                            <div className={`book-column`}>
                                <div className="book-block">
                                    {Array.from(Array(songsLength - 1 - bookStartingIndices[1]).keys()).map(currentIndex => {
                                        const songIndex = currentIndex + bookStartingIndices[1]
                                            return (
                                                <NavItem {...navItemProps}
                                                    key={currentIndex}
                                                    song={songs[songIndex]}
                                                    index={songIndex}
                                                />
                                            )
                                    })}
                                </div>
                                <div className="book-block logue">
                                    <NavItem {...navItemProps}
                                        song={songs[songsLength - 1]}
                                        index={songsLength - 1}
                                    />
                                </div>
                            </div>
                            {showSingleBookColumn ?
                                <div className="books-toggle-block book-block nav-icon-block book-toggle">
                                    <a className="nav-expand-button nav-icon enabled" onClick={onBookColumnClick}>
                                        +
                                    </a>
                                </div> : null
                            }
                        </div>
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
