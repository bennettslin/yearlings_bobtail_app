import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { mapIsSceneChangeDone, mapIsSongChangeDone } from '../../redux/entrance/selector'

const TransitionWrapper = ({ didMount, children }) => {
    const
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'TransitionWrapper',

                        isSceneChangeDone && 'TrW__isSceneChangeDone',

                        isSongChangeDone ?
                            'TrW__canLyricCarouselEnter' :
                            'TrW__cannotLyricCarouselEnter',
                        'abF'
                    )
                }
            }}
        >
            {children}
        </div>
    )
}

TransitionWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(TransitionWrapper))
