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
        selectSong: PropTypes.func.isRequired
    }

    _handleNavBookClick = () => {
        this.dispatchNavBook()
    }

    _handleNavSongSelect = (songIndex) => {
        this.props.selectSong({
            selectedSongIndex: songIndex
        })
    }

    render() {
        const {
                showSingleNavBook,
                shownNavBookIndex,
                bookIndex
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
                        handleButtonClick: this._handleNavSongSelect
                    }}
                />

                {/* Logue or toggle. */}
                {isShownColumn ?
                    <NavBookLogue
                        {...{
                            bookIndex: bookIndex,
                            handleButtonClick: this._handleNavSongSelect
                        }}
                    /> :
                    <NavBookToggle
                        {...{
                            bookIndex: bookIndex,
                            handleButtonClick: this._handleNavBookClick
                        }}
                    />
                }
                <NavDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavColumn)
