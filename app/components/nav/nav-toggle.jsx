// Toggle button to show and hide nav section.
// Mostly deprecated, just keep around to take up space.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { getIsDesktop } from '../../helpers/responsive-helper'
import { NAV_SECTION_EXPAND_KEY } from '../../constants/access'

const mapStateToProps = ({
    deviceIndex,
    selectedCarouselNavIndex
}) => ({
    deviceIndex,
    selectedCarouselNavIndex
})

const navToggleDefaultProps = {
    inMain: false
},

navTogglePropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedCarouselNavIndex: PropTypes.number.isRequired,

    // From parent.
    inMain: PropTypes.bool.isRequired,
    handleCarouselNavToggle: PropTypes.func.isRequired
},

NavToggle = ({

    inMain,
    deviceIndex,
    selectedCarouselNavIndex,
    handleCarouselNavToggle

}) => {

    const isDesktop = getIsDesktop(deviceIndex),

        // Don't render at all if in mobile and in main.
        shouldRender = isDesktop || !inMain,

        // Show content only in main on desktop, and only in nav on mobile.
        showContent = isDesktop === inMain

    return shouldRender ? (
        <div className="nav-toggle-block">
            {showContent && !showContent && (
                <div className="nav-toggle-book">
                    <div className="nav-button-wrapper">
                        <Button
                            accessKey={NAV_SECTION_EXPAND_KEY}
                            buttonName="nav"
                            iconText={selectedCarouselNavIndex}
                            isLarge={true}
                            handleClick={handleCarouselNavToggle}
                        />
                    </div>
                </div>
            )}
        </div>
    ) : null
}

NavToggle.defaultProps = navToggleDefaultProps
NavToggle.propTypes = navTogglePropTypes

export default connect(mapStateToProps)(NavToggle)
