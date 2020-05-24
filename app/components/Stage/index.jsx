// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'

import Transition from 'react-transition-group/Transition'
import AspectRatio from './AspectRatio'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const mapStateToProps = ({
    entranceStore: { canSceneEnter }
}) => ({
    canSceneEnter
})

class Stage extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneEnter: PropTypes.bool.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Stage')
    }

    _handleTransitionEntered = () => {
        logTransition('Scene did enter from Stage.')
        this.props.updateEntranceStore({ didSceneEnter: true })
    }

    render() {
        const { canSceneEnter } = this.props

        return (
            <AspectRatio>
                <Transition
                    {...{
                        in: canSceneEnter,
                        timeout: 200,
                        onEntered: this._handleTransitionEntered
                    }}
                >
                    <div className={cx(
                        'Stage',
                        'abF',
                        'ovH'
                    )}>
                        <Sky />
                        <Wood />
                        <Scene />
                    </div>
                </Transition>
            </AspectRatio>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(Stage)
