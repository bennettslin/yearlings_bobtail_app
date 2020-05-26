import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TransitionWrapper = ({ children }) => {
    const {
        canLyricCarouselEnter
    } = useSelector(mapStateToProps)

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

const mapStateToProps = ({
    entranceStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

TransitionWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default TransitionWrapper
