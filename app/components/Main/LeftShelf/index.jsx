// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const propTypes = {
    // From parent.
        className: PropTypes.any,
        isPhone: PropTypes.bool
    },

    LeftShelf = ({
        className,
        isPhone
    }) => (
        <div className={cx(
            'LeftShelf',
            'width__leftShelf',
            isPhone && 'absoluteFullContainer',
            className
        )}>
            <OverviewToggle inLeftShelf />
            <DotsSlideToggle />
            <ScoresTips inLeftShelf />
        </div>
    )

LeftShelf.propTypes = propTypes

export default LeftShelf
