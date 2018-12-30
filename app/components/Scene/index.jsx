// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

import Transition from 'react-transition-group/Transition'
import Layers from './Layers'
import Sky from './Sky'
import Wood from './Wood'

const mapStateToProps = ({
    loadStore: { appMounted },
    sceneStore: { canSceneRender }
}) => ({
    appMounted,
    canSceneRender
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        canSceneRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    _handleTransitionEntered = () => {
        this.props.updateRenderStore({ didSceneRender: true })
    }

    render() {
        const {
            appMounted,
            canSceneRender
        } = this.props

        return (
            <Transition
                mountOnEnter
                {...{
                    in: canSceneRender,
                    timeout: 200,
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div className={cx(
                    'Scene'
                )}>
                    <Sky />
                    <Wood />
                    {appMounted && (
                        <Layers />
                    )}
                </div>
            </Transition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(Scene)
