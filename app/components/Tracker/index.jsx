import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import './style'

const Tracker = ({
    isNotShown,
    isVertical,
    trackerLength

}) => (
    <CSSTransition
        appear
        unmountOnExit
        mountOnEnter
        {...{
            in: Number.isFinite(trackerLength),
            timeout: 200,
            classNames: { enterDone: 'Tracker__visible' }
        }}
    >
        <div
            {...{
                className: cx(
                    'Tracker',
                    'abF'
                ),
                style: {
                    [isVertical ? 'height' : 'width']: `${trackerLength}%`,
                    /**
                     * This allows tracker in unit verse to stay hidden when
                     * verse bar is shown.
                     */
                    ...isNotShown && {
                        visibility: 'hidden'
                    }
                }
            }}
        />
    </CSSTransition>
)

Tracker.propTypes = {
    isNotShown: PropTypes.bool,
    isVertical: PropTypes.bool,
    trackerLength: PropTypes.number
}

export default memo(Tracker)
