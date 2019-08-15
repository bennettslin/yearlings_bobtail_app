import app from './app'
import doors from './doors'
import fixtures from './fixtures'
import furnitures from './furnitures'
import panels from './panels'
import puppets from './puppets'

export const illustratorRemainingTasks = {
    app,
    doors,
    fixtures,
    furnitures,
    panels,
    puppets
}

export default [
    ...app,
    ...doors,
    ...fixtures,
    ...furnitures,
    ...panels,
    ...puppets
]
