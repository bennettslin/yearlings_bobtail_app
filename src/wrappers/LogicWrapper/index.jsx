import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../hocs/DidMountHoc'
import {
    mapSceneCursorIndex,
    getMapVerseCursorIndex,
} from '../../redux/cursor/selector'
import {
    getPrefixedSceneClassNames,
    getPrefixedVerseClassNames,
} from './helper'

const LogicWrapper = ({ didMount, children }) => {
    const
        sceneCursorIndex = useSelector(mapSceneCursorIndex),
        verseCursorIndex = useSelector(getMapVerseCursorIndex())

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'LogicWrapper',

                        getPrefixedSceneClassNames(sceneCursorIndex),
                        getPrefixedVerseClassNames(verseCursorIndex),
                        'abF',
                    ),
                },
            }}
        >
            {children}
        </div>
    )
}

LogicWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(LogicWrapper))
