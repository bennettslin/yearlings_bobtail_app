import React from 'react';

/*************
 * CONTAINER *
 *************/

const OverviewButton = (props) => {
    const { isDisabled,
            overviewIndex,
            onOverviewClick } = props,

        // Overview indices begin at 1.
        onClick = !isDisabled ?
            () => onOverviewClick(overviewIndex + 1) : null;
    return (
        <OverviewButtonView {...props}
            onClick={onClick}
        />
    );
};

/********
 * VIEW *
 ********/

const OverviewButtonView = ({
    isDisabled,
    overviewKey,
    onClick
}) => (
    <div className={'select-button' + (isDisabled ? ' disabled' : '')}>
        <h2>
            <a disabled={isDisabled} onClick={onClick}>
                {overviewKey}
            </a>
        </h2>
    </div>
);

export default OverviewButton;