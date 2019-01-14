import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import SceneChangeUpdateDispatcher from '../../SceneChange/Update'

import { populateRefs } from 'helpers/ref'

class SongChangeDoneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        cannotMountCarouselNav: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        didCurtainEnter: PropTypes.bool.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChangeEnter(prevProps)
    }

    _checkSongChangeEnter(prevProps) {
        const
            {
                cannotMountCarouselNav,
                didLyricEnter,
                didCarouselEnter,
                didCurtainEnter
            } = this.props,
            {
                didLyricEnter: hadLyricEntered,
                didCarouselEnter: hadCarouselEntered,
                didCurtainEnter: hadCurtainEntered
            } = prevProps

        // Is done entering.
        if (
            (
                // All these conditions are needed to enter transition.
                didLyricEnter &&
                (
                    didCarouselEnter || cannotMountCarouselNav
                ) &&
                didCurtainEnter

            ) && (
                // At least one of these conditions was previously false.
                !hadLyricEntered ||
                (
                    !hadCarouselEntered && !cannotMountCarouselNav
                ) ||
                !hadCurtainEntered
            )
        ) {
            this._beginEnterTransition()
        }
    }

    _beginEnterTransition() {
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
    responsiveStore: { cannotMountCarouselNav },
    lyricStore: {
        didCarouselEnter,
        didLyricEnter,
        didCurtainEnter
    }
}) => ({
    cannotMountCarouselNav,
    didCarouselEnter,
    didLyricEnter,
    didCurtainEnter
})

export default connect(
    mapStateToProps,
    {
        updateLyricStore
    }
)(SongChangeDoneListener)
