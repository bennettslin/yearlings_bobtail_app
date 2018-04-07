// Container for book, logue, and toggle buttons for each book.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import NavBook from './NavBook'
import NavBookButton from './NavBookButton'
import NavLogueButton from './NavLogueButton'

const mapStateToProps = ({
    showSingleBookColumn,
    shownBookColumnIndex
}) => ({
    showSingleBookColumn,
    shownBookColumnIndex
})

const navBooksColumnPropTypes = {
    // Through Redux.
    showSingleBookColumn: PropTypes.bool.isRequired,
    shownBookColumnIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired
},

NavBooksColumn = ({

    showSingleBookColumn,
    shownBookColumnIndex,
    bookIndex,
    handleNavSongSelect,
    handleNavBookSelect

}) => {

    const isShownColumn = !showSingleBookColumn ||
        shownBookColumnIndex === bookIndex

    return (
        <div className={cx(
            'books-column-block',
            `column-${bookIndex}`,
            isShownColumn ? 'columnShown' : 'columnHidden'
        )}>
            <div className="books-column">

                {/* Nav book. */}
                <NavBook
                    bookIndex={bookIndex}
                    handleButtonClick={handleNavSongSelect}
                />

                {/* Logue or toggle. */}
                {isShownColumn ?
                    <NavLogueButton
                        bookIndex={bookIndex}
                        handleButtonClick={handleNavSongSelect}
                    /> :
                    <NavBookButton
                        bookIndex={bookIndex}
                        handleButtonClick={handleNavBookSelect}
                    />
                }
            </div>
        </div>
    )
}

NavBooksColumn.propTypes = navBooksColumnPropTypes

export default connect(mapStateToProps)(NavBooksColumn)
