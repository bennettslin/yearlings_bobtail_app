import React from 'react'
import TextBlock from '../text/text-block'

/*************
 * CONTAINER *
 *************/

const OverviewSection = (props) => {

    return (
        <OverviewSectionView {...props} />
    )
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
