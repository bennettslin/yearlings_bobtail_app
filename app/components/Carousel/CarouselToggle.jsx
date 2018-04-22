// Toggle button to show and hide carousel section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
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
    return !isHiddenNav && (
        <div className={cx(
            'CarouselToggle',
            'width__leftShelf'
        )}>
            <Button
                isLargeSize
                buttonName="carouselNav"
                temporaryText={selectedCarouselNavIndex}
                accessKey={CAROUSEL_TOGGLE_KEY}
                handleButtonClick={handleCarouselNavToggle}
            />
        </div>
    )
}

CarouselToggle.propTypes = carouselTogglePropTypes

export default connect(mapStateToProps)(CarouselToggle)
