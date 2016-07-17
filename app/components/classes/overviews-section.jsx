import React from 'react';
import Constants from '../constants/constants.js';
import FormatUtility from '../utilities/format-utility.jsx';

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => (
    <OverviewsSectionView {...props} />
);

/********
 * VIEW *
 ********/

const OverviewSelectButton = ({
    disabled,
    overviewKey,
    overviewIndex,
    onOverviewClick
}) => {
        // Overview indices begin at 1.
    const className = 'select-button' + (disabled ? ' disabled' : ''),
        onClick = disabled ? null : () => onOverviewClick(overviewIndex + 1);

    return (
        <div className={className}>
            <h2>
                <a disabled={disabled}
                    onClick={onClick}
                >
                    {overviewKey}
                </a>
            </h2>
        </div>
    );
};

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
                    return (
                        <OverviewSelectButton
                            key={overviewIndex}
                            disabled={overviewKey === selectedOverviewKey}
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