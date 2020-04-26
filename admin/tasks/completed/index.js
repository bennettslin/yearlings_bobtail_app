import general from './general'
import illustrator from './illustrator'
import legacy from './legacy'
import scene from './scene'

const completed = [
    ...general,
    ...illustrator,
    ...legacy,
    ...scene
]

completed.forEach(task => {
    if (task.workedHours !== task.neededHours) {
        console.log(task.taskName)
    }
})

export default completed
