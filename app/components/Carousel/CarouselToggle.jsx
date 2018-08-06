// Toggle button to show and hide carousel section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
import { CAROUSEL_TOGGLE_KEY } from 'constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    isHiddenCarouselNav,
    selectedCarouselNavIndex
}) => ({
    isHiddenCarouselNav,
    selectedCarouselNavIndex
})

const carouselTogglePropTypes = {
    // Through Redux.
    isHiddenCarouselNav: PropTypes.bool.isRequired,
    selectedCarouselNavIndex: PropTypes.number.isRequired,

    // From parent.
    handleCarouselNavToggle: PropTypes.func.isRequired
},

CarouselToggle = ({

    isHiddenCarouselNav,
    selectedCarouselNavIndex,
    handleCarouselNavToggle

}) => {
    return !isHiddenCarouselNav && (
        <div className={cx(
            'CarouselToggle',
            'width__leftShelf'
        )}>
            <Button
                isLargeSize
                buttonName={CAROUSEL_NAV_BUTTON_KEY}
                buttonIdentifier={selectedCarouselNavIndex}
                accessKey={CAROUSEL_TOGGLE_KEY}
                handleButtonClick={handleCarouselNavToggle}
            />
        </div>
    )
}

CarouselToggle.propTypes = carouselTogglePropTypes

export default connect(mapStateToProps)(CarouselToggle)
