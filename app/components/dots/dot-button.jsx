import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => {

    const { dotKey,
            dotIndex,
            isDisabled,
            onDotClick,
            onDotHover } = props,

        onClick = !isDisabled ? e => onDotClick(e, dotKey) : null,

        /**
         * FIXME: Not ideal that button knows both dot key and dot index.
         * Consider refactoring so that key is derived from index.
         */
        onMouseEnter = onDotHover ? e => onDotHover(e, dotIndex) : null,
        onMouseLeave = onDotHover ? e => onDotHover(e) : null

    return (
        <DotButtonView {...props}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
    onClick,
    onMouseEnter,
    onMouseLeave

}) => (

    <div
        className={`dot ${dotKey}${isActive ? '' : ' inactive'}${isPresent ? '' : ' unpresent'} ${isDisabled ? 'disabled' : 'enabled'}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {/* FIXME: Dots ultimately won't have text, of course. */}
        <div className="dot-text">
            {dotKey}
        </div>
    </div>
)

export default DotButton
