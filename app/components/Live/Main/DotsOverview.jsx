// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotsToggle from '../../Dots/DotsToggle'
import OverviewToggle from '../../Overview/OverviewToggle'
import ScoresTips from '../ScoresTips'

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
