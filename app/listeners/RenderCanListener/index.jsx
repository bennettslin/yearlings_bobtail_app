// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

class RenderCanListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        canSceneRender: PropTypes.bool.isRequired,
        canLyricRender: PropTypes.bool.isRequired,
        canCarouselRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        didTheatreRenderTimeoutId: '',
        didSceneRenderTimeoutId: '',
        didLyricRenderTimeoutId: '',
        didCarouselRenderTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        this._checkTheatreCanRender(prevProps)
        this._checkSceneCanRender(prevProps)
        this._checkLyricCanRender(prevProps)
        this._checkCarouselCanRender(prevProps)
    }

    _checkTheatreCanRender(prevProps) {
        const
            { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            clearTimeout(this.state.didTheatreRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didTheatreRenderTimeoutId = setTimeout(
                this._theatreDidRender, 100
            )

            this.setState({ didTheatreRenderTimeoutId })
        }
    }

    _checkSceneCanRender(prevProps) {
        const
            { canSceneRender } = this.props,
            { canSceneRender: couldRender } = prevProps

        if (canSceneRender && !couldRender) {
            clearTimeout(this.state.didSceneRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didSceneRenderTimeoutId = setTimeout(
                this._setDidSceneRender, 500
            )

            this.setState({ didSceneRenderTimeoutId })
        }
    }

    _checkLyricCanRender(prevProps) {
        const
            { canLyricRender } = this.props,
            { canLyricRender: couldRender } = prevProps

        if (canLyricRender && !couldRender) {
            clearTimeout(this.state.didLyricRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didLyricRenderTimeoutId = setTimeout(
                this._lyricDidRender, 100
            )

            this.setState({ didLyricRenderTimeoutId })
        }
    }

    _checkCarouselCanRender(prevProps) {
        const
            { canCarouselRender } = this.props,
            { canCarouselRender: couldRender } = prevProps

        if (canCarouselRender && !couldRender) {
            clearTimeout(this.state.didCarouselRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didCarouselRenderTimeoutId = setTimeout(
                this._carouselDidRender, 100
            )

            this.setState({ didCarouselRenderTimeoutId })
        }
    }

    _theatreDidRender = () => {
        this.props.updateRenderStore({ didTheatreRender: true })
    }

    _setDidSceneRender = () => {
        this.props.updateRenderStore({ didSceneRender: true })
    }

    _lyricDidRender = () => {
        this.props.updateRenderStore({ didLyricRender: true })
    }

    _carouselDidRender = () => {
        this.props.updateRenderStore({ didCarouselRender: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderStore: {
        canTheatreRender,
        canSceneRender,
        canLyricRender,
        canCarouselRender
    }
}) => ({
    canTheatreRender,
    canSceneRender,
    canLyricRender,
    canCarouselRender
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderCanListener)
