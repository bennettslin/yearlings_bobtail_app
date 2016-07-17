import React from 'react';
import OverviewButton from './overview-button.jsx';
import Constants from '../../constants/constants.js';
import FormatUtility from '../../utilities/format-utility.jsx';

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => {

    const { selectedOverviewIndex = 0,
            overviewRichText } = props,

        selectedOverviewKey = Constants.overviewKeys[selectedOverviewIndex - 1],
        overviewText = FormatUtility.getFormattedTextElement(false, overviewRichText);

    return (
        <OverviewsSectionView {...props}
            selectedOverviewKey={selectedOverviewKey}
            overviewText={overviewText}
        />
    );
};


/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({

    // From props.
    onOverviewClick,

    // From controller.
    selectedOverviewKey,
    overviewText

}) => (

    <div className="section overviews-section">
        <div className="button-block">
            {Constants.overviewKeys.map((overviewKey, overviewIndex) => {
                const isDisabled = (overviewKey === selectedOverviewKey);
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
            {overviewText}
        </div>
    </div>

);

export default OverviewsSection;