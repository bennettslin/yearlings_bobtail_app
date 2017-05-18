import React from 'react'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const DotButton = (props) => (
    <DotButtonView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotButtonView = ({

    // From props.
    isSelected,
    isSmall,
    dotKey,
    dotKeys,
    handleDotButtonClick

}) => (
    <Button
        buttonClass="dot"
        buttonName={dotKeys ? 'dot-stanza' : undefined}
        iconClass={dotKey || dotKeys}
        isEnabled={!isSelected}
        isSmall={isSmall}
        handleClick={handleDotButtonClick}
    />
)

export default DotButton
