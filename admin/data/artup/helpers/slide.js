import { formatKeysOfArrayOfObjects } from '../../../utils/format'

export const getFormattedSlideMetadata = slides => (
    formatKeysOfArrayOfObjects({
        objects: slides,
        keys: ['title', 'body', 'footnote'],
    })
)
