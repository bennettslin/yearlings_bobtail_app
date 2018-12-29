// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

class RenderCanListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        canCarouselRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        didLyricRenderTimeoutId: '',
        didCarouselRenderTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        this._checkLyricCanRender(prevProps)
        this._checkCarouselCanRender(prevProps)
    }

    _checkLyricCanRender(prevProps) {
        const
            { canLyricRender } = this.props,
            { canLyricRender: couldRender } = prevProps

        if (canLyricRender && !couldRender) {
            clearTimeout(this.state.didLyricRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didLyricRenderTimeoutId = setTimeout(
                this._lyricDidRender, 200
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
                this._carouselDidRender, 200
            )

            this.setState({ didCarouselRenderTimeoutId })
        }
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
        canLyricRender,
        canCarouselRender
    }
}) => ({
    canLyricRender,
    canCarouselRender
})

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(RenderCanListener)
