// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

class RenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkTheatreDidRender(prevProps)
        this._checkSceneDidRender(prevProps)
        this._checkLyricDidRender(prevProps)
    }

    _checkTheatreDidRender(prevProps) {
        const
            { didTheatreRender } = this.props,
            { didTheatreRender: hadTheatreRendered } = prevProps

        if (didTheatreRender && !hadTheatreRendered) {
            this.props.updateRenderStore({
                canSceneRender: true
            })
        }
    }

    _checkSceneDidRender(prevProps) {
        const
            { didSceneRender } = this.props,
            { didSceneRender: hadSceneRendered } = prevProps

        if (didSceneRender && !hadSceneRendered) {
            this.props.updateRenderStore({
                canLyricRender: true
            })
        }
    }

    _checkLyricDidRender(prevProps) {
        const
            { didLyricRender } = this.props,
            { didLyricRender: hadLyricRendered } = prevProps

        if (didLyricRender && !hadLyricRendered) {
            this.props.updateRenderStore({
                canCarouselRender: true
            })
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
        didLyricRender
    }
}) => ({
    didTheatreRender,
    didSceneRender,
    didLyricRender
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderListener)
