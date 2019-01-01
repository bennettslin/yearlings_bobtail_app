// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateSceneStore } from 'flux/scene/action'

import Transition from 'react-transition-group/Transition'
import Layers from './Layers'
import Sky from './Sky'
import Wood from './Wood'

const mapStateToProps = ({
    sceneStore: {
        canSceneEnter,
        canSceneUpdate
    }
}) => ({
    canSceneEnter,
    canSceneUpdate
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneEnter: PropTypes.bool.isRequired,
        canSceneUpdate: PropTypes.bool.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    _handleTransitionUpdated = () => {
        this.props.updateSceneStore({ didSceneUpdate: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateSceneStore({ didSceneEnter: true })
    }

    render() {
        const {
            canSceneUpdate,
            canSceneEnter
        } = this.props

        return (
            <Transition
                mountOnEnter
                {...{
                    in: canSceneEnter,
                    timeout: 200,
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div className={cx(
                    'Scene'
                )}>
                    <Sky />
                    <Wood />
                    <Transition
                        {...{
                            in: canSceneUpdate,
                            timeout: 200,
                            onEntered: this._handleTransitionUpdated
                        }}
                    >
                        <Layers />
                    </Transition>
                </div>
            </Transition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateSceneStore }
)(Scene)
