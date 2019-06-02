import completedV2 from './completed/v2'
import remainingV2 from './remaining/v2'
import songTasksV2 from './songs/v2'

export default [
    ...completedV2,
    ...remainingV2,
    ...[].concat(...songTasksV2)
]
