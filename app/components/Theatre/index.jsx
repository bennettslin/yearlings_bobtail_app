// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import Scene from '../Scene'
import Stage from '../Stage'
import Proscenium from '../Stage/Proscenium'

import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'

const mapStateToProps = ({
    renderStore: {
        canTheatreRender,
        didTheatreRender
    }
}) => ({
    canTheatreRender,
    didTheatreRender
})

class Theatre extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        didTheatreRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        const { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            logger.warn('Theatre rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this._theatreDidRender, 100
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                )

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId
            })

        } else if (couldRender && !canTheatreRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _theatreDidRender = () => {
        this.props.updateRenderStore({ didTheatreRender: true })
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    render() {
        const
            { didTheatreRender } = this.props,
            { isShown } = this.state

        return (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer',
                { 'parent__shown': didTheatreRender && isShown }
            )}>

                {/* Scene is behind theatre due to presence transitions. */}
                <Stage>
                    <Scene />
                </Stage>

                <Ceiling />
                <Wall />
                <Wall isRight />

                <Stage>
                    <Proscenium />
                </Stage>

                <Floor />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Theatre)
