import { formatKeysOfObject, formatKeysOfObjects } from '../../../utils/format'

const KEYS = ['title', 'body', 'footnote']

export const getFormattedSlideMetadata = entity => (
    Array.isArray(entity) ? (
        formatKeysOfObjects({
            objects: entity,
            keys: KEYS,
        })
    ) : (
        formatKeysOfObject({
            object: entity,
            keys: KEYS,
        })
    )
)
