// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

import {
    THEATRE,
    getNextKeyCanRender
} from '../../../helpers/render'

class RenderableListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongChangeRenderable: PropTypes.bool.isRequired,
        isSceneChangeRenderable: PropTypes.bool.isRequired,
        isWindowResizeRenderable: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        this._checkWindowResize(prevProps)
        this._checkSongChange(prevProps)
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

    _checkWindowResize(prevProps) {
        const
            { isWindowResizeRenderable } = this.props,
            { isWindowResizeRenderable: wasWindowResizeRenderable } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this._handleWindowResizeUnrenderable()

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            this._handleWindowResizeRenderable()
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

    _handleSongChangeUnrenderable() {
        this.unrenderedTime = Date.now()

        logRenderable('Unrenderable from song change.')
        this.props.updateRenderStore({
            canSceneRender: false,
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
            currentKey: THEATRE
        })
        this.props.updateRenderStore({
            [nextKey]: true
        })
    }

    _handleWindowResizeUnrenderable() {
        this.unrenderedTime = Date.now()

        logRenderable('Unrenderable from window resize.')
        this.props.updateRenderStore({
            canTheatreRender: false,
            didTheatreRender: false
        })
    }

    _handleWindowResizeRenderable() {
        logRenderable(`Renderable after window resize, took ${
            ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
        } seconds.`)

        this.props.updateRenderStore({
            canTheatreRender: true
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderableStore: {
        isSceneChangeRenderable,
        isSongChangeRenderable,
        isWindowResizeRenderable
    }
}) => ({
    isSceneChangeRenderable,
    isSongChangeRenderable,
    isWindowResizeRenderable
})

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(RenderableListener)
