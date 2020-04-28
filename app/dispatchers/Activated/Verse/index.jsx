// Child that knows rules to select activated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'

import { getSceneIndexForVerseIndex } from 'album/api/verses'
import { getActivatedVerseForDirection } from './helper'

class ActivatedVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            activateVerseIndex: this.activateVerseIndex,
            activateVerseDirection: this.activateVerseDirection
        })
    }

    activateVerseDirection = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedSongIndex,
                selectedVerseIndex,
                activatedVerseIndex: currentVerseIndex
            } = this.props,

            activatedVerseIndex = getActivatedVerseForDirection({
                selectedSongIndex,
                selectedVerseIndex,
                currentVerseIndex,
                direction
            })

        this.activateVerseIndex(activatedVerseIndex)
        this._queueScrollToActivatedVerse(activatedVerseIndex)

        return true
    }

    activateVerseIndex = (activatedVerseIndex) => {
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        // Do not allow selected verse to be activated.
        if (selectedVerseIndex === activatedVerseIndex) {
            return
        }

        const activatedSceneIndex = getSceneIndexForVerseIndex(
            selectedSongIndex,
            activatedVerseIndex
        )

        this.props.updateSessionStore({
            activatedSceneIndex,
            activatedVerseIndex
        })
    }

    _queueScrollToActivatedVerse = (activatedVerseIndex) => {
        this.props.updateScrollLyricStore({
            queuedScrollLyricLog:
                `Activate verse ${activatedVerseIndex}.`,
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
        selectedVerseIndex
    },
    sessionStore: { activatedVerseIndex }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedVerseIndex,
    activatedVerseIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateSessionStore
    }
)(ActivatedVerseDispatcher)
