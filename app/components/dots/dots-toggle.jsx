import React from 'react'

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
    <div className="dots-toggle-button-block">
        <a
            className="dots-toggle-button button-animatable enabled"
            onClick={e => handleDotsSectionToggle(e)}
        >
            <div className="large button-icon dots-toggle-icon">
                {selectedDotsIndex}
            </div>
        </a>
    </div>
)

export default DotsToggle
