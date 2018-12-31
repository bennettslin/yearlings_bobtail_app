import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

class SongChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didSceneUpdate: PropTypes.bool.isRequired,
        didLyricUpdate: PropTypes.bool.isRequired,
        didCarouselUpdate: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongUpdate(prevProps)
    }

    _checkSongUpdate(prevProps) {
        const
            {
                didSceneUpdate,
                didCarouselUpdate,
                didLyricUpdate
            } = this.props,
            {
                didSceneUpdate: hadSceneUpdated,
                didCarouselUpdate: hadCarouselUpdated,
                didLyricUpdate: hadLyricUpdated
            } = prevProps

        // Is done being updated.
        if (
            (
                // All conditions needed to begin enter transition.
                didSceneUpdate &&
                didCarouselUpdate &&
                didLyricUpdate

            ) && (
                // At least one of these conditions was previously false.
                !hadSceneUpdated ||
                !hadCarouselUpdated ||
                !hadLyricUpdated
            )
        ) {
            this._beginEnterTransition()
        }
    }

    _beginEnterTransition() {
        this.props.updateLyricStore({ canLyricCarouselEnter: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    lyricStore: {
        didLyricUpdate,
        didCarouselUpdate
    },
    sceneStore: { didSceneUpdate }
}) => ({
    didLyricUpdate,
    didCarouselUpdate,
    didSceneUpdate
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore
    }
)(SongChangeEnterListener)
