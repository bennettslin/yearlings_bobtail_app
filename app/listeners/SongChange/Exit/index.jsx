import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'
import { updateSelectedStore } from 'flux/selected/action'

class SongChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        canSceneUpdate: PropTypes.bool.isRequired,
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
        const {
            canLyricCarouselUpdate,
            canLyricCarouselEnter,
            canSceneUpdate
        } = this.props

        this.props.updateSelectedStore({ isSongSelectInFlux: true })

        this.props.updateSceneStore({
            // Song change bypasses scroll exit part of transition.

            canSceneUpdate: false,

            /**
             * Once transition condition has already been met, its callbacks
             * will not execute again. So only reset the values set in its
             * callbacks if the condition has not yet been met. (I'm not 100%
             * certain that this logic is optimal, but at the very least it
             * works and doesn't break.)
             */
            ...canSceneUpdate && {
                didSceneUpdate: false
            },

            canSceneEnter: false,
            didSceneEnter: false
        })

        this.props.updateLyricStore({

            ...canLyricCarouselEnter && {
                didCarouselExit: false,
                didLyricExit: false,
                didCurtainExit: false
            },

            canLyricCarouselUpdate: false,

            ...canLyricCarouselUpdate && {
                didLyricUpdate: false,
                didCarouselUpdate: false
            },

            canLyricCarouselEnter: false,
            didLyricEnter: false,
            didCarouselEnter: false,
            didCurtainEnter: false
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
        this.props.updateSelectedStore({ isSongSelectInFlux: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex },
    lyricStore: {
        canLyricCarouselUpdate,
        canLyricCarouselEnter
    },
    sceneStore: { canSceneUpdate }
}) => ({
    selectedSongIndex,
    canLyricCarouselUpdate,
    canLyricCarouselEnter,
    canSceneUpdate
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore,
        updateSceneStore,
        updateSelectedStore
    }
)(SongChangeExitListener)
