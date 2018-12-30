// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'
import { updateSceneStore } from 'flux/scene/action'

import {
    CAN_SCENE_RENDER,
    CAN_THEATRE_RENDER,
    getNextKeyCanRender
} from '../../../helpers/render'

class SongChangeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongBeingSelected: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSongChange(prevProps)
    }

    _checkSongChange(prevProps) {
        const
            { isSongBeingSelected } = this.props,
            { isSongBeingSelected: wasSongBeingSelected } = prevProps

        // Is still being selected
        if (isSongBeingSelected && !wasSongBeingSelected) {
            this._beginExitTransitions()

        // Is done being selected.
        } else if (!isSongBeingSelected && wasSongBeingSelected) {
            this._handleSongChangeRenderable()
        }
    }

    _beginExitTransitions() {
        this.props.updateSceneStore({ canSceneRender: false })
        this.props.updateRenderStore({
            didSceneRender: false,
            canLyricRender: false,
            didLyricRender: false,
            canCarouselRender: false,
            didCarouselRender: false
        })
    }

    _handleSongChangeRenderable() {
        const nextKey = getNextKeyCanRender({
            currentKey: CAN_THEATRE_RENDER
        })

        if (nextKey === CAN_SCENE_RENDER) {
            this.props.updateSceneStore({
                [nextKey]: true
            })
        } else {
            this.props.updateRenderStore({
                [nextKey]: true
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    changeStore: { isSongBeingSelected }
}) => ({
    isSongBeingSelected
})

export default connect(
    mapStateToProps,
    {
        updateRenderStore,
        updateSceneStore
    }
)(SongChangeListener)
