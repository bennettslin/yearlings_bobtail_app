import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import GlobalCounter from './GlobalCounter'
import GlobalHeader from './GlobalHeader'
import GlobalColumns from './GlobalColumns'
import './style'

const TempGlobalAnnotations = () => {
    const [showTodos, setShowTodos] = useState(false)

    const toggleShowTodos = () => {
        setShowTodos(!showTodos)
    }

    useEffect(() => {
        logMount('Annotations')
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotations',
                    'PtSansNarrow',
                ),
            }}
        >
            <GlobalColumns {...{ showTodos }} />
            <GlobalHeader />
            <GlobalCounter {...{ toggleShowTodos }} />
        </div>
    )
}

export default TempGlobalAnnotations
