// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import Scene from '../Scene'
import Stage from '../Stage'
import Curtains from '../Stage/Curtains'
import Proscenium from '../Stage/Proscenium'

import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'

const mapStateToProps = ({
    deviceStore: { canTheatreEnter }
}) => ({
    canTheatreEnter
})

class Theatre extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreEnter: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Theatre')
    }

    _handleTransitionEntered = () => {
        this.props.updateRenderStore({ didTheatreEnter: true })
    }

    render() {
        const { canTheatreEnter } = this.props

        return (
            <CSSTransition
                mountOnEnter
                {...{
                    in: canTheatreEnter,
                    timeout: 200,
                    classNames: {
                        enterDone: 'Theatre__visible'
                    },
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div className={cx(
                    'Theatre',
                    'abF'
                )}>

                    {/* Scene is behind theatre due to presence transitions. */}
                    <Stage>
                        <Scene />
                    </Stage>

                    <Ceiling />
                    <Wall />
                    <Wall isRight />

                    <Stage>
                        <Curtains />
                        <Proscenium />
                    </Stage>

                    <Floor />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(Theatre)
