// Child that knows rules to select activated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getVerseIndexForSceneIndex } from 'album/api/scenes'
import { getActivatedSceneForDirection } from './helper'

class ActivatedSceneDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        activatedSceneIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            activateSceneDirection: this.activateSceneDirection
        })
    }

    activateSceneDirection = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedSongIndex,
                selectedSceneIndex,
                activatedSceneIndex: currentSceneIndex
            } = this.props,

            activatedSceneIndex = getActivatedSceneForDirection({
                selectedSongIndex,
                selectedSceneIndex,
                currentSceneIndex,
                direction
            })

        this._activateSceneIndex(activatedSceneIndex)

        return true
    }

    _activateSceneIndex = (activatedSceneIndex) => {
        const { selectedSongIndex } = this.props,
            activatedVerseIndex = getVerseIndexForSceneIndex(
                selectedSongIndex,
                activatedSceneIndex
            )

        this.props.updateSessionStore({
            activatedSceneIndex,
            activatedVerseIndex
        })

        // Turn off auto scroll once verse or scene is activated.
        this.props.updateToggleStore({
            isAutoScroll: false
        })

        this._queueScrollToActivatedVerse(
            activatedSceneIndex,
            activatedVerseIndex
        )
    }

    _queueScrollToActivatedVerse = (
        activatedSceneIndex,
        activatedVerseIndex
    ) => {
        this.props.updateScrollLyricStore({
            queuedScrollLyricLog:
                `Activate scene ${activatedSceneIndex}, verse ${activatedVerseIndex}.`,
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: activatedVerseIndex
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
    sessionStore: { activatedSceneIndex }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedSceneIndex,
    activatedSceneIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateSessionStore,
        updateToggleStore
    }
)(ActivatedSceneDispatcher)
