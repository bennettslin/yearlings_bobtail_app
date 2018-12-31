import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetLyricForTransition } from 'flux/lyric/action'
import { resetSceneForTransition } from 'flux/scene/action'
import { updateSelectedStore } from 'flux/selected/action'

class SongChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSongSelectInFlux: PropTypes.bool.isRequired,
        resetLyricForTransition: PropTypes.func.isRequired,
        resetSceneForTransition: PropTypes.func.isRequired,
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
            this.props.resetSceneForTransition()
            this.props.resetLyricForTransition()
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
        resetLyricForTransition,
        resetSceneForTransition,
        updateSelectedStore
    }
)(SongChangeExitListener)
