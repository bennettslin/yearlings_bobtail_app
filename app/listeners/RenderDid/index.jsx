// TODO: Move all of these.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLoadStore } from 'flux/load/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'

class RenderDidListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        // this._checkAppMounted(prevProps)
        this._checkTheatreDidEnter(prevProps)
        this._checkLyricDidEnter(prevProps)
    }

    _checkTheatreDidEnter(prevProps) {
        const
            { didTheatreEnter } = this.props,
            { didTheatreEnter: hadTheatreRendered } = prevProps

        if (didTheatreEnter && !hadTheatreRendered) {
            logEnter('Lyric can enter.')
            this.props.updateLyricStore({ canLyricEnter: true })
        }
    }

    // TODO: Scene can enter in two places. Is this correct?
    _checkLyricDidEnter(prevProps) {
        const
            {
                didLyricEnter,
                didCarouselEnter
            } = this.props,
            {
                didLyricEnter: hadLyricEntered,
                didCarouselEnter: hadCarouselEntered
            } = prevProps

        if (
            (
                didLyricEnter &&
                didCarouselEnter
            ) && (
                !hadLyricEntered ||
                !hadCarouselEntered
            )
        ) {
            logEnter('Scene can enter.')
            this.props.updateSceneStore({ canSceneEnter: true })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderStore: {
        didTheatreEnter,
        didLyricEnter,
        didCarouselEnter
    }
}) => ({
    didTheatreEnter,
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
