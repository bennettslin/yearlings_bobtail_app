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

    state = { didRenderTimeoutId: '' }

    componentDidUpdate(prevProps) {
        const
            { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            clearTimeout(this.state.didRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didRenderTimeoutId = setTimeout(
                this._theatreDidRender, 100
            )

            this.setState({ didRenderTimeoutId })
        }
    }

    _theatreDidRender = () => {
        this.props.updateRenderStore({ didTheatreRender: true })
    }

    render() {
        const { didTheatreRender } = this.props

        return (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer',
                { 'parent__shown': didTheatreRender }
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
