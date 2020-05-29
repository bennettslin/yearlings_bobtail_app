// Container for book, logue, and toggle buttons for each book.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { SHOW_SINGLE_NAV_BOOK_SELECTOR } from '../../../redux/responsive/selectors'
import NavDispatcher from '../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'
import { populateRefs } from '../../../helpers/ref'
import { SHOWN_NAV_BOOK_INDEX_SELECTOR } from '../../../redux/session/selectors'
import './style'

// TODO: Import this from a Book component.
import './Book/style'

const mapStateToProps = state => {
    const
        showSingleNavBook = SHOW_SINGLE_NAV_BOOK_SELECTOR(state),
        shownNavBookIndex = SHOWN_NAV_BOOK_INDEX_SELECTOR(state)

    return {
        showSingleNavBook,
        shownNavBookIndex
    }
}

class NavColumn extends PureComponent {

    static propTypes = {
        // Through Redux.
        showSingleNavBook: PropTypes.bool.isRequired,
        shownNavBookIndex: PropTypes.number.isRequired,

        // From parent.
        bookIndex: PropTypes.number.isRequired
    }

    _handleNavBookClick = () => {
        this.dispatchNavBook()
    }

    _handleNavSongSelect = songIndex => {
        this.dispatchSong({
            selectedSongIndex: songIndex,
            doDismissNav: true
        })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
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
                            bookIndex,
                            handleButtonClick: this._handleNavSongSelect
                        }}
                    /> :
                    <NavBookToggle
                        {...{
                            bookIndex,
                            handleButtonClick: this._handleNavBookClick
                        }}
                    />
                }
                <NavDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavColumn)
