import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => {

    const { dotKey,
            isDisabled,
            onDotClick } = props,

        onClick = !isDisabled ? e => onDotClick(e, dotKey) : null

    return (
        <DotButtonView {...props}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotButtonView = ({

    // From props.
    dotKey,
    isDisabled,
    isActive,
    isPresent,

    // From controller.
    onClick

}) => (

    <div
        className={`dot ${dotKey}${isActive ? '' : ' inactive'}${isPresent ? '' : ' unpresent'} ${isDisabled ? 'disabled' : 'enabled'}`}
        onClick={onClick}
    >
        {/* FIXME: Dots ultimately won't have text, of course. */}
        <div className="dot-text">
            {dotKey}
        </div>
    </div>
)

export default DotButton
