import React from 'react';
import OverviewButton from './overview-button.jsx';
import { OVERVIEW_KEYS } from '../../constants/constants.js';
import TextBlock from '../text/text-block.jsx';

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => {

    const { selectedOverviewIndex = 0 } = props,

        selectedOverviewKey = OVERVIEW_KEYS[selectedOverviewIndex - 1];

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
    overviewRichText,
    onOverviewClick,

    // From controller.
    selectedOverviewKey

}) => (

    <div className="section overviews-section">
        <div className="button-block">
            {OVERVIEW_KEYS.map((overviewKey, overviewIndex) => {
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
            <TextBlock
                isLyric={false}
                text={overviewRichText}
            />
        </div>
    </div>

);

export default OverviewsSection;