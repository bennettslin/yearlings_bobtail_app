// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import CSSTransition from 'react-transition-group/CSSTransition'
import AccessField from './Field'
import AccessIcon from './Icon'

import { CHILD_ACCESS_PREFIX } from '../../../constants/prefixes'

const mapStateToProps = ({
    accessStore: { isAccessOn }
}) => ({
    isAccessOn
})

const propTypes = {
    // Through Redux.
    isAccessOn: PropTypes.bool.isRequired,

    // From parent.
    inButtonOrDotAnchor: PropTypes.bool,
    showIfAccessOn: PropTypes.bool,
    animateStandaloneOnKeyDown: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
}

const AccessLetter = ({
    isAccessOn,
    inButtonOrDotAnchor,
    showIfAccessOn,
    animateStandaloneOnKeyDown,
    accessKey

}) => {
    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: isAccessOn && showIfAccessOn,
                timeout: 200,
                classNames: {
                    enterActive: 'AccessLetter__shown',
                    enterDone: 'AccessLetter__shown'
                }
            }}
        >
            <div
                className={cx(
                    'AccessLetter',

                    animateStandaloneOnKeyDown &&
                        `${CHILD_ACCESS_PREFIX}${accessKey}`,

                    inButtonOrDotAnchor &&
                        'AccessLetter__inButtonOrDotAnchor',

                    'flexCentreContainer',
                    'Neuton'
                )}
            >
                <AccessField />
                <AccessIcon
                    {...{
                        accessKey
                    }}
                />
            </div>
        </CSSTransition>
    )
}

AccessLetter.propTypes = propTypes

export default connect(mapStateToProps)(memo(AccessLetter))
