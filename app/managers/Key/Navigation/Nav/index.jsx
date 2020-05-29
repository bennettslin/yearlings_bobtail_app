import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../../../redux/access/action'
import NavDispatcher from '../../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../../handlers/Song/Dispatcher'
import {
    getSongsAndLoguesCount,
    getBookForSongIndex
} from '../../../../album/api/songs'
import { populateRefs } from '../../../../helpers/ref'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER
} from '../../../../constants/access'
import { ACCESSED_NAV_INDEX_SELECTOR } from '../../../../redux/access/selectors'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../../../redux/selected/selectors'
import { SHOWN_NAV_BOOK_INDEX_SELECTOR } from '../../../../redux/session/selectors'

const mapStateToProps = state => {
    const
        accessedNavIndex = ACCESSED_NAV_INDEX_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        shownNavBookIndex = SHOWN_NAV_BOOK_INDEX_SELECTOR(state)

    return {
        accessedNavIndex,
        selectedSongIndex,
        shownNavBookIndex
    }
}

class NavNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        accessedNavIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        shownNavBookIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            navigateNav: this.navigateNav
        })
    }

    navigateNav = (keyName) => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        const { selectedSongIndex } = this.props
        let { accessedNavIndex } = this.props,
            direction

        // Skip appropriate songs if showing single book column.
        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                // Do not allow currently selected song to be selected.
                if (selectedSongIndex !== accessedNavIndex) {
                    keyWasRegistered = this.dispatchSong({
                        selectedSongIndex: accessedNavIndex,
                        doDismissNav: true
                    })
                    /**
                     * If song was successfully selected, then annotation index
                     * was also accessed.
                     */
                    annotationIndexWasAccessed = keyWasRegistered
                }

                break
            default:
                keyWasRegistered = false
        }

        if (direction) {
            const { shownNavBookIndex } = this.props,
                songsCount = getSongsAndLoguesCount()

            accessedNavIndex = (
                accessedNavIndex + songsCount + direction
            ) % songsCount

            // Select the book column that contains the accessed song index.
            if (
                shownNavBookIndex !== getBookForSongIndex(accessedNavIndex)
            ) {
                this.dispatchNavBook()
            }

            this.props.updateAccessStore({ accessedNavIndex })
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
                <NavDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(NavNavigation)
