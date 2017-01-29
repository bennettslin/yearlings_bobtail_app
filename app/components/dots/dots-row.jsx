import React from 'react'
import DotsToggle from './dots-toggle'

/*************
 * CONTAINER *
 *************/

const DotsRow = (props) => {

    return (
        <DotsRowView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DotsRowView = ({

    // From props.

    // From controller.

...other }) => (
    <div className="dots-row">
        <DotsToggle {...other} />
    </div>
)

export default DotsRow
