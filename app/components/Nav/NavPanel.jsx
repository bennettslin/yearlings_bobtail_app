// Container for image above each button.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getSongTitle } from '../../helpers/dataHelper'

const navPanelPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isLeftmost: PropTypes.bool,
    isRightmost: PropTypes.bool,
    songIndex: PropTypes.number
},

NavPanel = ({

    // From props.
    isAccessed,
    isLeftmost,
    isRightmost,
    songIndex

}) => {

    const panelTitle = getSongTitle({

        songIndex,
        showIndex: false

    })

    return (
        <div className={cx(
            'NavPanel',
            { 'NavPanel__isAccessed': isAccessed,
              'NavPanel__leftmost': isLeftmost,
              'NavPanel__rightmost': isRightmost,
              'NavPanel__default': !isLeftmost && !isRightmost }
        )}>
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
