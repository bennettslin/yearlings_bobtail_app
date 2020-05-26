import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SceneChangeUpdateDispatcher from '../../SceneChange/Update'

import { populateRefs } from '../../../helpers/ref'

class SongChangeDoneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
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
                canCarouselMount,
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
                    didCarouselEnter || !canCarouselMount
                ) &&
                didCurtainEnter

            ) && (
                // At least one of these conditions was previously false.
                !hadLyricEntered ||
                (
                    !hadCarouselEntered && canCarouselMount
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

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <SceneChangeUpdateDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = state => {
    const {
        mountStore: { canCarouselMount },
        entranceStore: {
            didCarouselEnter,
            didLyricEnter,
            didCurtainEnter
        }
    } = state

    return {
        canCarouselMount,
        didCarouselEnter,
        didLyricEnter,
        didCurtainEnter
    }
}

export default connect(mapStateToProps)(SongChangeDoneListener)
