// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'

import Scene from '../Scene'
import Stage from '../Stage'
import Proscenium from '../Stage/Proscenium'

import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'

const mapStateToProps = ({
    renderStore: { canTheatreRender }
}) => ({
    canTheatreRender
})

class Theatre extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        theatreDidRender: PropTypes.func.isRequired
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
                    this.props.theatreDidRender, 100
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

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                theatreDidRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                canTheatreRender,
                ...other
            } = this.props,

            { isShown } = this.state

        return (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer',
                { 'parent__shown': canTheatreRender && isShown }
            )}>

                {/* Scene is behind theatre due to presence transitions. */}
                <Stage>
                    <Scene {...other} />
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

export default connect(mapStateToProps)(Theatre)
