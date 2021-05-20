import {
    getSmartQuotedObjectForKeys,
    getSmartQuotedObjectsForKeys,
} from '../../../utils/format/smartQuote'
import {
    getSpacedObjectForKeys,
    getSpacedObjectsForKeys,
} from '../../../utils/format/spacing'

const KEYS = ['title', 'body', 'footnote']

const _getSmartQuotedSlideMetadata = entity => (
    Array.isArray(entity) ? (
        getSmartQuotedObjectsForKeys({
            objects: entity,
            keys: KEYS,
        })
    ) : (
        getSmartQuotedObjectForKeys({
            object: entity,
            keys: KEYS,
        })
    )
)

const _getSpacedSlideMetadata = entity => (
    Array.isArray(entity) ? (
        getSpacedObjectsForKeys({
            objects: entity,
            keys: KEYS,
        })
    ) : (
        getSpacedObjectForKeys({
            object: entity,
            keys: KEYS,
        })
    )
)

export const getFormattedSlideMetadata = entity => {
    let newEntity

    // Order matters. Spacing function assumes straight quotes.
    newEntity = _getSpacedSlideMetadata(entity)
    newEntity = _getSmartQuotedSlideMetadata(entity)

    return newEntity
}
