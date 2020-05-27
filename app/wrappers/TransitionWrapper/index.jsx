import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CAN_LYRIC_CAROUSEL_ENTER_SELECTOR } from '../../redux/entrance/selectors'

const TransitionWrapper = ({ children }) => {
    const
        canLyricCarouselEnter = useSelector(CAN_LYRIC_CAROUSEL_ENTER_SELECTOR)

    return (
        <div
            {...{
                className: cx(
                    'TransitionWrapper',

                    /**
                     * When transitioning between songs, explicitly reset
                     * all verse trackers.
                     */
                    canLyricCarouselEnter ?
                        'TrW__canTrackVerse' :
                        'TrW__cannotTrackVerse',

                    canLyricCarouselEnter ?
                        'TrW__canLyricCarouselEnter' :
                        'TrW__cannotLyricCarouselEnter'
                )
            }}
        >
            {children}
        </div>
    )
}

TransitionWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default TransitionWrapper
