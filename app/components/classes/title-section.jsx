import React from 'react';

/*************
 * CONTAINER *
 *************/

const TitleSection = (props) => (
    <TitleSectionView {...props} />
);

/********
 * VIEW *
 ********/

const TitleSectionView = ({
    titleText,
    onClick
}) => (
    <div className="section title-section">
        <h1>
            <a onClick={onClick}>
                {titleText}
            </a>
        </h1>
    </div>
);

export default TitleSection;