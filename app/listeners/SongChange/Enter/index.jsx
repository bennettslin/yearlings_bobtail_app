import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

class SongChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongSelectInFlux: PropTypes.bool.isRequired,
        isSongChangeCarouselExitDone: PropTypes.bool.isRequired,
        isSongChangeCurtainExitDone: PropTypes.bool.isRequired,
        isSongChangeLyricExitDone: PropTypes.bool.isRequired,

        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        didLyricUpdate: PropTypes.bool.isRequired,
        didCarouselUpdate: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
        this._checkSongUpdate(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            {
                isSongSelectInFlux,
                isSongChangeCarouselExitDone,
                isSongChangeCurtainExitDone,
                isSongChangeLyricExitDone
            } = this.props,
            {
                isSongSelectInFlux: wasSongSelectInFlux,
                isSongChangeCarouselExitDone: wasSongChangeCarouselExitDone,
                isSongChangeCurtainExitDone: wasSongChangeCurtainExitDone,
                isSongChangeLyricExitDone: wasSongChangeLyricExitDone
            } = prevProps

        // Is done being selected.
        if (
            (
                // All conditions needed to update state.
                !isSongSelectInFlux &&
                isSongChangeCarouselExitDone &&
                isSongChangeCurtainExitDone &&
                isSongChangeLyricExitDone

            ) && (
                // At least one of these conditions was previously false.
                wasSongSelectInFlux ||
                !wasSongChangeCarouselExitDone ||
                !wasSongChangeCurtainExitDone ||
                !wasSongChangeLyricExitDone
            )
        ) {
            this._beginUpdateToNewState()
        }
    }

    _beginUpdateToNewState() {
        logEnter('Lyric can update.')

        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        } = this.props

        this.props.updateLyricStore({
            canLyricUpdate: true,
            lyricSongIndex: selectedSongIndex,
            lyricVerseIndex: selectedVerseIndex,
            lyricAnnotationIndex: selectedAnnotationIndex
        })
    }

    _checkSongUpdate(prevProps) {
        const
            {
                didCarouselUpdate,
                didLyricUpdate
            } = this.props,
            {
                didCarouselUpdate: hadCarouselUpdated,
                didLyricUpdate: hadLyricUpdated
            } = prevProps

        // Is done being updated.
        if (
            (
                // All conditions needed to begin enter transition.
                didCarouselUpdate &&
                didLyricUpdate

            ) && (
                // At least one of these conditions was previously false.
                !hadCarouselUpdated ||
                !hadLyricUpdated
            )
        ) {
            this._beginEnterTransition()
        }
    }

    _beginEnterTransition() {
        this.props.updateLyricStore({ canLyricEnter: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    changeStore: {
        isSongSelectInFlux,
        isSongChangeCarouselExitDone,
        isSongChangeCurtainExitDone,
        isSongChangeLyricExitDone
    },
    renderStore: {
        didLyricUpdate,
        didCarouselUpdate
    },
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    isSongSelectInFlux,
    isSongChangeCarouselExitDone,
    isSongChangeCurtainExitDone,
    isSongChangeLyricExitDone,
    didLyricUpdate,
    didCarouselUpdate,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore
    }
)(SongChangeEnterListener)
