import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { CAROUSEL_TOGGLE_KEY } from '../../helpers/constants'

const passReduxStateToProps = ({
    selectedCarouselIndex
}) => ({
// Pass Redux state into component props.
    selectedCarouselIndex
})

/*************
 * CONTAINER *
 *************/

const CarouselToggle = (props) => (
    <CarouselToggleView {...props}/>
)

CarouselToggle.propTypes = {
    selectedCarouselIndex: PropTypes.number.isRequired,
    handleCarouselToggle: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselToggleView = ({

    // From props.
    selectedCarouselIndex,
    handleCarouselToggle

}) => (
    <div className="carousel-toggle-button-block">
        <Button
            buttonName="carousel-toggle"
            isLarge={true}
            iconText={selectedCarouselIndex}
            accessKey={CAROUSEL_TOGGLE_KEY}
            handleClick={handleCarouselToggle}
        />
    </div>
)
export default connect(passReduxStateToProps)(CarouselToggle)
