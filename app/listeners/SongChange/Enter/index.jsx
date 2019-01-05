import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

class SongChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
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
                isUnrenderableCarouselNav,
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
                    didCarouselUpdate || isUnrenderableCarouselNav
                ) &&
                didLyricUpdate

            ) && (
                // At least one of these conditions was previously false.
                !hadSceneUpdated ||
                (
                    !hadCarouselUpdated && !isUnrenderableCarouselNav
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
    responsiveStore: { isUnrenderableCarouselNav },
    lyricStore: {
        didLyricUpdate,
        didCarouselUpdate
    },
    sceneStore: { didSceneUpdate }
}) => ({
    isUnrenderableCarouselNav,
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
