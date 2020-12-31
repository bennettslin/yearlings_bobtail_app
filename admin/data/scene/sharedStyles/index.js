import actors from './actors'
import things from './things'

const _recurseForCleanup = object => {
    Object.keys(object).forEach(key => {
        if (object[key] === null) {
            delete object[key]
        } else if (typeof object[key] === 'object') {
            if (!_recurseForCleanup(object[key])) {
                delete object[key]
            }
        }
    })

    if (Object.keys(object).length) {
        return object
    }
}

_recurseForCleanup(actors)
_recurseForCleanup(things)

export default {
    actors,
    things,
}
