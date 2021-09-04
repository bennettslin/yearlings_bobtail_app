import React from 'react'
import cx from 'classnames'
import ProjectSection from './ProjectSection'
import {
    getAllTasks,
    getAllTasksV2,
} from './helper'

const Project = () => (
    <div
        {...{
            className: cx(
                'Progress__column',
            ),
        }}
    >
        <div
            {...{
                className: cx(
                    'Project',
                    'Progress__field',
                ),
            }}
        >
            <h2>project</h2>
            <ProjectSection {...{ tasks: getAllTasks() }} />
            <ProjectSection isV2 {...{ tasks: getAllTasksV2() }} />
        </div>
    </div>
)

export default Project
