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
    shrinkNavIcon,
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
            className={`section nav-section${shrinkNavIcon ? ' shrink-icon' : ' static-icon'}${showSingleBookColumn ? ' single-book-column' : ' double-book-column'}${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
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
                                key={index}
                                song={song}
                                index={index}
                            />
                        )
                    })}
                </div> :
                <div className="live-nav-block">
                    {/* nav toggle */}
                    <div className="nav-toggle-block">
                        <NavBook {...navItemProps}
                            isNavToggle={true}
                            buttonText={selectedNavIndex + ''}
                            onButtonClick={onNavExpandClick}
                        />
                    </div>
                    <div className="books-block">
                        <div className={`book-column-block column-1${!showSingleBookColumn || selectedBookColumnIndex === 1 ? ' column-shown' : ' column-hidden'}`}>
                            <div className={`book-column`}>
                                {/* songs 1 - 9 */}
                                <NavBook {...navItemProps}
                                    songs={songs}
                                    beginArrayIndex={bookStartingIndices[0]}
                                    endArrayIndex={bookStartingIndices[1]}
                                />
                                {/* prologue or toggle */}
                                {/* TODO: Make this a single component, not a ternary. */}
                                {showSingleBookColumn && selectedBookColumnIndex === 2 ?
                                    <NavBook {...navItemProps}
                                        isToggle={true}
                                        hasSelectedSong={selectedSongIndex
                                             < bookStartingIndices[1]}
                                        buttonText={'k'}
                                        onButtonClick={onBookColumnClick}
                                    /> :
                                    <NavBook {...navItemProps}
                                        isLogue={true}
                                        song={songs[0]}
                                        index={0}
                                    />
                                }
                            </div>
                        </div>
                        <div className={`book-column-block column-2${!showSingleBookColumn || selectedBookColumnIndex === 2 ? ' column-shown' : ' column-hidden'}`}>
                            <div className={`book-column`}>
                                {/* songs 10 - 18 */}
                                <NavBook {...navItemProps}
                                    songs={songs}
                                    rowReverse={true}
                                    beginArrayIndex={bookStartingIndices[1]}
                                    endArrayIndex={songsLength - 1}
                                />
                                {/* epilogue or toggle */}
                                {showSingleBookColumn && selectedBookColumnIndex === 1 ?
                                    <NavBook {...navItemProps}
                                        isToggle={true}
                                        hasSelectedSong={selectedSongIndex
                                             >= bookStartingIndices[1]}
                                        buttonText={'k'}
                                        onButtonClick={onBookColumnClick}
                                    /> :
                                    <NavBook {...navItemProps}
                                        isLogue={true}
                                        song={songs[songsLength - 1]}
                                        index={songsLength - 1}
                                    />
                                }
                            </div>
                            {/* column 2 toggle */}
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
