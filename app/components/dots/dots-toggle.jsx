import React from 'react'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const DotsToggle = (props) => {

    return (
        <DotsToggleView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsToggleView = ({

    // From props.
    selectedDotsIndex,
    handleDotsSectionToggle

    // From controller.

}) => (
    <div className="dots-toggle-button-container">
        <div className="dots-toggle-button-block">
            <Button
                buttonName="dots-toggle"
                iconText={selectedDotsIndex}
                isLarge={true}
                handleClick={handleDotsSectionToggle}
            />
        </div>
    </div>
)

export default DotsToggle
