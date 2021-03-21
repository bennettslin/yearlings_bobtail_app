import cubes from './scenes/cubes'
import { actors, things } from './scenes/presences'
import sharedStyles from './sharedStyles'
import wires from './wires'
import { layerPresencesList } from '../album/scenes'
import { RUNTIME } from '../../../app/constants/server'

export default {
    _build: RUNTIME,
    layerPresencesList,
    actors,
    cubes,
    things,
    sharedStyles,
    wires,
}
