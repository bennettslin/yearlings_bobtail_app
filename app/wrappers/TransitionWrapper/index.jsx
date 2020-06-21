import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapCanLyricCarouselEnter } from '../../redux/lyric/selector'

const TransitionWrapper = ({ children }) => {
    const canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter)

    return (
        <div
            {...{
                className: cx(
                    'TransitionWrapper',

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
