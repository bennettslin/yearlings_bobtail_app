import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransitionStore } from 'flux/transition/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'
import { updateSelectedStore } from 'flux/selected/action'

class SongChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSongSelectInFlux: PropTypes.bool.isRequired,
        updateTransitionStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired
    }

    state = {
        songChangeTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this._beginExitTransition()
        }
    }

    _beginExitTransition = () => {

        // Only reset these values once.
        // TODO: Not sure if this actually does the trick.
        if (!this.props.isSongSelectInFlux) {
            this.props.updateSelectedStore({ isSongSelectInFlux: true })
            this.props.updateSceneStore({ canSceneEnter: false })
            this.props.updateLyricStore({
                didCarouselExit: false,
                didLyricExit: false,
                didCurtainExit: false,
                canLyricCarouselEnter: false,
                canLyricCarouselUpdate: false
            })
            this.props.updateTransitionStore({
                didSceneEnter: false,
                didLyricEnter: false,
                didCarouselEnter: false,
                didLyricUpdate: false,
                didCarouselUpdate: false
            })
        }

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Wait for song selection to finish.
         */
        const songChangeTimeoutId = setTimeout(
            this._dispatchSongSelectComplete, 200
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    _dispatchSongSelectComplete = () => {
        this.props.updateSelectedStore({ isSongSelectInFlux: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        isSongSelectInFlux,
        selectedSongIndex
    }
}) => ({
    isSongSelectInFlux,
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateTransitionStore,
        updateLyricStore,
        updateSceneStore,
        updateSelectedStore
    }
)(SongChangeExitListener)
