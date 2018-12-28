// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

class SceneChangeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSceneChangeRenderable: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { isSceneChangeRenderable } = this.props,
            { isSceneChangeRenderable: wasSceneChangeRenderable } = prevProps

        // Is unrenderable after scene change within same song.
        if (!isSceneChangeRenderable && wasSceneChangeRenderable) {
            this._handleSceneChangeUnrenderable()

        // Is renderable after scene change timeout.
        } else if (isSceneChangeRenderable && !wasSceneChangeRenderable) {
            this._handleSceneChangeRenderable()
        }
    }

    _handleSceneChangeUnrenderable() {
        this.unrenderedTime = Date.now()

        logRenderable('Unrenderable from scene change.')
        this.props.updateRenderStore({
            canSceneRender: false,
            didSceneRender: false
        })
    }

    _handleSceneChangeRenderable() {
        logRenderable(`Renderable after scene change, took ${
            ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
        } seconds.`)

        this.props.updateRenderStore({
            canSceneRender: true
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderableStore: {
        isSceneChangeRenderable
    }
}) => ({
    isSceneChangeRenderable
})

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(SceneChangeListener)
