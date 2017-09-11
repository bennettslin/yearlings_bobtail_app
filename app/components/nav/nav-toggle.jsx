// Toggle button to show and hide nav section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { getIsDesktop } from '../../helpers/responsive-helper'
import { NAV_SECTION_EXPAND_KEY } from '../../constants/access'

const mapStateToProps = ({
    deviceIndex,
    selectedNavIndex
}) => ({
    deviceIndex,
    selectedNavIndex
})

const navToggleDefaultProps = {
    inMain: false
},

navTogglePropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedNavIndex: PropTypes.number.isRequired,

    // From parent.
    inMain: PropTypes.bool.isRequired,
    handleNavExpand: PropTypes.func.isRequired
},

NavToggle = ({

    inMain,
    deviceIndex,
    selectedNavIndex,
    handleNavExpand

}) => {

    const isDesktop = getIsDesktop(deviceIndex),

        // Don't render at all if in mobile and in main.
        shouldRender = isDesktop || !inMain,

        // Show content only in main on desktop, and only in nav on mobile.
        showContent = isDesktop === inMain

    return shouldRender ? (
        <div className="nav-toggle-block">
            {showContent && (
                <div className="nav-toggle-book">
                    <div className="nav-button-wrapper">
                        <Button
                            accessKey={NAV_SECTION_EXPAND_KEY}
                            buttonName="nav"
                            iconText={selectedNavIndex}
                            isLarge={true}
                            handleClick={handleNavExpand}
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
