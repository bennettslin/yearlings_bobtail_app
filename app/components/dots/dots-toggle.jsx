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
    onDotsExpandClick

    // From controller.

}) => (
    <div className="dots-toggle-button-container">
        <a
            className="dots-toggle-button enabled"
            onClick={e => onDotsExpandClick(e)}
        >
            {'hi'}
        </a>
    </div>
)

export default DotsToggle
