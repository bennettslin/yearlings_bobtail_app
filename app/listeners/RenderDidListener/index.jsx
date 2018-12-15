// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

import {
    THEATRE,
    SCENE,
    LYRIC,
    CAROUSEL,
    getNextKeyToRender
} from '../../helpers/render'

class RenderDidListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        didCarouselRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkTheatreDidRender(prevProps)
        this._checkSceneDidRender(prevProps)
        this._checkLyricDidRender(prevProps)
        this._checkCarouselDidRender(prevProps)
    }

    _checkTheatreDidRender(prevProps) {
        const
            { didTheatreRender } = this.props,
            { didTheatreRender: hadTheatreRendered } = prevProps

        if (didTheatreRender && !hadTheatreRendered) {
            logRender('Theatre did render.')

            const nextKey = getNextKeyToRender({ currentKey: THEATRE })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkSceneDidRender(prevProps) {
        const
            { didSceneRender } = this.props,
            { didSceneRender: hadSceneRendered } = prevProps

        if (didSceneRender && !hadSceneRendered) {
            logRender('Scene did render.')

            const nextKey = getNextKeyToRender({ currentKey: SCENE })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkLyricDidRender(prevProps) {
        const
            { didLyricRender } = this.props,
            { didLyricRender: hadLyricRendered } = prevProps

        if (didLyricRender && !hadLyricRendered) {
            logRender('Lyric did render.')

            const nextKey = getNextKeyToRender({ currentKey: LYRIC })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkCarouselDidRender(prevProps) {
        const
            { didCarouselRender } = this.props,
            { didCarouselRender: hadCarouselRendered } = prevProps

        if (didCarouselRender && !hadCarouselRendered) {
            logRender('Carousel did render.')

            const nextKey = getNextKeyToRender({ currentKey: CAROUSEL })
            if (nextKey) {
                this.props.updateRenderStore({
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
    renderStore: {
        didTheatreRender,
        didSceneRender,
        didLyricRender,
        didCarouselRender
    }
}) => ({
    didTheatreRender,
    didSceneRender,
    didLyricRender,
    didCarouselRender
})

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(RenderDidListener)
