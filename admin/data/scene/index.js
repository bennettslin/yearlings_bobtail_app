import cubes from './scenes/cubes'
import { actors, things } from './scenes/presences'
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
    wires,
}
