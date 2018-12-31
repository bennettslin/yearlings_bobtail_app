// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateTransitionStore } from 'flux/transition/action'

import Transition from 'react-transition-group/Transition'
import Layers from './Layers'
import Sky from './Sky'
import Wood from './Wood'

const mapStateToProps = ({
    sceneStore: { canSceneEnter }
}) => ({
    canSceneEnter
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneEnter: PropTypes.bool.isRequired,
        updateTransitionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    _handleTransitionEntered = () => {
        this.props.updateTransitionStore({
            didSceneEnter: true,
            didSceneUpdate: true
        })
    }

    render() {
        const { canSceneEnter } = this.props

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
                    <Layers />
                </div>
            </Transition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateTransitionStore }
)(Scene)
