// Child that knows rules to select interactivated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'

import { getSceneIndexForVerseIndex } from 'album/api/verses'
import { getInteractivatedVerseForDirection } from './helper'

class InteractivatedVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            interactivateVerseIndex: this.interactivateVerseIndex,
            interactivateVerseDirection: this.interactivateVerseDirection
        })
    }

    interactivateVerseDirection = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedSongIndex,
                selectedVerseIndex,
                interactivatedVerseIndex: currentVerseIndex
            } = this.props,

            interactivatedVerseIndex = getInteractivatedVerseForDirection({
                selectedSongIndex,
                selectedVerseIndex,
                currentVerseIndex,
                direction
            })

        this.interactivateVerseIndex(interactivatedVerseIndex)
        this._queueScrollToInteractivatedVerse(interactivatedVerseIndex)

        return true
    }

    interactivateVerseIndex = (interactivatedVerseIndex) => {
        const { selectedSongIndex } = this.props,
            interactivatedSceneIndex = getSceneIndexForVerseIndex(
                selectedSongIndex,
                interactivatedVerseIndex
            )

        this.props.updateSessionStore({
            interactivatedSceneIndex,
            interactivatedVerseIndex
        })
    }

    _queueScrollToInteractivatedVerse = (interactivatedVerseIndex) => {
        this.props.updateScrollLyricStore({
            queuedScrollLyricLog:
                `Interactivate verse ${interactivatedVerseIndex}.`,
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: interactivatedVerseIndex
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex
    },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedVerseIndex,
    interactivatedVerseIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateSessionStore
    }
)(InteractivatedVerseDispatcher)
