import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from '../text/text-block'

const OverviewSection = ({

    // From props.
    isPhone,
    isLogue,
    overviewText,
    overviewButtonChild

}) => (
    <div className="section overview-section">
        <div className="overview-text">
            {!isLogue && isPhone &&
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

OverviewSection.propTypes = {
    isPhone: PropTypes.bool.isRequired,
    isLogue: PropTypes.bool.isRequired,
    overviewText: PropTypes.string.isRequired,
    overviewButtonChild: PropTypes.element
}

export default OverviewSection
