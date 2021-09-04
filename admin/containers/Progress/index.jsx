import React, { useEffect } from 'react'
import cx from 'classnames'
import Drawing from './Drawing'
import Project from './Project'
import './style'

const Progress = () => {
    useEffect(() => {
        logMount('Progress')
    }, [])

    return (
        <div
            className={cx(
                'Progress',
                'font__text',
            )}
        >
            <Project />
            <Drawing />
        </div>
    )
}

export default Progress
