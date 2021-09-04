import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getTimeStringFromHours,
    getFinishDateFromHours,
    getSumOfTasks,
} from './helper'
import './style'

const ProjectSection = ({
    isV2 = false,
    tasks,
}) => {
    const {
            workedHours,
            neededHours,
        } = getSumOfTasks(tasks),
        remainingHours = neededHours - workedHours,
        neededTime = getTimeStringFromHours(neededHours),
        workedTime = getTimeStringFromHours(workedHours),
        remainingTime = getTimeStringFromHours(remainingHours),
        finishDate = getFinishDateFromHours(remainingHours)

    return (
        <div className={cx(
            'ProjectSection',
            isV2 && 'ProgressSection__v2',
        )}>
            {isV2 && (
                <h5>v2</h5>
            )}
            <p>
                {parseInt(neededHours)}h - {parseInt(workedHours)}h = {parseInt(remainingHours)}h
            </p>
            <p>needed time: {neededTime}</p>
            <p>worked time: {workedTime}</p>
            <p>remaining time: {remainingTime}</p>
            {!isV2 && (
                <p>finish date: {finishDate}</p>
            )}
        </div>
    )
}

ProjectSection.propTypes = {
    isV2: PropTypes.bool,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            taskName: PropTypes.string,
            workedHours: PropTypes.number,
            neededHours: PropTypes.number,
        }).isRequired,
    ).isRequired,
}

export default ProjectSection
