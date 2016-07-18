import React from 'react';
import OverviewButton from './overview-button.jsx';
import Constants from '../../constants/constants.js';
import FormattedText from '../text/formatted-text.jsx';

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => {

    const { selectedOverviewIndex = 0 } = props,

        selectedOverviewKey = Constants.overviewKeys[selectedOverviewIndex - 1];

    return (
        <OverviewsSectionView {...props}
            selectedOverviewKey={selectedOverviewKey}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({

    // From props.
    onOverviewClick,
    overviewRichText,

    // From controller.
    selectedOverviewKey

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
            <FormattedText
                isLyric={false}
                text={overviewRichText}
            />
        </div>
    </div>

);

export default OverviewsSection;