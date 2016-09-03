import React from 'react'

/*************
 * CONTAINER *
 *************/

const OverviewButton = (props) => {

    const { isDisabled,
            overviewIndex,
            onOverviewClick } = props,

        // Overview indices begin at 1.
        onClick = !isDisabled ?
            e => onOverviewClick(e, overviewIndex + 1) : null

    return (
        <OverviewButtonView {...props}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewButtonView = ({

    // From props.
    isDisabled,
    overviewKey,

    // From controller.
    onClick

}) => (

    <div className={`select-button${isDisabled ? ' disabled' : ''}`}>
        <h2>
            <a className="enabled" disabled={isDisabled} onClick={onClick}>
                {overviewKey}
            </a>
        </h2>
    </div>
)

export default OverviewButton
