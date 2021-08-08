// Container for book, logue, and toggle buttons for each book.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import NavDispatcher from '../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../dispatchers/Song'
import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'
import { getMapIsNavColumnShown } from '../../../redux/nav/selector'
import './style'

// TODO: Import this from a Book component.
import './Book/style'

const NavColumn = ({ bookIndex }) => {
    const
        dispatchNavBook = useRef(),
        dispatchSong = useRef(),
        isNavColumnShown = useSelector(getMapIsNavColumnShown(bookIndex))

    const handleNavBookClick = () => {
        dispatchNavBook.current()
    }

    const handleNavSongSelect = songIndex => {
        dispatchSong.current({ selectedSongIndex: songIndex })
    }

    return (
        <div className={cx(
            'NavColumn',
            `NavColumn__${bookIndex ? 'right' : 'left'}`,
            isNavColumnShown ?
                'NavColumn__shown' :
                'NavColumn__hidden',
        )}>
            {/* Nav book. */}
            <NavBookSongs
                {...{
                    bookIndex,
                    isInShownColumn: isNavColumnShown,
                    handleButtonClick: handleNavSongSelect,
                }}
            />

            {/* Logue or toggle. */}
            {isNavColumnShown ?
                <NavBookLogue
                    {...{
                        bookIndex,
                        handleButtonClick: handleNavSongSelect,
                    }}
                /> :
                <NavBookToggle
                    {...{
                        bookIndex,
                        handleButtonClick: handleNavBookClick,
                    }}
                />
            }
            <NavDispatcher {...{ ref: dispatchNavBook }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </div>
    )
}

NavColumn.propTypes = {
    bookIndex: PropTypes.number.isRequired,
}

export default memo(NavColumn)
