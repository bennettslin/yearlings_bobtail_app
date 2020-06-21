// Singleton to listen for changes that reset render flow.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SceneChangeUpdateDispatcher from '../Update'
import { mapCanLyricCarouselEnter } from '../../../redux/lyric/selector'

const mapStateToProps = state => {
    const canLyricCarouselEnter = mapCanLyricCarouselEnter(state)

    return {
        canLyricCarouselEnter
    }
}

class SceneChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { canLyricCarouselEnter } = this.props,
            { canLyricCarouselEnter: wasSongSelectComplete } = prevProps

        /**
         * Scroll has finished exit transition, so now update state to kick off
         * enter transition.
         */
        if (canLyricCarouselEnter && !wasSongSelectComplete) {
            this._beginEnterTransitionWithNewState()
        }
    }

    _beginEnterTransitionWithNewState() {
        this.dispatchCanSceneEnter()
    }

    getDispatchSceneChange = dispatch => {
        if (dispatch) {
            this.dispatchCanSceneEnter = dispatch.enter
        }
    }

    render() {
        return (
            <SceneChangeUpdateDispatcher {...{ ref: this.getDispatchSceneChange }} />
        )
    }
}

export default connect(mapStateToProps)(SceneChangeEnterListener)
