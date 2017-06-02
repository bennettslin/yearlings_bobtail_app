// Container for all nav song buttons in a book.

import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './nav-item'
import { getSongsLength, getStartingIndexForBook } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const NavBook = (props) => (
    <NavBookView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const NavBookView = ({

    // From props.
    bookIndex,

...other }) => {

    const isFirstColumn = bookIndex === 1,

        rowReverse = !isFirstColumn,
        songsLength = getSongsLength(),

        beginArrayIndex = getStartingIndexForBook(bookIndex - 1),
        endArrayIndex = isFirstColumn ? getStartingIndexForBook(bookIndex) : songsLength - 1

    return (
        <div className="nav-book songs">
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

NavBookView.propTypes = {
    // From parent.
    bookIndex: PropTypes.number.isRequired
}

export default NavBook
