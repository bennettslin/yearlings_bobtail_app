// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotsToggle from './DotsToggle'
import OverviewToggle from './OverviewToggle'
import ScoresTips from '../ScoresTips/ScoresTips'

const dotsOverviewPropTypes = {
    // From parent.
    className: PropTypes.any,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired
},

DotsOverview = ({

    className,
    handleDotsSectionToggle,
    handleOverviewToggle,
    scoresTipsHandlers

}) => (
    <div className={cx(
        'DotsOverview',
        'width__dotsOverview',
        className
    )}>
        <OverviewToggle
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsToggle
            handleDotsSectionToggle={handleDotsSectionToggle}
        />
        <ScoresTips {...scoresTipsHandlers}
            inDotsOverview
        />
    </div>
)

DotsOverview.propTypes = dotsOverviewPropTypes

export default DotsOverview
