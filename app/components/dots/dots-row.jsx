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
    dotsSectionChild,

    // From controller.

...other }) => (
    <div className="dots-row">
        <DotsToggle {...other} />
        <div className="dots-subfield">
            {dotsSectionChild}
        </div>
    </div>
)

export default DotsRow
