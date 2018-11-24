import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'

import NavDispatcher from '../../../../dispatchers/NavDispatcher'

import {
    getSongsAndLoguesCount,
    getBookColumnIndex
} from 'helpers/dataHelper'

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
        interactivatedVerseIndex: PropTypes.number.isRequired,
        shownBookColumnIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getTryNavigateNav: PropTypes.func.isRequired,
        handleNavSongSelect: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryNavigateNav(this.tryNavigateNav)
    }

    handleNavBookClick = () => {
        this.dispatchNavBook()
    }

    tryNavigateNav = (e, keyName) => {
        const {
            isAccessOn,
            interactivatedVerseIndex,
            handleNavSongSelect
        } = this.props

        let annotationIndexWasAccessed = false,
            keyWasRegistered = true

        /**
         * If access is off, just turn it on. Also ensure there is no
         * interactivated verse.
         */
        if (isAccessOn && interactivatedVerseIndex < 0) {
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
                    keyWasRegistered = handleNavSongSelect(e, accessedNavSongIndex)
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
                const { shownBookColumnIndex } = this.props,
                    songsCount = getSongsAndLoguesCount()

                accessedNavSongIndex = (
                    accessedNavSongIndex + songsCount + direction
                ) % songsCount

                // Select the book column that contains the accessed song index.
                if (
                    shownBookColumnIndex !== getBookColumnIndex(accessedNavSongIndex)
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

    render() {
        return (
            <NavDispatcher {...{ getDispatch: this }} />
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    sessionStore: {
        interactivatedVerseIndex,
        shownBookColumnIndex
    },
    accessStore: { accessedNavSongIndex }
}) => ({
    isAccessOn,
    interactivatedVerseIndex,
    accessedNavSongIndex,
    shownBookColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavNavigation)
