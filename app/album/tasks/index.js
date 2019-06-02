import completed from './completed'
import remaining from './remaining'
import songTasks from './songs'

import completedV2 from './completed/v2'
import remainingV2 from './remaining/v2'
import songTasksV2 from './songs/v2'

export default [
    ...completed,
    ...remaining,
    ...[].concat(...songTasks),

    ...completedV2,
    ...remainingV2,
    ...[].concat(...songTasksV2)
]
