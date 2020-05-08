import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateSceneStore } from '../../redux/scene/action'

import Transition from 'react-transition-group/Transition'
import Cubes from '../Cubes'
import PresencesConfig from '../Presences'
import PresenceZIndexStylesheet from './Stylesheet'

import { CUBE_Y_INDICES_WITH_NEG } from '../../constants/cubeIndex'

const mapStateToProps = ({
    sceneStore: { canSceneUpdate }
}) => ({
    canSceneUpdate
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneUpdate: PropTypes.bool.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    _handleTransitionUpdated = () => {
        this.props.updateSceneStore({ didSceneUpdate: true })
    }

    render() {
        const { canSceneUpdate } = this.props

        return (
            <Transition
                {...{
                    in: canSceneUpdate,
                    timeout: 200,
                    onEntered: this._handleTransitionUpdated
                }}
            >
                <div
                    className={cx(
                        'Scene',
                        'abF'
                    )}
                >
                    <PresenceZIndexStylesheet />
                    {CUBE_Y_INDICES_WITH_NEG.map(yIndex => {
                        const Presences = PresencesConfig[yIndex]
                        return (
                            <___ {...{ key: yIndex }}>
                                {yIndex > -1 && (
                                    <Cubes {...{ yIndex }} />
                                )}
                                <Presences />
                            </___>
                        )
                    })}
                </div>
            </Transition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateSceneStore }
)(Scene)
