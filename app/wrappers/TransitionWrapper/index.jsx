import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsSongSelectComplete } from '../../redux/lyric/selector'

const TransitionWrapper = ({ children }) => {
    const isSongSelectComplete = useSelector(mapIsSongSelectComplete)

    return (
        <div
            {...{
                className: cx(
                    'TransitionWrapper',

                    isSongSelectComplete ?
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
