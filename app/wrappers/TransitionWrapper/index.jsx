import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'

const TransitionWrapper = ({ children }) => {
    const
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'TransitionWrapper',

                    didMount && [
                        isSongChangeDone ?
                            'TrW__canLyricCarouselEnter' :
                            'TrW__cannotLyricCarouselEnter',
                        'abF'
                    ]
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
