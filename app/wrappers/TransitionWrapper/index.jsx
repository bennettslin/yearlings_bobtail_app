import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import {
    mapIsSongChangeDone,
    mapCanTransitionForSceneExit,
    mapCanTransitionForSceneEnter,
} from '../../redux/entrance/selector'

const TransitionWrapper = ({ didMount, children }) => {
    const
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canTransitionForSceneExit = useSelector(mapCanTransitionForSceneExit),
        canTransitionForSceneEnter = useSelector(mapCanTransitionForSceneEnter)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'TransitionWrapper',

                        // These are used in transition stylesheets.
                        canTransitionForSceneExit &&
                            'TrW__canPresenceTransitionExit',
                        canTransitionForSceneEnter && [
                            'TrW__canPresenceTransitionEnter',
                            'TrW__canCubesTransition',
                        ],

                        isSongChangeDone ?
                            'TrW__isSongChangeDone' :
                            'TrW__isSongChangeNotDone',
                        'abF'
                    ),
                },
            }}
        >
            {children}
        </div>
    )
}

TransitionWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(TransitionWrapper))
