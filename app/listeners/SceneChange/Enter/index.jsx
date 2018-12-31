// Singleton to listen for changes that reset render flow.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SceneChangeUpdateDispatcher from '../Update'

import { populateRefs } from 'helpers/ref'

class SceneChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSceneChangeScrollExitDone: PropTypes.bool.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { isSceneChangeScrollExitDone } = this.props,
            { isSceneChangeScrollExitDone: wasExitScrollDone } = prevProps

        /**
         * Scroll has finished exit transition, so now update state to kick off
         * enter transition.
         */
        if (isSceneChangeScrollExitDone && !wasExitScrollDone) {
            this._beginEnterTransitionWithNewState()
        }
    }

    _beginEnterTransitionWithNewState() {
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
    changeStore: { isSceneChangeScrollExitDone }
}) => ({
    isSceneChangeScrollExitDone
})

export default connect(mapStateToProps)(SceneChangeEnterListener)
