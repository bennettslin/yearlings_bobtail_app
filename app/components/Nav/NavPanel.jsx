// Container for image above each button.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSongTitle } from '../../helpers/dataHelper'

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
        <div className={cx(
            'NavPanel',
            { 'NavPanel__leftmost': isLeftmost,
              'NavPanel__rightmost': isRightmost,
              'NavPanel__default': !isLeftmost && !isRightmost }
            )}
        >
            <div className={cx(
                'NavPanelImage',
                'absoluteFullContainer'
            )}>
            </div>
            <div className="NavPanelTitle">
                {panelTitle}
            </div>
        </div>
    )
}

NavPanel.propTypes = navPanelPropTypes

export default NavPanel
