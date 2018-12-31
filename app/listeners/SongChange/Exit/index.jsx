import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateRenderStore } from 'flux/render/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'

class SongChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateChangeStore: PropTypes.func.isRequired,
        updateRenderStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
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
        this.props.updateChangeStore({
            isSongSelectInFlux: true,
            isSongChangeCarouselExitDone: false,
            isSongChangeCurtainExitDone: false,
            isSongChangeLyricExitDone: false
        })
        this.props.updateSceneStore({ canSceneEnter: false })
        this.props.updateLyricStore({
            canLyricEnter: false,
            canLyricUpdate: false
        })
        this.props.updateRenderStore({
            didSceneEnter: false,
            didLyricEnter: false,
            didCarouselEnter: false,

            didLyricUpdate: false,
            didCarouselUpdate: false
        })

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
        this.props.updateChangeStore({ isSongSelectInFlux: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

export default connect(
    mapStateToProps,
    {
        updateChangeStore,
        updateRenderStore,
        updateLyricStore,
        updateSceneStore
    }
)(SongChangeExitListener)
