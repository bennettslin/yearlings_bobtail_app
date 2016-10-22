import React from 'react'

/*************
 * CONTAINER *
 *************/

const DotButton = ({

    dotKey,
    dotIndex,
    isSelected,
    canDeselect,
    onDotClick,
    onDotHover,

...other }) => {

    const isEnabled = !isSelected || canDeselect,
        isToggleDeselected = canDeselect && !isSelected,
        onClick = isEnabled && onDotClick ? e => onDotClick(e, dotKey) : null,

        /**
         * FIXME: Not ideal that button knows both dot key and dot index.
         * Consider refactoring so that key is derived from index.
         */
        onMouseEnter = onDotHover ? e => onDotHover(e, dotIndex) : null,
        onMouseLeave = onDotHover ? e => onDotHover(e) : null

    return (
        <DotButtonView {...other}
            dotKey={dotKey}
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
    <button
        className={`dot ${dotKey}${isPresent ? '' : ' background'}${isEnabled ? ' enabled' : ' disabled'}${isToggleDeselected ? ' deselected' : ''}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {/* FIXME: Dots ultimately won't have text, of course. */}
        <div className="dot-text">
            {dotKey}
        </div>
    </button>
)

export default DotButton
