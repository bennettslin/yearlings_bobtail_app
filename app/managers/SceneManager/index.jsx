import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRenderableStore } from 'flux/renderable/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getVerseIndexForNextScene } from './helper'

class SceneManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateRenderableStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired
    }

    state = {
        sceneChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.setRef(this)
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
            this._prepareForSceneChangeUnrender()
        }
    }

    _prepareForSceneChangeUnrender() {

        // This only gets toggled for a scene change within the same song.
        this.props.updateRenderableStore({
            isSceneChangeRenderable: false
        })

        // Clear previous timeout.
        clearTimeout(this.state.sceneChangeTimeoutId)

        const sceneChangeTimeoutId = setTimeout(
            this._prepareForSceneChangeRender, 200
        )

        this.setState({
            sceneChangeTimeoutId
        })
    }

    _prepareForSceneChangeRender = () => {

        this.props.updateRenderableStore({
            isSceneChangeRenderable: true
        })
    }

    selectScene(direction) {
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex, selectedVerseIndex, direction
        )

        if (nextVerseIndex > -1) {
            this.props.selectVerse({
                selectedVerseIndex: nextVerseIndex,
                scrollLog: 'Manual scene changed.'
            })

            /**
             * Verse bars always get reset. This behaviour can be a little
             * janky, but it doesn't matter since this won't get called in
             * production.
             */
            this.props.updateToggleStore({
                isVerseBarAbove: false,
                isVerseBarBelow: false
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderedStore: {
        renderedSceneIndex
    },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    renderedSceneIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderableStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SceneManager)
