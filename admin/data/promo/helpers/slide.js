import { formatKeysOfObjects } from '../../../utils/format'

export const getFormattedSlideMetadata = objects => (
    formatKeysOfObjects({
        objects,
        keys: ['title', 'body', 'footnote'],
    })
)
