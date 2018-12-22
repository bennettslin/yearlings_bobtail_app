export const hasRemainingHours = (task) => {
    const {
        workedHours,
        neededHours,
        subtasks
    } = task
    return workedHours < neededHours ||
        (subtasks && subtasks.reduce((hasRemainingHours, subtask) => {
            const {
                workedHours,
                neededHours
            } = subtask
            return workedHours < neededHours || hasRemainingHours
        }, false))
}

export const getMaxTotalNeededHoursFromTasks = (tasks = []) => {
    const maxTotalNeededHoursFromTasks = tasks.reduce((maxTotalNeededHours, task) => {
        let maxFromTask = task.neededHours

        if (task.subtasks) {
            const maxFromSubtasks = getMaxTotalNeededHoursFromTasks(task.subtasks)
            maxFromTask = Math.max(maxFromSubtasks, maxFromTask)
        }

        return Math.max(maxTotalNeededHours, maxFromTask)
    }, 0)

    return maxTotalNeededHoursFromTasks
}
