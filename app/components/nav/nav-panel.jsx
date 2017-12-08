// Container for all song buttons in a book.

import React from 'react'
import PropTypes from 'prop-types'
import { getSongTitle } from '../../helpers/data-helper'

const navPanelPropTypes = {
    // From parent.
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number
},

// TODO: Have panel know the device width and height, position accordingly, and then never again render upon update unless those values change.

NavPanel = ({

    // From props.
    bookIndex,
    songIndex

}) => {
    // Panel title is either song or logue title, or directive to Book.
    const panelTitle = isNaN(bookIndex) ? getSongTitle({

        songIndex,
        showIndex: false

    }) : `show Book ${bookIndex === 0 ? 'I' : 'II'}`

    return (
        <div className="nav-panel-block">
            <div className="nav-panel">
                <div className="nav-panel-image">
                </div>
                <div className="nav-panel-title">
                    {panelTitle}
                </div>
            </div>
        </div>
    )
}

NavPanel.propTypes = navPanelPropTypes

export default NavPanel
