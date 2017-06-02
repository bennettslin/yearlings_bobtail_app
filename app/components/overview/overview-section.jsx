// Section to show song overview.

import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from '../text/text-block'
import { getOverview } from '../../helpers/data-helper'

const OverviewSection = ({

    isToggleInOverview,
    overviewIndex,
    overviewButtonChild

}) => {
    const overviewText = getOverview(overviewIndex)

    return (
        <div className="section overview-section">
            <div className="overview-text">
                {isToggleInOverview &&
                    <div className="overview-toggle-section">
                        {overviewButtonChild}
                    </div>
                }
                <TextBlock
                    isLyric={false}
                    text={overviewText}
                />
            </div>
        </div>
    )
}

OverviewSection.propTypes = {
    // From parent.
    isToggleInOverview: PropTypes.bool.isRequired,
    overviewIndex: PropTypes.number.isRequired,
    overviewButtonChild: PropTypes.element.isRequired
}

export default OverviewSection
