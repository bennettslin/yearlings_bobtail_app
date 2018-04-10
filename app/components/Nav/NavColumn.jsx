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

const navColumnPropTypes = {
    // Through Redux.
    showSingleBookColumn: PropTypes.bool.isRequired,
    shownBookColumnIndex: PropTypes.number.isRequired,

    // From parent.
    bookIndex: PropTypes.number.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired
},

NavColumn = ({

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
            'NavColumn',
            `NavColumn__${bookIndex ? 'right' : 'left'}`,
            isShownColumn ?
                'NavColumn__shown' : 'NavColumn__hidden'
        )}>
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
    )
}

NavColumn.propTypes = navColumnPropTypes

export default connect(mapStateToProps)(NavColumn)
