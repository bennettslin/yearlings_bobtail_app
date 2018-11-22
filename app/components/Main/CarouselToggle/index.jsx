// Toggle button to show and hide carousel section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../../Button'
import { CAROUSEL_TOGGLE_KEY } from 'constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    responsiveStore: { isHiddenCarouselNav },
    toggleStore: { isCarouselShown }
}) => ({
    isHiddenCarouselNav,
    isCarouselShown
})

const carouselTogglePropTypes = {
    // Through Redux.
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,

        // From parent.
        handleCarouselNavToggle: PropTypes.func.isRequired
    },

    CarouselToggle = ({

        isHiddenCarouselNav,
        isCarouselShown,
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
                    buttonIdentifier={isCarouselShown}
                    accessKey={CAROUSEL_TOGGLE_KEY}
                    handleButtonClick={handleCarouselNavToggle}
                />
            </div>
        )
    }

CarouselToggle.propTypes = carouselTogglePropTypes

export default connect(mapStateToProps)(CarouselToggle)
