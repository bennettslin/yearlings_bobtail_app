// Check if at least one present key is selected.
import keys from 'lodash.keys'

export const intersects = (presentKeys = {}, selectedKeys = {}) => {

    const presentKeysArray = keys(presentKeys)

    // If presentKeys is empty, return true.
    if (presentKeysArray.length === 0) {
        return true

    } else {
        return presentKeysArray.reduce((intersects, presentKey) => {
            return intersects || selectedKeys[presentKey]
        }, false)
    }
}
