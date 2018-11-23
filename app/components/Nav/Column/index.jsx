// Container for book, logue, and toggle buttons for each book.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'

const mapStateToProps = ({
    responsiveStore: { showSingleBookColumn },
    sessionStore: { shownBookColumnIndex }
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
                        bookIndex={bookIndex}
                        handleButtonClick={handleNavSongSelect}
                    /> :
                    <NavBookToggle
                        bookIndex={bookIndex}
                        handleButtonClick={handleNavBookSelect}
                    />
                }
            </div>
        )
    }

NavColumn.propTypes = navColumnPropTypes

export default connect(mapStateToProps)(NavColumn)
