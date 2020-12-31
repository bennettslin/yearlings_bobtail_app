import completed from './completed'
import remaining from './remaining'
import songTasks from './completed/songs'

export default [
    ...completed,
    ...remaining,
    ...[].concat(...songTasks),
]
