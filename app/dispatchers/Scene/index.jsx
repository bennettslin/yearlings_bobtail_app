import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VerseDispatcher from '../VerseDispatcher'
import { getVerseIndexForScene } from '../../album/api/scenes'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const {
            entranceStore: { didSceneEnter }
        } = state,
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state)

    return {
        selectedSongIndex,
        didSceneEnter
    }
}

class SceneDispatcher extends PureComponent {
    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        didSceneEnter: PropTypes.bool.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ dispatchSceneIndex: this.dispatchSceneIndex })
    }

    dispatchSceneIndex = (selectedSceneIndex) => {
        const { selectedSongIndex } = this.props,
            selectedVerseIndex = getVerseIndexForScene(
                selectedSongIndex,
                selectedSceneIndex
            )

        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog: `Select scene ${selectedSceneIndex}, verse ${selectedVerseIndex}.`
        })
    }

    getDispatchVerse = dispatch => {
        this.dispatchVerse = dispatch
    }

    render() {
        return (
            <VerseDispatcher {...{ ref: this.getDispatchVerse }} />
        )
    }
}

export default connect(mapStateToProps)(SceneDispatcher)
