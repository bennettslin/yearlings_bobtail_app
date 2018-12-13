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
    renderStore: { didTheatreRender }
}) => ({
    didTheatreRender
})

class Theatre extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Theatre')
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
