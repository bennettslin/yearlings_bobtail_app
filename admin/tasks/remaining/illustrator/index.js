import app from './app'
import doors from './doors'
import fixtures from './fixtures'

export const illustratorRemainingTasks = {
    app,
    doors,
    fixtures
}

export default [
    ...app,
    ...doors,
    ...fixtures
]
