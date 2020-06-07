import actors from './actors'
import things from './things'

const _recurseForCleanup = object => {
    Object.keys(object).forEach(key => {
        if (key === 'layerYIndex') {
            delete object[key]
        } else if (typeof object[key] === 'object') {
            _recurseForCleanup(object[key])
        }
    })
}

// Ensure that null values don't get passed to final build.
_recurseForCleanup(actors)
_recurseForCleanup(things)

export {
    actors,
    things
}
