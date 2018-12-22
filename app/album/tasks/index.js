import completed from './completed'
import remaining from './remaining'
import { combinedSongs } from './songs'

export default [
    ...completed,
    ...remaining,
    ...combinedSongs
]
