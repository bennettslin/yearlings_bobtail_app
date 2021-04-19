import React, { useEffect } from 'react'
import cx from 'classnames'
import GlobalCounter from './GlobalCounter'
import GlobalHeader from './GlobalHeader'
import GlobalColumns from './GlobalColumns'
import './style'

const TempGlobalAnnotations = () => {
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
            <GlobalColumns />
            <GlobalHeader />
            <GlobalCounter />
        </div>
    )
}

export default TempGlobalAnnotations
