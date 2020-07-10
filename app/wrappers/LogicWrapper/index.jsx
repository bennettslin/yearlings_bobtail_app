import React, { useEffect, useState } from 'react'
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
        verseCursorIndex = useSelector(mapVerseCursorIndex),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'LogicWrapper',

                    didMount && [
                        getPrefixedSceneClassNames(sceneCursorIndex),
                        getPrefixedVerseClassNames(verseCursorIndex)
                    ],
                    'abF'
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
