// Singleton to listen for non-toggle events that require turning off score.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RenderableDispatcher from '../../../handlers/RenderableHandler/Dispatcher'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    renderedStore: {
        renderedSongIndex,
        renderedSceneIndex
    }
}) => ({
    renderedSongIndex,
    renderedSceneIndex
})

class SceneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSceneIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired
    }

    componentDidUpdate(prevProps) {
        this._updateSceneIfNeeded(prevProps)
    }

    _updateSceneIfNeeded(prevProps) {
        const
            {
                renderedSceneIndex,
                renderedSongIndex
            } = this.props,
            {
                renderedSceneIndex: prevSceneIndex,
                renderedSongIndex: prevSongIndex
            } = prevProps

        if (
            // Only listen for scene change within the same song.
            renderedSongIndex === prevSongIndex &&
            renderedSceneIndex !== prevSceneIndex
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
