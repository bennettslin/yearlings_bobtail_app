// Singleton to listen for non-toggle events that require turning off score.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RenderableDispatcher from '../../../handlers/RenderableHandler/Dispatcher'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedSceneIndex
    }
}) => ({
    selectedSongIndex,
    selectedSceneIndex
})

class SceneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired
    }

    componentDidUpdate(prevProps) {
        this._updateSceneIfNeeded(prevProps)
    }

    _updateSceneIfNeeded(prevProps) {
        const
            {
                selectedSceneIndex,
                selectedSongIndex
            } = this.props,
            {
                selectedSceneIndex: prevSceneIndex,
                selectedSongIndex: prevSongIndex
            } = prevProps

        if (
            // Only listen for scene change within the same song.
            selectedSongIndex === prevSongIndex &&
            selectedSceneIndex !== prevSceneIndex
        ) {
            this.dispatchSceneChangeUnrenderable()
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <RenderableDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

export default connect(mapStateToProps)(SceneListener)
