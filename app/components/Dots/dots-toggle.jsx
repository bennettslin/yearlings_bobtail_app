// Toggle button to show and hide dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import { DOTS_SECTION_EXPAND_KEY } from '../../constants/access'

const mapStateToProps = ({
    selectedDotsIndex
}) => ({
    selectedDotsIndex
})

const dotsTogglePropTypes = {
    // Through Redux.
    selectedDotsIndex: PropTypes.number.isRequired,

    // From parent.
    handleDotsSectionToggle: PropTypes.func.isRequired
},

DotsToggle = ({

    selectedDotsIndex,
    handleDotsSectionToggle

}) => (
    <div className="dots-toggle-button-container">
        <div className="dots-toggle-button-block">
            <Button
                accessKey={DOTS_SECTION_EXPAND_KEY}
                buttonName="dots-toggle"
                iconText={selectedDotsIndex}
                isLarge={true}
                handleClick={handleDotsSectionToggle}
            />
        </div>
    </div>
)

DotsToggle.propTypes = dotsTogglePropTypes

export default connect(mapStateToProps)(DotsToggle)
