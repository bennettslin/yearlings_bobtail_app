// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotsSlideToggle from './DotsSlideToggle'
import OverviewToggle from './OverviewToggle'
import ScoresTips from 'components/ScoresTips/ScoresTips'

const leftShelfPropTypes = {
    // From parent.
    className: PropTypes.any,
    isPhone: PropTypes.bool,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired
},

LeftShelf = ({

    className,
    isPhone,
    handleDotsSectionToggle,
    handleOverviewToggle,
    scoresTipsHandlers

}) => (
    <div className={cx(
        'LeftShelf',
        'width__leftShelf',
        isPhone && 'absoluteFullContainer',
        className
    )}>
        <OverviewToggle
            inLeftShelf
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsSlideToggle
            handleDotsSectionToggle={handleDotsSectionToggle}
        />
        <ScoresTips {...scoresTipsHandlers}
            inLeftShelf
        />
    </div>
)

LeftShelf.propTypes = leftShelfPropTypes

export default LeftShelf
