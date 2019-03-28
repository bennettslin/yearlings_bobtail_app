import completed from './completed/v2'
import remaining from './remaining/v2'
import songTasks from './songs/v2'

export default [
    ...completed,
    ...remaining,
    ...[].concat(...songTasks)
]
