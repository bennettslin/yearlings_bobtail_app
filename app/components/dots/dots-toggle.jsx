import React from 'react'
import Button from '../button/button'
import { DOTS_SECTION_ACCESS_KEY } from '../../helpers/constants'

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
                accessKey={DOTS_SECTION_ACCESS_KEY}
                isLarge={true}
                handleClick={handleDotsSectionToggle}
            />
        </div>
    </div>
)

export default DotsToggle
