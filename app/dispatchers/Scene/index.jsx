import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

import VerseDispatcher from '../VerseDispatcher'

import {
    getVerseIndexForSceneIndex,
    getVerseIndexForNextScene
} from '../../album/api/scenes'
import { populateRefs } from 'helpers/ref'

class SceneDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        didSceneEnter: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSceneDirection: this.dispatchSceneDirection
        })
    }

    dispatchSceneIndex = (sceneIndex) => {
        const
            { selectedSongIndex } = this.props,
            nextVerseIndex = getVerseIndexForSceneIndex(
                selectedSongIndex,
                sceneIndex
            )

        this.dispatchVerse({
            selectedVerseIndex: nextVerseIndex,
            scrollLog: 'Scene index selected verse.'
        })
    }

    dispatchSceneDirection = (direction) => {
        const {
            isSelectedLogue,
            didSceneEnter
        } = this.props

        if (isSelectedLogue || !didSceneEnter) {
            return false
        }

        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex,
            selectedVerseIndex,
            direction
        )

        this.dispatchVerse({
            selectedVerseIndex: nextVerseIndex,
            scrollLog: 'Scene direction selected verse.'
        })

        return true
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
    selectedStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex
    },
    sceneStore: { didSceneEnter }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedVerseIndex,
    didSceneEnter
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(SceneDispatcher)
