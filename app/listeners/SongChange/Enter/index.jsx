import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from '../../../redux/lyric/action'

class SongChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
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
                canCarouselMount,
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
                (
                    didCarouselUpdate || !canCarouselMount
                ) &&
                didLyricUpdate

            ) && (
                // At least one of these conditions was previously false.
                !hadSceneUpdated ||
                (
                    !hadCarouselUpdated && canCarouselMount
                ) ||
                !hadLyricUpdated
            )
        ) {
            this._beginEnterTransition()
        }
    }

    _beginEnterTransition() {
        logTransition('Lyric carousel can enter.')
        this.props.updateLyricStore({ canLyricCarouselEnter: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    mountStore: { canCarouselMount },
    lyricStore: {
        didLyricUpdate,
        didCarouselUpdate
    },
    entranceStore: { didSceneUpdate }
}) => ({
    canCarouselMount,
    didLyricUpdate,
    didCarouselUpdate,
    didSceneUpdate
})

export default connect(
    mapStateToProps,
    { updateLyricStore }
)(SongChangeEnterListener)
