import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/toggle/action'

import VerseDispatcher from '../VerseDispatcher'

import { populateRefs } from 'helpers/ref'

import { getVerseIndexForNextScene } from './helper'

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
        this.props.getRefs({ dispatchScene: this.dispatchScene })
    }

    dispatchScene = (direction) => {
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
            scrollLog: 'Manual scene selected verse.'
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
