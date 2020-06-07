// Singleton to listen for changes that reset render flow.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SceneChangeUpdateDispatcher from '../Update'
import { mapDidSceneScrollExit } from '../../../redux/entrance/selectors'

const mapStateToProps = state => {
    const didSceneScrollExit = mapDidSceneScrollExit(state)

    return {
        didSceneScrollExit
    }
}

class SceneChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didSceneScrollExit: PropTypes.bool.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { didSceneScrollExit } = this.props,
            { didSceneScrollExit: hadSceneScrollExited } = prevProps

        /**
         * Scroll has finished exit transition, so now update state to kick off
         * enter transition.
         */
        if (didSceneScrollExit && !hadSceneScrollExited) {
            this._beginEnterTransitionWithNewState()
        }
    }

    _beginEnterTransitionWithNewState() {
        this.dispatchCanSceneEnter()
    }

    getDispatchSceneChange = dispatch => {
        if (dispatch) {
            this.dispatchCanSceneEnter = dispatch.dispatchCanSceneEnter
        }
    }

    render() {
        return (
            <SceneChangeUpdateDispatcher {...{ ref: this.getDispatchSceneChange }} />
        )
    }
}

export default connect(mapStateToProps)(SceneChangeEnterListener)
