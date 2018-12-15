// Toggle button to show and hide carousel section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CarouselDispatcher from '../../../handlers/CarouselHandler/Dispatcher'
import Button from '../../Button'
import { CAROUSEL_TOGGLE_KEY } from 'constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from 'constants/buttons'

import { populateRefs } from '../../../helpers/ref'

const mapStateToProps = ({
    responsiveStore: { isUnrenderableCarouselNav },
    toggleStore: { isCarouselShown }
}) => ({
    isUnrenderableCarouselNav,
    isCarouselShown
})

class CarouselToggle extends PureComponent {

    static propTypes = {
        // Through Redux.
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired
    }

    handleButtonClick = () => {
        this.dispatchCarousel()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isUnrenderableCarouselNav,
            isCarouselShown
        } = this.props

        return !isUnrenderableCarouselNav && (
            <div className={cx(
                'CarouselToggle',
                'width__leftShelf'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_NAV_BUTTON_KEY,
                        buttonIdentifier: isCarouselShown,
                        accessKey: CAROUSEL_TOGGLE_KEY,
                        handleButtonClick: this.handleButtonClick
                    }}
                />
                <CarouselDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselToggle)
