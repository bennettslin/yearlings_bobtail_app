// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import CarouselAccess from './Access'
import CarouselScroll from './Scroll'

const mapStateToProps = state => {
    const {
        entranceStore: { canLyricCarouselEnter }
    } = state

    return {
        canLyricCarouselEnter
    }
}

class Carousel extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Carousel')
    }

    _handleTransitionExited = () => {
        logTransition('Carousel did exit.')
        this.props.updateEntranceStore({ didCarouselExit: true })
    }

    _handleTransitionEntered = () => {
        logTransition('Carousel did enter.')
        this.props.updateEntranceStore({ didCarouselEnter: true })
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <CSSTransition
                appear
                mountOnEnter
                {...{
                    in: canLyricCarouselEnter,
                    timeout: 250,
                    classNames: { enterDone: 'Carousel__visible' },
                    onExited: this._handleTransitionExited,
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div
                    className={cx(
                        'Carousel',
                        'gradientMask__carousel__desktop'
                    )}
                >
                    <CarouselScroll />
                    <CarouselAccess />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(Carousel)
