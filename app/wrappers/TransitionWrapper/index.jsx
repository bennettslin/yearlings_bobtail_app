import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'

const TransitionWrapper = ({ children }) => {
    const isSongChangeDone = useSelector(mapIsSongChangeDone)

    return (
        <div
            {...{
                className: cx(
                    'TransitionWrapper',

                    isSongChangeDone ?
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
