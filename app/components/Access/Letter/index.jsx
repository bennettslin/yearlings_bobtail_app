// Container to show multiple access icons in sequence.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import AccessField from './Field'
import AccessIcon from './Icon'
import { CHILD_ACCESS_PREFIX } from '../../../constants/prefixes'
import { mapIsAccessOn } from '../../../redux/access/selector'
import {
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../../../redux/device/selector'
import './style'

const AccessLetter = ({
    inButtonOrDotAnchor,
    showIfAccessOn,
    animateStandaloneOnKeyDown,
    accessKey

}) => {
    const
        isAccessOn = useSelector(mapIsAccessOn),
        isTabletWidth = useSelector(mapIsTabletWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth)

    /**
     * Only prevent access letters from being shown on narrow screens for UI
     * purposes. Keyboard access is technically still available on any device,
     * in any viewport width.
     */
    return (isDesktopWidth || isTabletWidth) && (
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

AccessLetter.propTypes = {
    inButtonOrDotAnchor: PropTypes.bool,
    showIfAccessOn: PropTypes.bool,
    animateStandaloneOnKeyDown: PropTypes.bool,
    accessKey: PropTypes.string.isRequired
}

export default memo(AccessLetter)
