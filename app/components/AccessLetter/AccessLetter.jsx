// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// import Svg from '../Svg/Svg'
import AccessField from './AccessField'
import AccessIcon from './AccessIcon'

import { CHILD_ACCESS_PREFIX } from 'constants/prefixes'

const accessIconPropTypes = {
    // From parent.
    inTextAnchor: PropTypes.bool,
    inButtonOrDotAnchor: PropTypes.bool,
    showIfAccessed: PropTypes.bool,
    animateStandaloneOnKeyDown: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
},

AccessLetter = ({

    inTextAnchor,
    inButtonOrDotAnchor,
    showIfAccessed,
    animateStandaloneOnKeyDown,
    accessKey

}) => {

    return (
        <div className={cx(
            'AccessLetter',

            animateStandaloneOnKeyDown && `${CHILD_ACCESS_PREFIX}${accessKey}`,

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
