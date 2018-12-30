// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'

import {
    CAN_SCENE_RENDER,
    CAN_THEATRE_RENDER,
    getNextKeyCanRender
} from '../../../helpers/render'

class SongChangeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongSelectInFlux: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            { isSongSelectInFlux } = this.props,
            { isSongSelectInFlux: wasSongSelectInFlux } = prevProps

        // Is still being selected
        if (isSongSelectInFlux && !wasSongSelectInFlux) {
            this._initiateExitTransition()

        // Is done being selected.
        } else if (!isSongSelectInFlux && wasSongSelectInFlux) {
            this._handleSongChangeRenderable()
        }
    }

    _initiateExitTransition() {
        this.props.updateSceneStore({ canSceneEnter: false })
        this.props.updateLyricStore({
            canLyricEnter: false,
            canCarouselEnter: false
        })
        this.props.updateRenderStore({
            didSceneEnter: false,
            didLyricEnter: false,
            didCarouselEnter: false
        })
    }

    _handleSongChangeRenderable() {
        const nextKey = getNextKeyCanRender({ currentKey: CAN_THEATRE_RENDER })

        if (nextKey === CAN_SCENE_RENDER) {
            this.props.updateSceneStore({ [nextKey]: true })
        } else {
            this.props.updateLyricStore({ [nextKey]: true })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    changeStore: { isSongSelectInFlux }
}) => ({
    isSongSelectInFlux
})

export default connect(
    mapStateToProps,
    {
        updateRenderStore,
        updateLyricStore,
        updateSceneStore
    }
)(SongChangeListener)
