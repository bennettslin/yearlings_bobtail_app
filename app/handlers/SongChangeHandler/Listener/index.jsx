// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'
import { updateSceneStore } from 'flux/scene/action'

import {
    CAN_SCENE_RENDER,
    CAN_THEATRE_RENDER,
    getNextKeyCanRender
} from '../../../helpers/render'

class SongChangeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongChangeRenderable: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            { isSongChangeRenderable } = this.props,
            { isSongChangeRenderable: wasSongChangeRenderable } = prevProps

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this._handleSongChangeUnrenderable()

        // Is renderable after song change timeout.
        } else if (isSongChangeRenderable && !wasSongChangeRenderable) {
            this._handleSongChangeRenderable()
        }
    }

    _handleSongChangeUnrenderable() {
        this.unrenderedTime = Date.now()

        logRenderable('Unrenderable from song change.')
        this.props.updateSceneStore({ canSceneRender: false })
        this.props.updateRenderStore({
            didSceneRender: false,
            canLyricRender: false,
            didLyricRender: false,
            canCarouselRender: false,
            didCarouselRender: false
        })
    }

    _handleSongChangeRenderable() {
        logRenderable(`Renderable after song change, took ${
            ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
        } seconds.`)

        const nextKey = getNextKeyCanRender({
            currentKey: CAN_THEATRE_RENDER
        })

        if (nextKey === CAN_SCENE_RENDER) {
            this.props.updateSceneStore({
                [nextKey]: true
            })
        } else {
            this.props.updateRenderStore({
                [nextKey]: true
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderableStore: { isSongChangeRenderable }
}) => ({
    isSongChangeRenderable
})

export default connect(
    mapStateToProps,
    {
        updateRenderStore,
        updateSceneStore
    }
)(SongChangeListener)
