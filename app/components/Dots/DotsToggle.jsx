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
    <div className="DotsToggle-button-container">
        <div className="DotsToggle-button-block">
            <Button
                isLarge
                accessKeysShown
                buttonName="DotsToggle"
                accessKey={DOTS_SECTION_EXPAND_KEY}
                iconText={selectedDotsIndex}
                handleClick={handleDotsSectionToggle}
            />
        </div>
    </div>
)

DotsToggle.propTypes = dotsTogglePropTypes

export default connect(mapStateToProps)(DotsToggle)
