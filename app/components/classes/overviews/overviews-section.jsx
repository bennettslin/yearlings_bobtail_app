import React from 'react';
import OverviewButton from './overview-button.jsx';
import Constants from '../../constants/constants.js';
import FormatUtility from '../../utilities/format-utility.jsx';

/*************
 * CONTAINER *
 *************/

// FIXME: Put logic in container.
const OverviewsSection = (props) => (
    <OverviewsSectionView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({
    selectedOverviewIndex = 0,
    overviewRichText,
    onOverviewClick
}) => {
    const selectedOverviewKey = Constants.overviewKeys[selectedOverviewIndex - 1];
    return (
        <div className="section overviews-section">
            <div className="button-block">
                {Constants.overviewKeys.map((overviewKey, overviewIndex) => {
                    const isDisabled = overviewKey === selectedOverviewKey;
                    return (
                        <OverviewButton
                            key={overviewIndex}
                            isDisabled={isDisabled}
                            overviewKey={overviewKey}
                            overviewIndex={overviewIndex}
                            onOverviewClick={onOverviewClick}
                        />
                    );
                })}
            </div>
            <div className="overview-text">
                {FormatUtility.getFormattedTextElement(false, overviewRichText)}
            </div>
        </div>
    );
}

export default OverviewsSection;