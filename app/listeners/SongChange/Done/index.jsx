import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import SceneChangeUpdateDispatcher from '../../SceneChange/Update'

import { populateRefs } from 'helpers/ref'

class SongChangeDoneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
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
                didCarouselEnter,
                didLyricEnter,
                didCurtainEnter
            } = this.props,
            {
                didCarouselEnter: hadCarouselEntered,
                didLyricEnter: hadLyricEntered,
                didCurtainEnter: hadCurtainEntered
            } = prevProps

        // Is done entering.
        if (
            (
                // All these conditions are needed to enter transition.
                didCarouselEnter &&
                didLyricEnter &&
                didCurtainEnter

            ) && (
                // At least one of these conditions was previously false.
                !hadCarouselEntered ||
                !hadLyricEntered ||
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
    lyricStore: {
        didCarouselEnter,
        didLyricEnter,
        didCurtainEnter
    }
}) => ({
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
