import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import SceneChangeUpdateDispatcher from '../../SceneChange/Update'

import { populateRefs } from 'helpers/ref'

class SongChangeUpdateListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        cannotMountCarouselNav: PropTypes.bool.isRequired,
        isSongSelectInFlux: PropTypes.bool.isRequired,

        didCarouselExit: PropTypes.bool.isRequired,
        didCurtainExit: PropTypes.bool.isRequired,
        didLyricExit: PropTypes.bool.isRequired,

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
                cannotMountCarouselNav,
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
                    didCarouselExit || cannotMountCarouselNav
                ) &&
                didCurtainExit &&
                didLyricExit

            ) && (
                // At least one of these conditions was previously false.
                wasSongSelectInFlux ||
                (
                    !hadCarouselExited && !cannotMountCarouselNav
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

        this.props.updateLyricStore({
            canLyricCarouselUpdate: true,
            lyricSongIndex: selectedSongIndex,
            lyricVerseIndex: selectedVerseIndex,
            lyricAnnotationIndex: selectedAnnotationIndex
        })
    }

    _beginUpdateToNewSceneState() {
        this.dispatchCanSceneUpdate()
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
    responsiveStore: { cannotMountCarouselNav },
    lyricStore: {
        didCarouselExit,
        didLyricExit,
        didCurtainExit
    },
    selectedStore: {
        isSongSelectInFlux,
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    cannotMountCarouselNav,
    isSongSelectInFlux,
    didCarouselExit,
    didCurtainExit,
    didLyricExit,
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
