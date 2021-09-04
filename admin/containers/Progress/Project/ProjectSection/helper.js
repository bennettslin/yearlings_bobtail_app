import addDays from 'date-fns/addDays'
import format from 'date-fns/format'

const WORK_HOURS_IN_DAY = 36 / 7,
    DAYS_IN_WEEK = 7,
    DAYS_IN_MONTH = 365 / 12

const _addTaskToSum = (sumTasks, task) => {
    if (Number.isFinite(task.workedHours)) {
        sumTasks.workedHours += task.workedHours

        // Completed tasks do not have needed hours.
        if (!Number.isFinite(task.neededHours)) {
            task.neededHours = task.workedHours
        }

        sumTasks.neededHours += task.neededHours
    }
}

export const getSumOfTasks = (tasks = []) => {
    const sumTasks = {
        workedHours: 0,
        neededHours: 0,
    }

    tasks.forEach(task => {
        _addTaskToSum(sumTasks, task)
        if (Array.isArray(task.subtasks)) {
            task.subtasks.forEach(subtask => {
                _addTaskToSum(sumTasks, subtask)
            })
        }
    })

    return sumTasks
}

const _getRemainingTimeFromHours = (hours = 0) => {
    const totalDays = hours / WORK_HOURS_IN_DAY,
        totalMonths = Math.floor(totalDays / DAYS_IN_MONTH),
        remainingWeeks = Math.floor((totalDays - (totalMonths * DAYS_IN_MONTH)) / DAYS_IN_WEEK),
        remainingDays = Math.floor(totalDays - (totalMonths * DAYS_IN_MONTH) - (remainingWeeks * DAYS_IN_WEEK))

    return {
        months: totalMonths,
        weeks: remainingWeeks,
        days: remainingDays,
    }
}

export const getFinishDateFromHours = (hours = 0, raw) => {
    const totalDays = hours / WORK_HOURS_IN_DAY,
        today = new Date(),
        finishDate = addDays(today, totalDays)

    return raw ? finishDate : format(finishDate, 'MMM d, yyyy')
}

export const getTimeStringFromHours = (hours = 0) => {
    const remainingTimeObject = _getRemainingTimeFromHours(hours),
        {
            months,
            weeks,
            days,
        } = remainingTimeObject

    if (!months && !weeks && !days) {
        return '0d'
    } else {
        return (months ? months + 'm' : '') +
            (months && weeks ? ', ' : '') +
            (weeks ? weeks + 'w' : '') +
            ((months || weeks) && days ? ', ' : '') +
            (days ? days + 'd' : '')
    }
}
