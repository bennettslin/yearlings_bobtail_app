import albumTasks from 'album/tasks/songs'

import { getSumOfTasks } from '../helper'

export const getMaxTotalNeededHoursFromSongs = () => {

    return albumTasks.reduce((maxTotalNeededHours, songTasks) => {

        const totalNeededHours = getSumOfTasks(songTasks).neededHours
        return Math.max(totalNeededHours, maxTotalNeededHours)
    }, 0)
}
