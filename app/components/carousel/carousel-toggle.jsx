// Toggle button to show and hide carousel section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { CAROUSEL_TOGGLE_KEY } from '../../constants/access'

const mapStateToProps = ({
    isHiddenNav,
    selectedCarouselNavIndex
}) => ({
    isHiddenNav,
    selectedCarouselNavIndex
})

const carouselTogglePropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    selectedCarouselNavIndex: PropTypes.number.isRequired,

    // From parent.
    handleCarouselNavToggle: PropTypes.func.isRequired
},

CarouselToggle = ({

    isHiddenNav,
    selectedCarouselNavIndex,
    handleCarouselNavToggle

}) => {
    return !isHiddenNav ? (
        <div className="carousel-toggle-button-block">
            <Button
                accessKey={CAROUSEL_TOGGLE_KEY}
                buttonName="carousel-toggle"
                iconText={selectedCarouselNavIndex}
                isLarge={true}
                handleClick={handleCarouselNavToggle}
            />
        </div>
    ) : null
}

CarouselToggle.propTypes = carouselTogglePropTypes

export default connect(mapStateToProps)(CarouselToggle)
