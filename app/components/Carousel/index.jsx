// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateRenderStore } from 'flux/render/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import ScrollCarouselListener from '../../listeners/Scroll/Carousel'
import CarouselScroll from './Scroll'
import CarouselSelect from './Select'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: { canLyricEnter },
    responsiveStore: { isUnrenderableCarouselNav }
}) => ({
    canLyricEnter,
    isUnrenderableCarouselNav
})

class Carousel extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricEnter: PropTypes.bool.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
        updateChangeStore: PropTypes.func.isRequired,
        updateRenderStore: PropTypes.func.isRequired
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
        this.props.updateChangeStore({ isSongChangeCarouselExitDone: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateRenderStore({ didCarouselEnter: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricEnter,
            isUnrenderableCarouselNav
        } = this.props

        return !isUnrenderableCarouselNav && (
            <CSSTransition
                mountOnEnter
                {...{
                    in: canLyricEnter,
                    timeout: 250,
                    classNames: {
                        enterDone: 'Carousel__visible'
                    },
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
        updateRenderStore
    }
)(Carousel)
