// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateTransitionStore } from 'flux/transition/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import ScrollCarouselListener from '../../listeners/Scroll/Carousel'
import CarouselScroll from './Scroll'
import CarouselSelect from './Select'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter },
    responsiveStore: { isUnrenderableCarouselNav }
}) => ({
    canLyricCarouselEnter,
    isUnrenderableCarouselNav
})

class Carousel extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
        updateChangeStore: PropTypes.func.isRequired,
        updateTransitionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Carousel')
    }

    _setCarouselParent = (node) => {
        return this.setCarouselParent(node)
    }

    _setCarouselAnnotationElement = (payload) => {
        return this.setCarouselAnnotationElement(payload)
    }

    _handleTransitionExited = () => {
        this.props.updateChangeStore({ didCarouselExit: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateTransitionStore({ didCarouselEnter: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricCarouselEnter,
            isUnrenderableCarouselNav
        } = this.props

        return (
            <CSSTransition
                mountOnEnter
                {...{
                    in: !isUnrenderableCarouselNav && canLyricCarouselEnter,
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
                    <ScrollCarouselListener {...{ getRefs: this._getRefs }} />
                    <CarouselScroll
                        {...{
                            setCarouselParent:
                                this._setCarouselParent,
                            setCarouselAnnotationElement:
                                this._setCarouselAnnotationElement
                        }}
                    />
                    <CarouselSelect />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(
    mapStateToProps,
    {
        updateChangeStore,
        updateTransitionStore
    }
)(Carousel)
