// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Scene from '../Scene'
import Stage from '../Stage'
import Curtains from '../Stage/Curtains'
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
        didTheatreRender: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Theatre')
    }

    render() {
        const { didTheatreRender } = this.props

        return (
            <div className={cx(
                'Theatre',
                'abF',
                {
                    'Theatre__shown': didTheatreRender
                }
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
        )
    }
}

export default connect(mapStateToProps)(Theatre)
