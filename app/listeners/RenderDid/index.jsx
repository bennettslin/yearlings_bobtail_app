// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLoadStore } from 'flux/load/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'

class RenderDidListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        didTheatreEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkAppMounted(prevProps)
        this._checkTheatreDidEnter(prevProps)
        this._checkLyricDidEnter(prevProps)
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

    _checkTheatreDidEnter(prevProps) {
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
        this.props.updateLyricStore({ canLyricEnter: true })
    }

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
            logEnter('Lyric did enter.')
            this.props.updateSceneStore({ canSceneEnter: true })
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
        didLyricEnter,
        didCarouselEnter
    }
}) => ({
    appMounted,
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
