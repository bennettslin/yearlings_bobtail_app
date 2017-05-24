import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from '../text/text-block'

/*************
 * CONTAINER *
 *************/

const OverviewSection = (props) => (
    <OverviewSectionView {...props} />
)

OverviewSection.propTypes = {
    isPhone: PropTypes.bool.isRequired,
    isLogue: PropTypes.bool.isRequired,
    overviewText: PropTypes.string.isRequired,
    overviewButtonChild: PropTypes.element
}

/****************
 * PRESENTATION *
 ****************/

const OverviewSectionView = ({

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

export default OverviewSection
