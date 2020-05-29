// Child that knows rules to select activated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getStartTimeForVerse } from '../../../album/api/time'
import { getSceneIndexForVerse } from '../../../album/api/verses'
import { getActivatedVerseForDirection } from './helper'
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../../redux/activated/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_VERSE_INDEX_SELECTOR,
    IS_SELECTED_LOGUE_SELECTOR
} from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        activatedVerseIndex = ACTIVATED_VERSE_INDEX_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        selectedVerseIndex = SELECTED_VERSE_INDEX_SELECTOR(state),
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state)

    return {
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex,
        activatedVerseIndex
    }
}

class ActivatedVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

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

        const activatedSceneIndex = getSceneIndexForVerse(
            selectedSongIndex,
            activatedVerseIndex
        )

        this.props.updateActivatedStore({
            activatedSceneIndex,
            activatedVerseIndex,
            activatedTime: getStartTimeForVerse(
                selectedSongIndex,
                activatedVerseIndex
            )
        })

        // Turn off auto scroll once verse or scene is activated.
        this.props.updateToggleStore({
            isAutoScroll: false
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

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateActivatedStore,
        updateToggleStore
    }
)(ActivatedVerseDispatcher)
