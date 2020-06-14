import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateLyricStore } from '../../../redux/lyric/action'
import SceneChangeUpdateDispatcher from '../../SceneChange/Update'
import {
    mapDidCarouselExit,
    mapDidLyricExit,
    mapDidCurtainExit,
    mapIsSongSelectInFlux
} from '../../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'
import { mapCanCarouselMount } from '../../../redux/viewport/selector'

const mapStateToProps = state => {
    const
        didCarouselExit = mapDidCarouselExit(state),
        didLyricExit = mapDidLyricExit(state),
        didCurtainExit = mapDidCurtainExit(state),
        isSongSelectInFlux = mapIsSongSelectInFlux(state),
        canCarouselMount = mapCanCarouselMount(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state)

    return {
        canCarouselMount,
        isSongSelectInFlux,
        didCarouselExit,
        didCurtainExit,
        didLyricExit,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}

class SongChangeUpdateListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        isSongSelectInFlux: PropTypes.bool.isRequired,

        didCarouselExit: PropTypes.bool.isRequired,
        didCurtainExit: PropTypes.bool.isRequired,
        didLyricExit: PropTypes.bool.isRequired,

        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        updateEntranceStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            {
                canCarouselMount,
                isSongSelectInFlux,
                didCarouselExit,
                didCurtainExit,
                didLyricExit
            } = this.props,
            {
                isSongSelectInFlux: wasSongSelectInFlux,
                didCarouselExit: hadCarouselExited,
                didCurtainExit: hadCurtainExited,
                didLyricExit: hadLyricExited
            } = prevProps

        // Is done being selected.
        if (
            (
                // All these conditions are needed to update state.
                !isSongSelectInFlux &&
                (
                    didCarouselExit || !canCarouselMount
                ) &&
                didCurtainExit &&
                didLyricExit

            ) && (
                // At least one of these conditions was previously false.
                wasSongSelectInFlux ||
                (
                    !hadCarouselExited && canCarouselMount
                ) ||
                !hadCurtainExited ||
                !hadLyricExited
            )
        ) {
            this._beginUpdateToNewLyricState()
            this._beginUpdateToNewSceneState()
        }
    }

    _beginUpdateToNewLyricState() {
        logTransition('Lyric carousel can update.')

        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        } = this.props

        logTransition('Lyric carousel can update from song change.')
        this.props.updateEntranceStore({
            canLyricCarouselUpdate: true
        })

        this.props.updateLyricStore({
            lyricSongIndex: selectedSongIndex,
            lyricVerseIndex: selectedVerseIndex,
            lyricAnnotationIndex: selectedAnnotationIndex
        })
    }

    _beginUpdateToNewSceneState() {
        this.dispatchCanSceneUpdate()
    }

    getDispatchSceneChange = dispatch => {
        if (dispatch) {
            this.dispatchCanSceneUpdate = dispatch.update
        }
    }

    render() {
        return (
            <SceneChangeUpdateDispatcher {...{ ref: this.getDispatchSceneChange }} />
        )
    }
}

export default connect(
    mapStateToProps,
    {
        updateEntranceStore,
        updateLyricStore
    }
)(SongChangeUpdateListener)
