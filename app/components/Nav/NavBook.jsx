// Container for all song buttons in a book.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavItem from './NavItem'
import { getSongsAndLoguesCount, getStartingIndexForBook } from '../../helpers/dataHelper'

const navBookPropTypes = {
    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavBook = ({

    // From props.
    bookIndex,

...other }) => {

    const isFirstColumn = bookIndex === 0,

        rowReverse = !isFirstColumn,
        songsCount = getSongsAndLoguesCount(),

        beginArrayIndex = getStartingIndexForBook(bookIndex),
        endArrayIndex = isFirstColumn ? getStartingIndexForBook(bookIndex + 1) : songsCount - 1

    return (
        <div className={cx(
            'NavBook__songs',
            'NavColumn__child'
        )}>
            {Array.from(Array(endArrayIndex - beginArrayIndex).keys()).map(currentIndex => {
                const songIndex = rowReverse ? endArrayIndex - 1 - currentIndex : currentIndex + beginArrayIndex
                    return (
                        <NavItem {...other}
                            key={currentIndex}
                            songIndex={songIndex}
                        />
                    )
            })}
        </div>
    )
}

NavBook.propTypes = navBookPropTypes

export default NavBook
