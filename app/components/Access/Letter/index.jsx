// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AccessField from './Field'
import AccessIcon from './Icon'

import { CHILD_ACCESS_PREFIX } from '../../../constants/prefixes'

const mapStateToProps = ({ deviceStore: { isDesktop } }) => ({
    isDesktop
})

const propTypes = {
    // Through Redux.
    isDesktop: PropTypes.bool.isRequired,

    // From parent.
    inTextAnchor: PropTypes.bool,
    inButtonOrDotAnchor: PropTypes.bool,
    isShadow: PropTypes.bool,
    showIfAccessed: PropTypes.bool,
    animateStandaloneOnKeyDown: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
}

const AccessLetter = memo(({
    isDesktop,
    inTextAnchor,
    inButtonOrDotAnchor,
    isShadow,
    showIfAccessed,
    animateStandaloneOnKeyDown,
    accessKey

}) => {
    return isDesktop && (
        <div
            className={cx(
                'AccessLetter',

                !isShadow && 'AccessLetter__isNotShadow',

                animateStandaloneOnKeyDown &&
                    `${CHILD_ACCESS_PREFIX}${accessKey}`,

                inTextAnchor && 'AccessLetter__inTextAnchor',
                inButtonOrDotAnchor && 'AccessLetter__inButtonOrDotAnchor',

                (inTextAnchor || inButtonOrDotAnchor) &&
                    'AccessLetter__inInteractable',

                showIfAccessed && 'AccessLetter__showIfAccessed',

                'flexCentreContainer'
            )}
        >
            <AccessField />
            <AccessIcon
                {...{
                    accessKey
                }}
            />
        </div>
    )
})

AccessLetter.propTypes = propTypes

export default connect(mapStateToProps)(AccessLetter)
