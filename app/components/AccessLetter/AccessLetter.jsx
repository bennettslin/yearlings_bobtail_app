// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// import Svg from '../Svg/Svg'
import AccessField from './AccessField'
import AccessIcon from './AccessIcon'

const accessIconPropTypes = {
    // From parent.
    inTextAnchor: PropTypes.bool,
    inButtonOrDotAnchor: PropTypes.bool,
    showIfAccessed: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
},

AccessLetter = ({

    inTextAnchor,
    inButtonOrDotAnchor,
    showIfAccessed,
    accessKey

}) => {

    return (
        <div className={cx(
            'AccessLetter',
            `AccessLetter__${accessKey}`,
            inTextAnchor && 'AccessLetter__inTextAnchor',
            inButtonOrDotAnchor && 'AccessLetter__inButtonOrDotAnchor',

            (
                inTextAnchor ||
                inButtonOrDotAnchor
            ) && 'AccessLetter__inInteractable',

            showIfAccessed && 'AccessLetter__showIfAccessed',

            'flexCentreContainer'
        )}>
            <AccessField />
            <AccessIcon
                {...{
                    accessKey
                }}
            />
        </div>
    )
}

AccessLetter.propTypes = accessIconPropTypes

export default AccessLetter
