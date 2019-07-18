import React from 'react'
import PropTypes from 'prop-types'

import ProgressBar from '../../ProgressBar'

const propTypes = {
    task: PropTypes.object.isRequired,
    isSubtask: PropTypes.bool,
    maxTotalNeededHours: PropTypes.number.isRequired
}

const TaskRow = ({
    task,
    isSubtask,
    maxTotalNeededHours

}) => {
    const {
        workedHours,
        neededHours
    } = task

    return (

        <div className={`row ${isSubtask ? 'secondary-row' : 'primary-row'}`}>
            <ProgressBar
                sumTask={task}
                maxTotalNeededHours={maxTotalNeededHours}
            />
            <div className="text-cell-wrapper">
                <span className="text-cell text">
                    {task.taskName}
                </span>
                {task.neededHours &&
                    <span className="text-cell figure">
                        {parseInt(workedHours)}/{parseInt(neededHours)}h
                    </span>
                }
            </div>
        </div>
    )
}

TaskRow.propTypes = propTypes

export default TaskRow
