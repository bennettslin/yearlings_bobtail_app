// Toggle button to show and hide carousel section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { CAROUSEL_TOGGLE_KEY } from '../../constants/access'

const CarouselToggle = ({

    isHiddenNav,
    selectedCarouselIndex,
    handleCarouselToggle

}) => {
    return !isHiddenNav ? (
        <div className="carousel-toggle-button-block">
            <Button
                accessKey={CAROUSEL_TOGGLE_KEY}
                buttonName="carousel-toggle"
                iconText={selectedCarouselIndex}
                isLarge={true}
                handleClick={handleCarouselToggle}
            />
        </div>
    ) : null
}

CarouselToggle.propTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,

    // From parent.
    handleCarouselToggle: PropTypes.func.isRequired
}

export default connect(({
    isHiddenNav,
    selectedCarouselIndex
}) => ({
    isHiddenNav,
    selectedCarouselIndex
}))(CarouselToggle)
