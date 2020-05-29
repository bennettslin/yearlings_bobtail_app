// Button in nav section to select book.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import NavButton from '../Button'
import './style'

const NavBookToggle = ({
    bookIndex,
    handleButtonClick

}) => (
    <div className={cx(
        'NavBookToggle',
        'NavBook'
    )}>
        <NavButton
            isToggle
            {...{
                bookIndex,
                handleButtonClick
            }}
        />
    </div>
)

NavBookToggle.propTypes = {
    bookIndex: PropTypes.number.isRequired,
    handleButtonClick: PropTypes.func.isRequired
}

export default memo(NavBookToggle)
