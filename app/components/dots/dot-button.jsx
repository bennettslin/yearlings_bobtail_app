import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => {

    const { dotKey,
            onDotClick } = props,

        onClick = onDotClick ? () => onDotClick(dotKey) : null

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

    // From controller.
    onClick

}) => (
    <div
        className={`dot ${dotKey}`}
        onClick={onClick}
    >
    </div>
)

export default DotButton
