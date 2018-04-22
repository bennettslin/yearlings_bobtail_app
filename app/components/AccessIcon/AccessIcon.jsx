// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const accessIconPropTypes = {
    // From parent.
    inButton: PropTypes.bool,
    showIfAccessed: PropTypes.bool,
    beginsCluster: PropTypes.bool,
    accessKey: PropTypes.string
},

AccessIcon = ({

    inButton,
    showIfAccessed,
    beginsCluster,
    accessKey

}) => (
    <div className={cx(
        'AccessIcon',
        inButton && 'AccessIcon__inButton',
        showIfAccessed && 'AccessIcon__showIfAccessed',
        beginsCluster && 'AccessIcon__beginsCluster',
        'flexCentreContainer'
    )}>
        {accessKey}
    </div>
)

AccessIcon.propTypes = accessIconPropTypes

export default AccessIcon
