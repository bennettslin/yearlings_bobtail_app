import actors from './scenes/actors'
import cubes from './scenes/cubes'
import things from './scenes/things'
import sharedStyles from './sharedStyles'
import wires from './wires'
import { layerPresencesList } from '../album/scenes'

export default {
    _build: 'runtime',
    layerPresencesList,
    actors,
    cubes,
    things,
    sharedStyles,
    wires
}
