// Container for book, logue, and toggle buttons for each book.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import NavBook from './nav-book'
import NavBookButton from './nav-book-button'
import NavLogueButton from './nav-logue-button'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    showSingleBookColumn,
    shownBookColumnIndex
}) => ({
    showSingleBookColumn,
    shownBookColumnIndex
})

const NavBooksColumn = ({

    showSingleBookColumn,
    shownBookColumnIndex,
    bookIndex,
    handleNavSongSelect,
    handleNavBookSelect

}) => {

    const isShownColumn = !showSingleBookColumn || shownBookColumnIndex === bookIndex

    return (
        <div className={classnames(
            'books-column-block',
            `column-${bookIndex}`,
            isShownColumn ? ' column-shown' : ' column-hidden'
        )}>
            <div className="books-column">
                <NavBook
                    bookIndex={bookIndex}
                    handleNavSongSelect={handleNavSongSelect}
                />
                {/* prologue or toggle */}
                {isShownColumn ?
                    <NavLogueButton
                        bookIndex={bookIndex}
                        handleNavSongSelect={handleNavSongSelect}
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

NavBooksColumn.propTypes = {
    // Through Redux.
    showSingleBookColumn: PropTypes.bool.isRequired,
    shownBookColumnIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(NavBooksColumn)
