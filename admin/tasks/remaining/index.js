// Additional work on presences.
import next from './next'
import bugs from './bugs' // 1 day.
import content from './content' // 39 days.
import important from './important' // 7 days.
import layout from './layout' // 5 days.
import maintenance from './maintenance' // 5 days.
import presence from './presence' // 7 days.

export default [
    ...next,
    ...important,
    ...bugs,
    ...content,
    ...layout,
    ...maintenance,
    ...presence
]
