import app from './app'
import doors from './doors'
import fixtures from './fixtures'
import puppets from './puppets'

export const illustratorRemainingTasks = {
    app,
    doors,
    fixtures,
    puppets
}

export default [
    ...app,
    ...doors,
    ...fixtures,
    ...puppets
]
