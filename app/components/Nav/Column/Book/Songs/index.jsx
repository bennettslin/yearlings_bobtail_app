// Container for all song buttons in a book.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import NavButtonIndexed from '../ButtonIndexed'
import NavRoad from '../Road'
import {
    getSongsAndLoguesCount,
    getStartingIndexForBook
} from '../../../../../album/api/songs'
import { getArrayOfLength } from '../../../../../helpers/general'
import './style'

const NavBookSongs = ({
    bookIndex,
    ...other

}) => {
    const isFirstColumn = bookIndex === 0,

        rowReverse = !isFirstColumn,
        songsCount = getSongsAndLoguesCount(),

        beginArrayIndex = getStartingIndexForBook(bookIndex),
        endArrayIndex = isFirstColumn ? getStartingIndexForBook(bookIndex + 1) : songsCount - 1

    return (
        <div className={cx(
            'NavBookSongs',
            'NavBook'
        )}>
            <NavRoad />
            {getArrayOfLength(endArrayIndex - beginArrayIndex).map(currentIndex => {
                const songIndex = rowReverse ? endArrayIndex - 1 - currentIndex : currentIndex + beginArrayIndex
                return (
                    <NavButtonIndexed {...other}
                        {...{
                            key: currentIndex,
                            songIndex
                        }}
                    />
                )
            })}
        </div>
    )
}

NavBookSongs.propTypes = {
    bookIndex: PropTypes.number.isRequired
}

export default memo(NavBookSongs)
