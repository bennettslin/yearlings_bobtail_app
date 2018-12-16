// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScrollCarouselListener from '../../listeners/ScrollListener/Carousel'
import CarouselScroll from './Scroll'
import CarouselSelect from './Select'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    loadStore: { appMounted },
    responsiveStore: { isUnrenderableCarouselNav }
}) => ({
    appMounted,
    isUnrenderableCarouselNav
})

class Carousel extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            appMounted,
            isUnrenderableCarouselNav
        } = this.props

        return appMounted && !isUnrenderableCarouselNav && (
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
        )
    }
}

export default connect(mapStateToProps)(Carousel)
