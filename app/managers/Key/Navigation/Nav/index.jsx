import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'

import NavDispatcher from '../../../../handlers/Nav/Dispatcher'
import SongDispatcher from '../../../../handlers/Song/Dispatcher'

import {
    getSongsAndLoguesCount,
    getBookForSongIndex
} from 'album/api/songs'
import { populateRefs } from 'helpers/ref'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER
} from 'constants/access'

class NavNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedNavSongIndex: PropTypes.number.isRequired,
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

    navigateNav = (e, keyName) => {
        const { isAccessOn } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        /**
         * Only navigate once access is already on.
         */
        if (isAccessOn) {
            let { accessedNavSongIndex } = this.props,
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
                    keyWasRegistered = this.dispatchSong({
                        selectedSongIndex: accessedNavSongIndex,
                        doDismissNav: true
                    })
                    /**
                     * If song was successfully selected, then annotation index
                     * was also accessed.
                     */
                    annotationIndexWasAccessed = keyWasRegistered
                    break
                default:
                    keyWasRegistered = false
            }

            if (direction) {
                const { shownNavBookIndex } = this.props,
                    songsCount = getSongsAndLoguesCount()

                accessedNavSongIndex = (
                    accessedNavSongIndex + songsCount + direction
                ) % songsCount

                // Select the book column that contains the accessed song index.
                if (
                    shownNavBookIndex !== getBookForSongIndex(accessedNavSongIndex)
                ) {
                    this.dispatchNavBook()
                }

                this.props.updateAccessStore({ accessedNavSongIndex })
            }
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <NavDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    sessionStore: { shownNavBookIndex },
    accessStore: {
        isAccessOn,
        accessedNavSongIndex
    }
}) => ({
    isAccessOn,
    accessedNavSongIndex,
    shownNavBookIndex
})

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(NavNavigation)
