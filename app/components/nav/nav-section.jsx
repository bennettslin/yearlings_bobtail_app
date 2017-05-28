import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import NavBook from './nav-book'
import { NAV_SECTION_ACCESS_KEY } from '../../helpers/constants'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

import AlbumData from '../../album-data'

const { songs, bookStartingIndices } = AlbumData

/*************
 * CONTAINER *
 *************/

class NavSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [

                ]
            })

        console.error('props:', JSON.stringify(props, null, 2));
        console.error('nextProps:', JSON.stringify(nextProps, null, 2));
        console.error(`componentShouldUpdate:`, componentShouldUpdate);

        return componentShouldUpdate || true
    }

    render() {
        return (
            <NavSectionView {...this.props} />
        )
    }
}

NavSection.propTypes = {
    showSingleBookColumn: PropTypes.bool,
    accessedSongIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedNavIndex: PropTypes.number,
    selectedBookColumnIndex: PropTypes.number,
    handleNavExpand: PropTypes.func,
    handleNavBookSelect: PropTypes.func,
    handleNavSongSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const NavSectionView = ({

    // From props.
    selectedSongIndex,
    selectedNavIndex,
    accessedSongIndex,
    selectedBookColumnIndex,
    showSingleBookColumn,

    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect

    // From controller.

}) => {
    const navItemProps = {
        selectedSongIndex,
        accessedSongIndex,
        handleNavSongSelect
    },
    songsLength = songs.length

    return (
        <div
            className={classnames(
                'section',
                'nav-section',
                showSingleBookColumn ? ' single-book-column' : ' double-book-column'
            )}
        >
            <div className="live-nav-block">
                {/* nav toggle */}
                <div className="nav-toggle-block">
                    <NavBook {...navItemProps}
                        isNavToggle={true}
                        buttonText={selectedNavIndex + ''}
                        accessKey={NAV_SECTION_ACCESS_KEY}
                        handleButtonClick={handleNavExpand}
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
                                    hasSelectedSong={selectedSongIndex < bookStartingIndices[1]}
                                    buttonText={'k'}
                                    handleButtonClick={handleNavBookSelect}
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
                                    hasSelectedSong={selectedSongIndex >= bookStartingIndices[1]}
                                    buttonText={'k'}
                                    handleButtonClick={handleNavBookSelect}
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
        </div>
    )
}

export default NavSection
