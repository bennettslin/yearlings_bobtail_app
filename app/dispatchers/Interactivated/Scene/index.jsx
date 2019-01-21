// Child that knows rules to select interactivated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'

import { getVerseIndexForSceneIndex } from 'album/api/scenes'
import { getInteractivatedSceneForDirection } from './helper'

class InteractivatedSceneDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        interactivatedSceneIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            interactivateSceneDirection: this.interactivateSceneDirection
        })
    }

    interactivateSceneDirection = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedSongIndex,
                selectedSceneIndex,
                interactivatedSceneIndex: currentSceneIndex
            } = this.props,

            interactivatedSceneIndex = getInteractivatedSceneForDirection({
                selectedSongIndex,
                selectedSceneIndex,
                currentSceneIndex,
                direction
            })

        this._interactivateSceneIndex(interactivatedSceneIndex)

        return true
    }

    _interactivateSceneIndex = (interactivatedSceneIndex) => {
        const { selectedSongIndex } = this.props,
            interactivatedVerseIndex = getVerseIndexForSceneIndex(
                selectedSongIndex,
                interactivatedSceneIndex
            )

        this.props.updateSessionStore({
            interactivatedSceneIndex,
            interactivatedVerseIndex
        })

        this._queueScrollToInteractivatedVerse(
            interactivatedSceneIndex,
            interactivatedVerseIndex
        )
    }

    _queueScrollToInteractivatedVerse = (
        interactivatedSceneIndex,
        interactivatedVerseIndex
    ) => {
        this.props.updateScrollLyricStore({
            queuedScrollLyricLog:
                `Interactivate scene ${interactivatedSceneIndex}, verse ${interactivatedVerseIndex}.`,
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
        selectedSceneIndex
    },
    sessionStore: { interactivatedSceneIndex }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedSceneIndex,
    interactivatedSceneIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateSessionStore
    }
)(InteractivatedSceneDispatcher)
