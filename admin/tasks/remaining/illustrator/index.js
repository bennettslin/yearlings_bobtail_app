import app from './app'
import doors from './doors'
import fixtures from './fixtures'
import furnitures from './furnitures'
import puppets from './puppets'

export const illustratorRemainingTasks = {
    app,
    doors,
    fixtures,
    furnitures,
    puppets
}

export default [
    ...app,
    ...doors,
    ...fixtures,
    ...furnitures,
    ...puppets
]
