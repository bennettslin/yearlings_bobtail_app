// Container for book, logue, and toggle buttons for each book.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { mapShowSingleNavBook } from '../../../redux/responsive/selectors'
import NavDispatcher from '../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'
import { mapShownNavBookIndex } from '../../../redux/session/selectors'
import './style'

// TODO: Import this from a Book component.
import './Book/style'

const NavColumn = ({ bookIndex }) => {
    const
        dispatchNavBook = useRef(),
        dispatchSong = useRef(),
        showSingleNavBook = useSelector(mapShowSingleNavBook),
        shownNavBookIndex = useSelector(mapShownNavBookIndex)

    const handleNavBookClick = () => {
        dispatchNavBook.current()
    }

    const handleNavSongSelect = songIndex => {
        dispatchSong.current({
            selectedSongIndex: songIndex,
            doDismissNav: true
        })
    }

    // TODO: Make this a selector.
    const isShownColumn =
        !showSingleNavBook ||
        shownNavBookIndex === bookIndex

    return (
        <div className={cx(
            'NavColumn',
            `NavColumn__${bookIndex ? 'right' : 'left'}`,
            isShownColumn ?
                'NavColumn__shown' :
                'NavColumn__hidden'
        )}>
            {/* Nav book. */}
            <NavBookSongs
                {...{
                    bookIndex,
                    isInShownColumn: isShownColumn,
                    handleButtonClick: handleNavSongSelect
                }}
            />

            {/* Logue or toggle. */}
            {isShownColumn ?
                <NavBookLogue
                    {...{
                        bookIndex,
                        handleButtonClick: handleNavSongSelect
                    }}
                /> :
                <NavBookToggle
                    {...{
                        bookIndex,
                        handleButtonClick: handleNavBookClick
                    }}
                />
            }
            <NavDispatcher {...{ ref: dispatchNavBook }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
        </div>
    )
}

NavColumn.propTypes = {
    bookIndex: PropTypes.number.isRequired
}

export default memo(NavColumn)
