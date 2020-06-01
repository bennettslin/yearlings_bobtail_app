// Container for book, logue, and toggle buttons for each book.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { mapShowSingleNavBook } from '../../../redux/responsive/selectors'
import NavDispatcher from '../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import NavBookLogue from './Book/Logue'
import NavBookSongs from './Book/Songs'
import NavBookToggle from './Book/Toggle'
import { populateRefs } from '../../../helpers/ref'
import { mapShownNavBookIndex } from '../../../redux/session/selectors'
import './style'

// TODO: Import this from a Book component.
import './Book/style'

const mapStateToProps = state => {
    const
        showSingleNavBook = mapShowSingleNavBook(state),
        shownNavBookIndex = mapShownNavBookIndex(state)

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

    getDispatchNavBook = dispatch => {
        this.dispatchNavBook = dispatch
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
                <NavDispatcher {...{ ref: this.getDispatchNavBook }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(NavColumn)
