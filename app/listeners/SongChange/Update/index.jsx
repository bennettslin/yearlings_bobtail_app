import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import SceneChangeUpdateDispatcher from '../../SceneChange/Update'

import { populateRefs } from 'helpers/ref'

class SongChangeUpdateListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongSelectInFlux: PropTypes.bool.isRequired,
        isSongChangeCarouselExitDone: PropTypes.bool.isRequired,
        isSongChangeCurtainExitDone: PropTypes.bool.isRequired,
        isSongChangeLyricExitDone: PropTypes.bool.isRequired,

        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
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
            this._beginUpdateToNewLyricState()
            this._beginUpdateToNewSceneState()
        }
    }

    _beginUpdateToNewLyricState() {
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

    _beginUpdateToNewSceneState() {
        this.dispatchCanSceneEnter()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <SceneChangeUpdateDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    changeStore: {
        isSongSelectInFlux,
        isSongChangeCarouselExitDone,
        isSongChangeCurtainExitDone,
        isSongChangeLyricExitDone
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
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore
    }
)(SongChangeUpdateListener)
