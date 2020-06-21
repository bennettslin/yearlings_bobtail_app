// Singleton to listen for changes that reset render flow.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SceneChangeUpdateDispatcher from '../Update'
import { mapIsSongChangeDone } from '../../../redux/entrance/selector'

const mapStateToProps = state => {
    const isSongChangeDone = mapIsSongChangeDone(state)

    return {
        isSongChangeDone
    }
}

class SceneChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongChangeDone: PropTypes.bool.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { isSongChangeDone } = this.props,
            { isSongChangeDone: wasSongSelectComplete } = prevProps

        /**
         * Scroll has finished exit transition, so now update state to kick off
         * enter transition.
         */
        if (isSongChangeDone && !wasSongSelectComplete) {
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
