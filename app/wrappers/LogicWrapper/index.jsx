import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    mapSceneCursorIndex,
    mapVerseCursorIndex
} from '../../redux/cursor/selector'
import {
    getPrefixedSceneClassNames,
    getPrefixedVerseClassNames
} from './helper'

const LogicWrapper = ({ children }) => {
    const
        sceneCursorIndex = useSelector(mapSceneCursorIndex),
        verseCursorIndex = useSelector(mapVerseCursorIndex)

    return (
        <div
            {...{
                className: cx(
                    'LogicWrapper',
                    getPrefixedSceneClassNames(sceneCursorIndex),
                    getPrefixedVerseClassNames(verseCursorIndex)
                )
            }}
        >
            {children}
        </div>
    )
}

LogicWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default LogicWrapper
