import app from './app'
import bubbles from './bubbles'
import doors from './doors'
import fixtures from './fixtures'
import furnitures from './furnitures'
import panels from './panels'
import puppets from './puppets'

export const illustratorRemainingTasks = {
    app,
    bubbles,
    doors,
    fixtures,
    furnitures,
    panels,
    puppets
}

export default [
    ...app,
    ...bubbles,
    ...doors,
    ...fixtures,
    ...furnitures,
    ...panels,
    ...puppets
]
