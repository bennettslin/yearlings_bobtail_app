import actors from './actors'
import things from './things'

const _recurseToDeleteNull = object => {
    Object.keys(object).forEach(key => {
        if (object[key] === null) {
            delete object[key]
        } else if (typeof object[key] === 'object') {
            if (!_recurseToDeleteNull(object[key])) {
                delete object[key]
            }
        }
    })

    if (Object.keys(object).length) {
        return object
    }
}

_recurseToDeleteNull(actors)
_recurseToDeleteNull(things)

export default {
    actors,
    things
}
