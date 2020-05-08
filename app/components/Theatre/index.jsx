// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateViewportStore } from '../../redux/viewport/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import Stage from '../Stage'
import Curtains from '../Stage/Curtains'
import DramaMasks from '../Stage/DramaMasks'
import Proscenium from '../Stage/Proscenium'

import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'

import { removeLoadingIndicator } from '../../utils/window'

const mapStateToProps = ({
    viewportStore: { canTheatreEnter }
}) => ({
    canTheatreEnter
})

class Theatre extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreEnter: PropTypes.bool.isRequired,
        updateViewportStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Theatre')
        removeLoadingIndicator()
    }

    _handleTransitionEntered = () => {
        this.props.updateViewportStore({ didTheatreEnter: true })
    }

    render() {
        const { canTheatreEnter } = this.props

        return (
            <CSSTransition
                mountOnEnter
                {...{
                    in: canTheatreEnter,
                    timeout: 200,
                    classNames: { enterDone: 'Theatre__visible' },
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div className={cx(
                    'Theatre',
                    'abF',
                    'ovH'
                )}>
                    <Stage />
                    <Curtains />
                    <Proscenium />
                    <DramaMasks />
                    <Wall />
                    <Wall isRight />
                    <Ceiling />
                    <Floor />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateViewportStore }
)(Theatre)
