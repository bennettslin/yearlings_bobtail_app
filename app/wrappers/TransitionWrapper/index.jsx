import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import {
    mapIsSongChangeDone,
    mapCanPresenceTransitionExit,
    mapCanPresenceTransitionEnter,
    mapCanCubesTransition,
} from '../../redux/entrance/selector'

const TransitionWrapper = ({ didMount, children }) => {
    const
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canCubesTransition = useSelector(mapCanCubesTransition),
        canPresenceTransitionExit = useSelector(mapCanPresenceTransitionExit),
        canPresenceTransitionEnter = useSelector(mapCanPresenceTransitionEnter)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'TransitionWrapper',

                        canCubesTransition &&
                            'TrW__canCubesTransition',

                        // These are used in transition stylesheets.
                        canPresenceTransitionExit &&
                            'TrW__canPresenceTransitionExit',
                        canPresenceTransitionEnter &&
                            'TrW__canPresenceTransitionEnter',

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
