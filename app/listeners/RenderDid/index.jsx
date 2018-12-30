// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLoadStore } from 'flux/load/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'

import {
    CAN_THEATRE_RENDER,
    CAN_SCENE_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    getNextKeyCanRender
} from '../../helpers/render'

class RenderDidListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        didTheatreEnter: PropTypes.bool.isRequired,
        didSceneEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkAppMounted(prevProps)
        this._checkTheatreDidRender(prevProps)
        this._checkSceneDidRender(prevProps)
        this._checkLyricDidRender(prevProps)
        this._checkCarouselDidRender(prevProps)
    }

    _checkAppMounted(prevProps) {
        const
            { appMounted } = this.props,
            { appMounted: hadAppMounted } = prevProps

        if (appMounted && !hadAppMounted) {
            logEnter('App mounted.')

            this._renderAfterTheatre()
        }
    }

    _checkTheatreDidRender(prevProps) {
        const
            { didTheatreEnter } = this.props,
            { didTheatreEnter: hadTheatreRendered } = prevProps

        if (didTheatreEnter && !hadTheatreRendered) {
            logEnter('Theatre did enter.')

            if (!this.props.appMounted) {
                /**
                 * Allow theatre to be visible before others render. This
                 * isn't always the case when the timeout duration is shorter,
                 * for some reason.
                 */
                setTimeout(this._mountApp, 0)

            } else {
                this._renderAfterTheatre()
            }
        }
    }

    _mountApp = () => {
        this.props.updateLoadStore({ appMounted: true })
    }

    _renderAfterTheatre = () => {
        const nextKey = getNextKeyCanRender({ currentKey: CAN_THEATRE_RENDER })
        if (nextKey) {
            this.props.updateLyricStore({ [nextKey]: true })
        }
    }

    _checkSceneDidRender(prevProps) {
        const
            { didSceneEnter } = this.props,
            { didSceneEnter: hadSceneRendered } = prevProps

        if (didSceneEnter && !hadSceneRendered) {
            logEnter('Scene did enter.')

            const nextKey = getNextKeyCanRender({ currentKey: CAN_SCENE_RENDER })
            if (nextKey) {
                this.props.updateLyricStore({ [nextKey]: true })
            }
        }
    }

    _checkLyricDidRender(prevProps) {
        const
            { didLyricEnter } = this.props,
            { didLyricEnter: hadLyricRendered } = prevProps

        if (didLyricEnter && !hadLyricRendered) {
            logEnter('Lyric did enter.')

            const nextKey = getNextKeyCanRender({
                currentKey: CAN_LYRIC_RENDER
            })

            if (nextKey === CAN_SCENE_RENDER) {
                this.props.updateSceneStore({
                    [nextKey]: true
                })
            } else if (nextKey) {
                this.props.updateLyricStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkCarouselDidRender(prevProps) {
        const
            { didCarouselEnter } = this.props,
            { didCarouselEnter: hadCarouselRendered } = prevProps

        if (didCarouselEnter && !hadCarouselRendered) {
            logEnter('Carousel did enter.')

            const nextKey = getNextKeyCanRender({
                currentKey: CAN_CAROUSEL_RENDER
            })

            if (nextKey === CAN_SCENE_RENDER) {
                this.props.updateSceneStore({
                    [nextKey]: true
                })
            } else if (nextKey) {
                this.props.updateLyricStore({
                    [nextKey]: true
                })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    loadStore: { appMounted },
    renderStore: {
        didTheatreEnter,
        didSceneEnter,
        didLyricEnter,
        didCarouselEnter
    }
}) => ({
    appMounted,
    didTheatreEnter,
    didSceneEnter,
    didLyricEnter,
    didCarouselEnter
})

export default connect(
    mapStateToProps,
    {
        updateLoadStore,
        updateLyricStore,
        updateSceneStore
    }
)(RenderDidListener)
