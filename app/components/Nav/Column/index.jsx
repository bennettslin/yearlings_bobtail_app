// Container for book, logue, and toggle buttons for each book.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import NavDispatcher from '../../../dispatchers/NavDispatcher'
import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'

const mapStateToProps = ({
    responsiveStore: { showSingleNavBook },
    sessionStore: { shownNavBookIndex }
}) => ({
    showSingleNavBook,
    shownNavBookIndex
})

class NavColumn extends Component {

    static propTypes = {
        // Through Redux.
        showSingleNavBook: PropTypes.bool.isRequired,
        shownNavBookIndex: PropTypes.number.isRequired,

        // From parent.
        bookIndex: PropTypes.number.isRequired,
        handleNavSongSelect: PropTypes.func.isRequired
    }

    handleNavBookClick = () => {
        this.dispatchNavBook()
    }

    render() {
        const {
                showSingleNavBook,
                shownNavBookIndex,
                bookIndex,
                handleNavSongSelect
            } = this.props,

            isShownColumn =
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
                            bookIndex: bookIndex,
                            handleButtonClick: handleNavSongSelect
                        }}
                    /> :
                    <NavBookToggle
                        {...{
                            bookIndex: bookIndex,
                            handleButtonClick: this.handleNavBookClick
                        }}
                    />
                }
                <NavDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavColumn)
