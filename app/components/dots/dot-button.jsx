import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => {

    const { dotKey,
            dotIndex,
            isSelected,
            canDeselect,
            onDotClick,
            onDotHover } = props,

        isEnabled = !isSelected || canDeselect,
        isToggleDeselected = canDeselect && !isSelected,
        onClick = isEnabled && onDotClick ? e => onDotClick(e, dotKey) : null,

        /**
         * FIXME: Not ideal that button knows both dot key and dot index.
         * Consider refactoring so that key is derived from index.
         */
        onMouseEnter = onDotHover ? e => onDotHover(e, dotIndex) : null,
        onMouseLeave = onDotHover ? e => onDotHover(e) : null

    return (
        <DotButtonView {...props}
            isEnabled={isEnabled}
            isToggleDeselected={isToggleDeselected}
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
    isPresent,

    // From controller.
    isEnabled,
    isToggleDeselected,
    onClick,
    onMouseEnter,
    onMouseLeave

}) => (

    <div
        className={`dot ${dotKey}${isPresent ? '' : ' background'}${isEnabled ? ' enabled' : ' disabled'}${isToggleDeselected ? ' deselected' : ''}`}
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
