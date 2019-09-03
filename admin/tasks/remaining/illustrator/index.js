import app from './app'
import doors from './doors'
import fixtures from './fixtures'
import problem from './problem'

export const illustratorRemainingTasks = {
    app,
    doors,
    fixtures,
    problem
}

export default [
    ...app,
    ...doors,
    ...fixtures,
    ...problem
]
