import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => {

    const { dotKey,
            onDotClick } = props,

        onClick = () => onDotClick(dotKey)

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
    isActive,
    isPresent,

    // From controller.
    onClick

}) => (

    <div
        className={`dot ${dotKey}${isActive ? '' : ' inactive'}${isPresent ? '' : ' unpresent'}`}
        onClick={onClick}
    >
        {/* FIXME: Dots ultimately won't have text, of course. */}
        <div className="dot-text">
            {dotKey}
        </div>
    </div>
)

export default DotButton
