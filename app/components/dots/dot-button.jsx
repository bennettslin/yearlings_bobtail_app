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
    </div>
)

export default DotButton
