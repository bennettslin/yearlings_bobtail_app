import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import VerseDispatcher from '../VerseDispatcher'

import { getVerseIndexForSceneIndex } from '../../album/api/scenes'
import { populateRefs } from 'helpers/ref'

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
            selectedVerseIndex = getVerseIndexForSceneIndex(
                selectedSongIndex,
                selectedSceneIndex
            )

        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog: `Select scene ${selectedSceneIndex}, verse ${selectedVerseIndex}.`
        })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <VerseDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex },
    sceneStore: { didSceneEnter }
}) => ({
    selectedSongIndex,
    didSceneEnter
})

export default connect(mapStateToProps)(SceneDispatcher)
