// Toggle button to show and hide dots section.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../Button/Button'
import { DOTS_SECTION_EXPAND_KEY } from 'constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from 'constants/buttons'

const dotsTogglePropTypes = {
    // From parent.
    handleDotsSectionToggle: PropTypes.func.isRequired
},

DotsSlideToggle = ({

    handleDotsSectionToggle

}) => (
    <div className={cx(
        'DotsSlideToggle',
        'LeftShelf__child'
    )}>
        <Button
            isLargeSize
            buttonName={DOTS_SLIDE_BUTTON_KEY}
            accessKey={DOTS_SECTION_EXPAND_KEY}
            handleButtonClick={handleDotsSectionToggle}
        />
    </div>
)

DotsSlideToggle.propTypes = dotsTogglePropTypes

export default DotsSlideToggle
