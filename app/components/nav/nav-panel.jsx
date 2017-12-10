// Container for all song buttons in a book.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getSongTitle } from '../../helpers/data-helper'

const navPanelPropTypes = {
    // From parent.
    isLeftmost: PropTypes.bool,
    isRightmost: PropTypes.bool,
    bookIndex: PropTypes.number,
    songIndex: PropTypes.number
},

NavPanel = ({

    // From props.
    isLeftmost,
    isRightmost,
    bookIndex,
    songIndex

}) => {
    // Panel title is either song or logue title, or directive to Book.
    const panelTitle = isNaN(bookIndex) ? getSongTitle({

        songIndex,
        showIndex: false

    }) : `show Book ${bookIndex === 0 ? 'I' : 'II'}`

    return (
        <div className={classnames(
            'nav-panel-block',
            { 'leftmost': isLeftmost,
              'rightmost': isRightmost,
              'centred': !isLeftmost && !isRightmost }
            )}
        >
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
