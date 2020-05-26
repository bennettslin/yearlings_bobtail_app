// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import AccessField from './Field'
import AccessIcon from './Icon'
import { CHILD_ACCESS_PREFIX } from '../../../constants/prefixes'
import './style'

const mapStateToProps = ({
    accessStore: { isAccessOn },
    viewportStore: {
        isDesktopWidth,
        isTabletWidth
    }
}) => ({
    isAccessOn,
    isDesktopWidth,
    isTabletWidth
})

const propTypes = {
    // Through Redux.
    isAccessOn: PropTypes.bool.isRequired,
    isDesktopWidth: PropTypes.bool.isRequired,
    isTabletWidth: PropTypes.bool.isRequired,

    // From parent.
    inButtonOrDotAnchor: PropTypes.bool,
    showIfAccessOn: PropTypes.bool,
    animateStandaloneOnKeyDown: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
}

const AccessLetter = ({
    isAccessOn,
    isDesktopWidth,
    isTabletWidth,
    inButtonOrDotAnchor,
    showIfAccessOn,
    animateStandaloneOnKeyDown,
    accessKey

}) => {
    /**
     * Only prevent access letters from being shown on narrow screens for UI
     * purposes. Keyboard access is technically still available on any device,
     * in any viewport width.
     */
    if (
        !isDesktopWidth &&
        !isTabletWidth
    ) {
        return null
    }

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

                    'fCC',
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
