import completed from './completed'
import remaining from './remaining'
import { combinedSongTasks } from './songs'

export default [
    ...completed,
    ...remaining,
    ...combinedSongTasks
]
