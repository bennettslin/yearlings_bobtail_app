import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import {
    mapIsSongChangeDone,
    mapCanTransitionAfterSceneChange
} from '../../redux/entrance/selector'

const TransitionWrapper = ({ didMount, children }) => {
    const
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canTransitionAfterSceneChange =
            useSelector(mapCanTransitionAfterSceneChange)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'TransitionWrapper',

                        canTransitionAfterSceneChange &&
                            'TrW__canTransitionAfterSceneChange',

                        isSongChangeDone ?
                            'TrW__isSongChangeDone' :
                            'TrW__isSongChangeNotDone',
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
