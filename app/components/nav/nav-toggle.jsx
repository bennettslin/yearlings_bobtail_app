// Toggle button to show and hide nav section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { NAV_SECTION_EXPAND_KEY } from '../../constants/access'

const NavToggle = ({

    selectedNavIndex,
    handleNavExpand

}) => (
    <div className="nav-toggle-block">
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
    </div>
)

NavToggle.propTypes = {
    // Through Redux.
    selectedNavIndex: PropTypes.number.isRequired,

    // From parent.
    handleNavExpand: PropTypes.func.isRequired
}

export default connect(({
    selectedNavIndex
}) => ({
    selectedNavIndex
}))(NavToggle)
