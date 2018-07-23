// Toggle button to show and hide dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
import { DOTS_SECTION_EXPAND_KEY } from '../../constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from '../../constants/buttons'

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

DotsSlideToggle = ({

    selectedDotsIndex,
    handleDotsSectionToggle

}) => (
    <div className={cx(
        'DotsSlideToggle',
        'LeftShelf__child'
    )}>
        <Button
            isLargeSize
            buttonName={DOTS_SLIDE_BUTTON_KEY}
            buttonIdentifier={selectedDotsIndex}
            accessKey={DOTS_SECTION_EXPAND_KEY}
            handleButtonClick={handleDotsSectionToggle}
        />
    </div>
)

DotsSlideToggle.propTypes = dotsTogglePropTypes

export default connect(mapStateToProps)(DotsSlideToggle)
